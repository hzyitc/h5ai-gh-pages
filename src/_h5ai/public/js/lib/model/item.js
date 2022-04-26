const {keys, each, filter, map, sortBy, isStr, isNum} = require('../util');
const {request} = require('@octokit/request');
const config = require('../config');
const location = require('../core/location');
const settings = require('../core/settings');
const types = require('../core/types');

const reEndsWithSlash = /\/$/;
const reSplitPath = /^(.*\/)([^\/]+\/?)$/;
const cache = {};


const startsWith = (sequence, part) => isStr(sequence) && sequence.startsWith(part);

const trimEndSlash = sequence => sequence.replace(reEndsWithSlash, '');

const createLabel = sequence => {
    sequence = trimEndSlash(sequence);
    try {
        sequence = decodeURIComponent(sequence);
    } catch (e) {/* skip */}
    return sequence;
};

const splitPath = sequence => {
    if (sequence === '/') {
        return {
            parent: null,
            name: '/'
        };
    }

    const match = reSplitPath.exec(sequence);
    if (!match) {
        return null;
    }

    const split = {
        parent: match[1],
        name: match[2]
    };

    if (split.parent && !startsWith(split.parent, settings.rootHref)) {
        split.parent = null;
    }
    return split;
};

const getItem = options => {
    if (isStr(options)) {
        options = {href: options};
    } else if (!options || !isStr(options.href)) {
        return null;
    }

    const href = location.forceEncoding(options.href);

    if (!startsWith(href, settings.rootHref)) {
        return null;
    }

    const item = cache[href] || Item(href); // eslint-disable-line no-use-before-define

    if (isNum(options.time)) {
        item.time = options.time;
    }
    if (isNum(options.size)) {
        item.size = options.size;
    }
    if (options.fetched) {
        item.isContentFetched = true;
    }

    return item;
};

const removeItem = absHref => {
    absHref = location.forceEncoding(absHref);

    const item = cache[absHref];

    if (item) {
        delete cache[absHref];
        if (item.parent) {
            delete item.parent.content[item.absHref];
        }
        each(item.content, child => {
            removeItem(child.absHref);
        });
    }
};

const fetchContent = absHref => {
    return new Promise(resolve => {
        const item = getItem(absHref);

        if (item.isContentFetched) {
            resolve(item);
        } else {
            const path = trimEndSlash(item.getRelPathToRoot());
            // `path` has been encoded, so use in `url` directly
            // use in `obj` will cause nested encoding
            request(`GET /repos/{owner}/{repo}/contents/${path}`, {
                owner: config.repo.owner,
                repo: config.repo.repo,
                ref: config.repo.branch
            }).then(response => {
                if (response.status === 200) {
                    const found = {};

                    each(response.data, i => {
                        const e = getItem({
                            href: settings.rootHref + i.path + (i.type === 'dir' ? '/' : ''),
                            size: i.type === 'dir' ? i.size : null
                        });
                        found[e.absHref] = true;
                    });

                    each(item.content, e => {
                        if (!found[e.absHref]) {
                            removeItem(e.absHref);
                        }
                    });

                    item.isContentFetched = true;
                }

                resolve(item);
            });
        }
    });
};


const Item = absHref => {
    const split = splitPath(absHref);

    const inst = Object.assign(Object.create(Item.prototype), {
        absHref,
        type: types.getType(absHref),
        label: createLabel(absHref === '/' ? location.getDomain() : split.name),
        time: null,
        size: null,
        parent: null,
        content: {}
    });

    cache[absHref] = inst;

    if (split.parent) {
        inst.parent = getItem(split.parent);
        inst.parent.content[inst.absHref] = inst;
        if (keys(inst.parent.content).length > 1) {
            inst.parent.isContentFetched = true;
        }
    }

    return inst;
};

Item.prototype = {
    constructor: Item,

    isFolder() {
        return reEndsWithSlash.test(this.absHref);
    },

    isCurrentFolder() {
        return this.absHref === location.getAbsHref();
    },

    isInCurrentFolder() {
        return !!this.parent && this.parent.isCurrentFolder();
    },

    isCurrentParentFolder() {
        const item = getItem(location.getAbsHref());
        return !!item && this === item.parent;
    },

    isDomain() {
        return this.absHref === '/';
    },

    isRoot() {
        return this.absHref === settings.rootHref;
    },

    isEmpty() {
        return keys(this.content).length === 0;
    },

    isManaged() {
        if (!this.isFolder()) {
            return false;
        }

        let result = true;
        each(this.content, item => {
            if (config.options.view.unmanaged.indexOf(item.label) !== -1) {
                result = false;
            }
        });
        return result;
    },

    fetchContent() {
        return fetchContent(this.absHref)
            .then(item =>
                Promise.all(map(item.getSubfolders(), i =>
                    fetchContent(i.absHref)
                ))
            );
    },

    getRelPathTo(parent) {
        if (!parent.endsWith('/') || !this.absHref.startsWith(parent)) {
            return null;
        }

        return this.absHref.slice(parent.length);
    },

    getRelPathToRoot() {
        return this.getRelPathTo(settings.rootHref);
    },

    getCrumb() {
        let item = this; // eslint-disable-line consistent-this
        const crumb = [item];

        while (item.parent) {
            item = item.parent;
            crumb.unshift(item);
        }

        return crumb;
    },

    getSubfolders() {
        return sortBy(filter(this.content, item => {
            return item.isFolder();
        }), item => {
            return item.label.toLowerCase();
        });
    },

    getStats() {
        let folders = 0;
        let files = 0;

        each(this.content, item => {
            if (item.isFolder()) {
                folders += 1;
            } else {
                files += 1;
            }
        });

        let depth = 0;
        let item = this; // eslint-disable-line consistent-this

        while (item.parent) {
            depth += 1;
            item = item.parent;
        }

        return {
            folders,
            files,
            depth
        };
    }
};


module.exports = {
    get: getItem,
    remove: removeItem
};
