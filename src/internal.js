'use strict';
// Creates an internal (AKA: Ugly) representation of the sets.

function fromArray(thing) {
  var retval = [];
  for(var i = 0; i < thing.length; ++i) {
    var item = thing[i];
    if(retval.indexOf(item) < 0) {
      retval.push(item);
    }
  }
  return retval;
}

function fromObject(thing) {
  return Object.keys(thing);
}

function coerce(thing) {
  if(Array.isArray(thing)) {
    return fromArray(thing);
  } else if(typeof(thing) === 'undefined') {
    return [];
  } else {
    return fromObject(thing);
  }
}

module.exports = coerce;
