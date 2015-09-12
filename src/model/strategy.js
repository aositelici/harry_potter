'use strict';

var _ = require('lodash');
var Utils = require('../lib/utils');
function Strategy(discount) {
  this.discount = discount;
}

Strategy.prototype.findBestSolve = function(counts) {
  var bookCounts = counts;
  var discount = 0;
  var strategy = [];

  while (bookCounts.length > 0) {
    discount += this.discount.calculateDiscount(bookCounts.length);
    strategy.push(bookCounts.length);
    Utils.reduceCount(bookCounts);
  }
  if (_.include(strategy, 5) && _.include(strategy, 3)) {
    discount -= this.discount.calculateDiscount(5);
    discount -= this.discount.calculateDiscount(3);
    discount += 2 * this.discount.calculateDiscount(4);
  }
  return discount;
};

module.exports = Strategy;