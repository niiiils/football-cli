#!/usr/bin/env node

const requireDir = require('require-dir')
const yargs = require('yargs');
const { join, resolve } = require('path')
const colors = require('chalk')
const shell = require('shelljs')
const cmdhandler = require('./handlers/cmdhandler.js');

console.log('Welcome to Football CLI');

cmdhandler.handle(yargs.argv);