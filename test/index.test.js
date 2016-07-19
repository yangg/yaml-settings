'use strict';

const assert = require('chai').assert;
const Settings = require('../');

const confName = 'yaml-settings';
const confDir = require('os').tmpdir();
const defaultConf = {
  welcome: 'hello',
  alias: {b: 'blog', g: 'git'}
};

describe('yaml-settings', function() {

  var config = new Settings(confName, confDir);
  config.init(defaultConf);
  it('init should accept default config', function() {
    assert(config.get('welcome'), 'hello');
    assert(config.get('alias.b'), 'blog');
  });
  it('should be wriable', function() {
    config.set('alias.b', 'brook');
    assert(config.get('alias.b'), 'brook')
  });
  it('should be readable', function() {
    var reader = new Settings(confName, confDir);
    reader.init(defaultConf);
    assert(reader.get('alias.b'), 'brook')
  });
});
