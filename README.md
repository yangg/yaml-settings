# yaml-settings

[![Build Status](https://travis-ci.org/yangg/yaml-settings.svg?branch=master)](https://travis-ci.org/yangg/yaml-settings) [![Code Climate](https://codeclimate.com/github/yangg/yaml-settings/badges/gpa.svg)](https://codeclimate.com/github/yangg/yaml-settings) [![npm:](https://img.shields.io/npm/v/yaml-settings.svg?style=flat)](https://www.npmjs.com/packages/yaml-settings)

Set or get a value within a deeply nested object using `dot' notation

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

modules.exports = config;
```

## License
MIT
