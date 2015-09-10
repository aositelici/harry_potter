'use strict';

exports.formatData = function(data) {
  return data.toFixed(2);
};

exports.format2 = function(data) {
  return Math.round(data * 100) / 100;
};
