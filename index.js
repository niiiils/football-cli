#!/usr/bin/env node

const requireDir = require('require-dir');
const yargs = require('yargs');
const { join, resolve } = require('path');
const colors = require('chalk');
const shell = require('shelljs');
const ascii = require('ascii-art');
const cmdhandler = require('./handlers/cmdhandler.js');

console.log(colors.whiteBright(`

  __            _   _           _ _        _ _ 
 / _|          | | | |         | | |      | (_)
| |_ ___   ___ | |_| |__   __ _| | |   ___| |_ 
|  _/ _ \\ / _ \\| __| '_ \\ / _  | | |  / __| | |
| || (_) | (_) | |_| |_) | (_| | | | | (__| | |
|_| \\___/ \\___/ \\__|_.__/ \\__,_|_|_|  \\___|_|_|
                                              
`));
console.log(colors.red('🏈 Welcome to Football CLI \n'));

cmdhandler.handle(yargs.argv);