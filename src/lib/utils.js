'use strict';

exports.formatData = function(data) {
  return data.toFixed(2);
};

exports.format2 = function(data) {
  return Math.round(data * 100) / 100;
};

exports.reduceCount = function(basketItems) {

  for (var i = 0; i < basketItems.length; i++) {
    basketItems[i].count -= 1;

    if (basketItems[i].count === 0) {
      basketItems.splice(i, 1);
      i--;
    }
  }
};
