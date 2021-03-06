# yaml-settings

[![Build Status](https://travis-ci.org/yangg/yaml-settings.svg?branch=master)](https://travis-ci.org/yangg/yaml-settings) [![Code Climate](https://codeclimate.com/github/yangg/yaml-settings/badges/gpa.svg)](https://codeclimate.com/github/yangg/yaml-settings) [![npm:](https://img.shields.io/npm/v/yaml-settings.svg?style=flat)](https://www.npmjs.com/packages/yaml-settings)

Read or write configration in much more easy way in node.js apps

## Features
* Ready or write configration via `dot` notation.
* Automatically save to config file when you call `set()`.

## Installation
```bash
npm install --save yaml-settings
```

## Usage
In `config.js`
```js
const Settings = require('yaml-settings');

const config = new Settings('.your-app-name.yml', [<config file directiory>]);
config.init({
  git_cmd: 'git'
}); // init with default settings

module.exports = config;
```
Then read or write your configrations in anywhere of your project
```js
const config = require('./config');
config.set('alias.b', 'blog');  // add config key, and save it automatically
config.get('alias.b');          // read config
config.set('alias.b');          // delete config
```
More info about the \`dot' notation in `get` and `set`, see [dot2val](https://github.com/yangg/dot2val)

## Related Projects
* [yangg / dot2val](https://github.com/yangg/dot2val) Set or get a value within a deeply nested object using `dot' notation
* [yangg / git-shortcut](https://github.com/yangg/git-shortcut)

## License
MIT
