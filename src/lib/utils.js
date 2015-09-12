'use strict';

exports.formatData = function(data) {
  return data.toFixed(2);
};

exports.reduceCount = function(counts) {
  for (var i = 0; i < counts.length; i++) {
    counts[i] -= 1;
    if (counts[i] === 0) {
      counts.splice(i, 1);
      i--;
    }
  }
};