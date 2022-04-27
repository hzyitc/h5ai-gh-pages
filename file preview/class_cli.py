# -*- coding: utf-8 -*-

import sys


class CLI:
    def __init__(self):
        self.use_colors = True
        self._colors = {
            'D': '\033[0;30m',
            'DB': '\033[1;30m',
            'R': '\033[0;31m',
            'RL': '\033[0;91m',
            'RB': '\033[1;31m',
            'G': '\033[0;32m',
            'GB': '\033[1;32m',
            'Y': '\033[0;33m',
            'YB': '\033[1;33m',
            'B': '\033[0;34m',
            'BB': '\033[1;34m',
            'C': '\033[0;36m',
            'CB': '\033[1;36m',
            'NC': '\033[0m'
        }

    def colorize(self, sequence):
        for name in self._colors:
            if self.use_colors:
                repl = self._colors[name]
            else:
                repl = ''
            sequence = sequence.replace('<{}>'.format(name), repl)
        return sequence

    def out(self, sequence, end=None, flush=False):
        sequence = self.colorize(sequence)
        if end is None:
            print(sequence)
        else:
            print(sequence, end=end)
        if flush:
            sys.stdout.flush()
