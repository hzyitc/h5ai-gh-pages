const {request} = require('./server');

/* eslint-disable quote-props */
const config = module.exports = {
    _update: query => request(query).then(resp => Object.assign(config, resp)),

    repo: {
        owner: 'hzyitc',
        repo: 'h5ai-gh-pages',
        branch: 'gh-pages'
    },

    'langs': {
        'af': 'afrikaans',
        'bg': 'български',
        'cs': 'čeština',
        'da': 'dansk',
        'de': 'deutsch',
        'el': 'ελληνικά',
        'en': 'english',
        'es': 'español',
        'et': 'estonian',
        'fi': 'finnish',
        'fr': 'français',
        'he': 'עברית',
        'hi': 'हिंदी',
        'hr': 'hrvatski',
        'hu': 'magyar',
        'id': 'Bahasa Indonesia',
        'it': 'italiano',
        'ja': '日本語',
        'ko': '한국어',
        'lv': 'latviešu',
        'nb': 'norwegian',
        'nl': 'nederlands',
        'pl': 'polski',
        'pt-br': 'português do Brasil',
        'pt-pt': 'português de Portugal',
        'ro': 'română',
        'ru': 'русский',
        'sk': 'slovenčina',
        'sl': 'slovenščina',
        'sr': 'srpski',
        'sv': 'svenska',
        'tr': 'türkçe',
        'uk': 'українська',
        'zh-cn': '简体中文',
        'zh-tw': '正體中文'
    },
    'options': {
        'resources': {
            'scripts': [],
            'styles': [
                '//fonts.googleapis.com/css?family=Ubuntu:300,400,700%7CUbuntu+Mono:400,700'
            ]
        },
        'view': {
            'binaryPrefix': false,
            'disableSidebar': false,
            'fallbackMode': false,
            'fastBrowsing': true,
            'fonts': [
                'Ubuntu',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif'
            ],
            'fontsMono': [
                'Ubuntu Mono',
                'Monaco',
                'Lucida Sans Typewriter',
                'monospace'
            ],
            'hidden': [
                '^\\.',
                '^_h5ai'
            ],
            'hideFolders': false,
            'hideIf403': true,
            'hideParentFolder': false,
            'maxIconSize': 40,
            'modes': [
                'details',
                'grid',
                'icons'
            ],
            'modeToggle': false,
            'setParentFolderLabels': true,
            'sizes': [
                20,
                40,
                60,
                80,
                100,
                140,
                180,
                220,
                260,
                300
            ],
            'theme': 'comity',
            'unmanaged': [
                'index.html',
                'index.htm',
                'index.php'
            ],
            'unmanagedInNewWindow': false
        },
        'autorefresh': {
            'enabled': false,
            'interval': 5000
        },
        'crumb': {
            'enabled': true
        },
        'custom': {
            'enabled': true,
            'stopSearchingAtRoot': true
        },
        'download': {
            'enabled': true,
            'type': 'php-tar',
            'packageName': null,
            'alwaysVisible': false
        },
        'filter': {
            'enabled': false,
            'advanced': true,
            'debounceTime': 100,
            'ignorecase': true
        },
        'foldersize': {
            'enabled': true,
            'type': 'shell-du'
        },
        'google-analytics-ua': {
            'enabled': false,
            'id': 'UA-000000-0'
        },
        'info': {
            'enabled': true,
            'show': false,
            'qrcode': true,
            'qrFill': '#999',
            'qrBack': '#fff'
        },
        'l10n': {
            'enabled': true,
            'lang': 'en',
            'useBrowserLang': true
        },
        'piwik-analytics': {
            'enabled': false,
            'baseURL': 'some/url',
            'idSite': 1
        },
        'preview-aud': {
            'enabled': true,
            'autoplay': true,
            'types': [
                'aud'
            ]
        },
        'preview-img': {
            'enabled': true,
            'size': false,
            'types': [
                'img',
                'img-bmp',
                'img-gif',
                'img-ico',
                'img-jpg',
                'img-png',
                'img-raw',
                'img-svg'
            ]
        },
        'preview-txt': {
            'enabled': true,
            'styles': {
                'txt': 1,
                'txt-authors': 1,
                'txt-c': 3,
                'txt-cpp': 3,
                'txt-css': 3,
                'txt-diff': 1,
                'txt-go': 3,
                'txt-h': 3,
                'txt-hpp': 3,
                'txt-install': 1,
                'txt-js': 3,
                'txt-json': 3,
                'txt-less': 3,
                'txt-license': 1,
                'txt-log': 1,
                'txt-makefile': 1,
                'txt-md': 2,
                'txt-py': 3,
                'txt-rb': 3,
                'txt-readme': 1,
                'txt-rtf': 1,
                'txt-rust': 3,
                'txt-script': 3,
                'txt-xml': 1
            }
        },
        'preview-vid': {
            'enabled': true,
            'autoplay': true,
            'types': [
                'vid-avi',
                'vid-flv',
                'vid-mkv',
                'vid-mov',
                'vid-mp4',
                'vid-mpg',
                'vid-webm'
            ]
        },
        'search': {
            'enabled': true,
            'advanced': true,
            'debounceTime': 300,
            'ignorecase': true
        },
        'select': {
            'enabled': true,
            'clickndrag': true,
            'checkboxes': true
        },
        'sort': {
            'enabled': true,
            'column': 0,
            'reverse': false,
            'ignorecase': true,
            'natural': true,
            'folders': 0
        },
        'thumbnails': {
            'enabled': true,
            'img': [
                'img-bmp',
                'img-gif',
                'img-ico',
                'img-jpg',
                'img-png'
            ],
            'mov': [
                'vid-avi',
                'vid-flv',
                'vid-mkv',
                'vid-mov',
                'vid-mp4',
                'vid-mpg',
                'vid-webm'
            ],
            'doc': [
                'x-pdf',
                'x-ps'
            ],
            'delay': 1,
            'size': 240,
            'exif': false,
            'chunksize': 20
        },
        'title': {
            'enabled': true
        },
        'tree': {
            'enabled': true,
            'show': true,
            'maxSubfolders': 50,
            'naturalSort': true,
            'ignorecase': true
        },
        'hasCustomPasshash': true
    },
    'types': {
        'ar': ['*.tar.bz2', '*.crx'],
        'ar-apk': ['*.apk'],
        'ar-deb': ['*.deb'],
        'ar-gz': ['*.gz', '*.tar.gz', '*.tgz'],
        'ar-rar': ['*.rar'],
        'ar-rpm': ['*.rpm'],
        'ar-tar': ['*.tar'],
        'ar-zip': ['*.7z', '*.bz2', '*.jar', '*.lzma', '*.war', '*.z', '*.Z', '*.zip'],
        'aud': ['*.aif', '*.aiff', '*.flac', '*.m4a', '*.mid', '*.mp3', '*.mpa', '*.ra', '*.ogg', '*.wav', '*.wma'],
        'aud-pls': ['*.m3u', '*.m3u8', '*.pls'],
        'bin': ['*.class', '*.o', '*.so'],
        'bin-exe': ['*.bat', '*.cmd', '*.exe'],
        'img': ['*.xpm'],
        'img-bmp': ['*.bmp'],
        'img-gif': ['*.gif'],
        'img-ico': ['*.ico'],
        'img-jpg': ['*.jpg', '*.jpeg'],
        'img-png': ['*.png'],
        'img-raw': ['*.cr2', '*.nef'],
        'img-svg': ['*.svg'],
        'img-tiff': ['*.tiff'],
        'txt': ['*.text', '*.txt'],
        'txt-build': ['*.pom', 'build.xml', 'pom.xml'],
        'txt-c': ['*.c'],
        'txt-cpp': ['*.cpp'],
        'txt-css': ['*.css'],
        'txt-diff': ['*.diff', '*.patch'],
        'txt-go': ['*.go'],
        'txt-h': ['*.h'],
        'txt-html': ['*.htm', '*.html', '*.shtml', '*.xhtml'],
        'txt-hpp': ['*.hpp'],
        'txt-java': ['*.java'],
        'txt-scala': ['*.scala'],
        'txt-js': ['*.js'],
        'txt-json': ['*.json'],
        'txt-less': ['*.less'],
        'txt-log': ['*.log', 'changelog*'],
        'txt-md': ['*.markdown', '*.md'],
        'txt-php': ['*.php'],
        'txt-py': ['*.py'],
        'txt-rb': ['*.rb'],
        'txt-rss': ['*.rss'],
        'txt-rtf': ['*.rtf'],
        'txt-rust': ['*.rs', '*.rlib'],
        'txt-script': ['*.conf', '*.bsh', '*.csh', '*.ini', '*.ksh', '*.sh', '*.shar', '*.tcl', '*.zsh'],
        'txt-source': [],
        'txt-tex': ['*.tex'],
        'txt-vcal': ['*.vcal'],
        'txt-xml': ['*.xml'],
        'vid': [],
        'vid-avi': ['*.avi'],
        'vid-flv': ['*.flv'],
        'vid-mkv': ['*.mkv'],
        'vid-mov': ['*.mov'],
        'vid-mp4': ['*.mp4', '*.m4v'],
        'vid-mpg': ['*.mpg'],
        'vid-rm': ['*.rm'],
        'vid-swf': ['*.swf'],
        'vid-ts': ['*.ts'],
        'vid-vob': ['*.vob'],
        'vid-webm': ['*.webm'],
        'vid-wmv': ['*.wmv'],
        'x': [],
        'x-bak': ['*.bak', '*~'],
        'x-calc': ['*.ods', '*.ots', '*.xlr', '*.xls', '*.xlsx'],
        'x-disc': ['*.cue', '*.iso'],
        'x-doc': ['*.doc', '*.docx', '*.odm', '*.odt', '*.ott'],
        'x-draw': ['*.drw'],
        'x-eps': ['*.eps'],
        'x-pdf': ['*.pdf'],
        'x-pres': ['*.odp', '*.otp', '*.pps', '*.ppt', '*.pptx'],
        'x-ps': ['*.ps'],
        'x-psd': ['*.psd']
    },
    'setup': {
        'AS_ADMIN': null,
        'PUBLIC_HREF': '/h5ai-gh-pages/_h5ai/public/',
        'ROOT_HREF': '/h5ai-gh-pages/'
    },
    'theme': {
        'ar-apk': 'comity/ar-apk.svg',
        'ar-deb': 'comity/ar-deb.svg',
        'ar-rpm': 'comity/ar-rpm.svg',
        'txt-css': 'comity/txt-css.svg',
        'txt-go': 'comity/txt-go.svg',
        'txt-html': 'comity/txt-html.svg',
        'txt-js': 'comity/txt-js.svg',
        'txt-less': 'comity/txt-less.svg',
        'txt-md': 'comity/txt-md.svg',
        'txt-php': 'comity/txt-php.svg',
        'txt-py': 'comity/txt-py.svg',
        'txt-rb': 'comity/txt-rb.svg',
        'txt-rust': 'comity/txt-rust.svg',
        'txt-script': 'comity/txt-script.svg',
        'x-pdf': 'comity/x-pdf.svg'
    }
};
/* eslint-enable */
