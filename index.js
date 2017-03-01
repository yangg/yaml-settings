'use strict';
/*!
 * yaml-settings
 *
 * @author Brook Yang https://github.com/yangg/yaml-settings
 */

const yaml  = require('js-yaml');
const fs    = require('fs');
const Path  = require('path');

const dot2val = require('dot2val');

class Settings {
  constructor(confName, confDir) {
    confDir = confDir || process.env.HOME || process.env.USERPROFILE;
    if(!confName) {
      throw Error('Settings, confName is required');
    }
    this.configPath = Path.join(confDir, confName);
    this.autoSave = true;
    this.delay = 0;
    this.config = {};
  }
  init(options) {
    let config;
    try {
      if(fs.existsSync(this.configPath)) {
        config = yaml.safeLoad(fs.readFileSync(this.configPath));
      }
    } catch (e) {
    }
    Object.assign(this.config, options, config);
  }
  get(key, def) {
    if(typeof key === 'undefined') {
      return this.config;
    }
    return dot2val.get(this.config, key, def);
  }
  set(key, val) {
    dot2val.set(this.config, key, val);
    this.autoSave && this.save();
  }
  save(delay) {
    delay = delay || this.delay;
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      fs.writeFileSync(this.configPath, yaml.safeDump(this.config, { sortKeys: true }));
    }, delay);
  }
}

module.exports = Settings;
