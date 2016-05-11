var RouteRecognizer = require('route-recognizer');

// shims to make pretender happy
global.self = {
  FakeXMLHttpRequest: function() {},
  RouteRecognizer: RouteRecognizer
};
function FakeElement(tagName) {
  this.tagName = tagName;
}
FakeElement.prototype = {
  get fullpath() {
    return this.href; // FIXME
  },
  set fullpath(value) {
    return value;
  }
}
global.document = {
  createElement: function(tagName) {
    return new FakeElement(tagName);
  }
};

module.exports = require('pretender'); // must be required after shims