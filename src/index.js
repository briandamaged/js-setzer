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
    return this._set.length;
  },

  isEmpty: function() {
    return this.length === 0;
  },

  keys: function() {
    return this._set.slice();
  },

  minus: function(rhs) {
    rhs = coerce(rhs)._set;
    var lhs = this._set;
    var retval = [];

    for(var i = 0; i < lhs.length; ++i) {
      var item = lhs[i];
      if(rhs.indexOf(item) < 0) {
        retval.push(item);
      }
    }
    return new Setzer(retval);
  },

  intersect: function(rhs) {
    rhs = coerce(rhs)._set;
    var lhs = this._set;
    var retval = [];

    for(var i = 0; i < lhs.length; ++i) {
      var item = lhs[i];
      if(rhs.indexOf(item) >= 0) {
        retval.push(item);
      }
    }
    return new Setzer(retval);
  },

  union: function(rhs) {
    rhs = coerce(rhs)._set;
    var retval = this._set.slice();

    for(var i = 0; i < rhs.length; ++i) {
      var item = rhs[i];

      if(retval.indexOf(item) < 0) {
        retval.push(item);
      }
    }
    return new Setzer(retval);
  }
}



module.exports = coerce;
