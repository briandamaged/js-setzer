'use strict';
// Creates an internal (AKA: Ugly) representation of the sets.

function fromArray(thing) {
  var retval = {};
  for(var i = 0; i < thing.length; ++i) {
    var k = thing[i];
    var hits = retval[k];
    if(!hits) {
      hits = retval[k] = [];
    }

    if(hits.indexOf(k) < 0) {
      hits.push(k)
    }
  }
  return retval;
}

function fromObject(thing) {
  var retval = {};
  for(var k in thing) {
    retval[k] = [k];
  }
  return retval;
}

function coerce(thing) {
  if(Array.isArray(thing)) {
    return fromArray(thing);
  } else if(typeof(thing) === 'undefined') {
    return {};
  } else {
    return fromObject(thing);
  }
}

module.exports = coerce;
