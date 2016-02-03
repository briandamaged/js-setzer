'use strict';

var internal = require('./internal');


function coerce(thing) {
  if(thing instanceof Setzer) {
    return thing;
  } else {
    return new Setzer(internal(thing));
  }
}

function Setzer(_set) {
  if(!(this instanceof Setzer)) {
    return new Setzer(_set);
  }

  this._set = _set;
}


Setzer.prototype = {
  get length() {
    if(this._lengthCalculated) {
      return this._length;
    } else {
      var len = 0;
      for(var k in this._set) {
        len += this._set[k].length;
      }
      this._length = len
      this._lengthCalculated = true;
      return len;
    }
  },

  keys: function() {
    if(this._keysCalculated) {
      return this._keys.slice();
    } else {
      var keys = new Array(this.length);
      var i = 0;

      for(var k in this._set) {
        var items = this._set[k];
        for(var j in items) {
          keys[i++] = items[j];
        }
      }

      this._keys = keys;
      this._keysCalculated = true;
      return keys.slice();
    }
  }
}



module.exports = coerce;
