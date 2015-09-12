'use strict';

var DISCOUNT_SCHEME = require('../lib/discount-scheme');

function Discount() {
}

Discount.prototype.calculateDiscount = function (diffCounts) {
  if (diffCounts === 2) {
    return DISCOUNT_SCHEME.TWO_BOOKS;
  } else if (diffCounts === 3) {
    return DISCOUNT_SCHEME.THREE_BOOKS;
  } else if (diffCounts === 4) {
    return DISCOUNT_SCHEME.FOUR_BOOKS;
  } else if (diffCounts === 5) {
    return DISCOUNT_SCHEME.FIVE_BOOKS;
  } else {
    return DISCOUNT_SCHEME.ONE_BOOK;
  }
};

module.exports = Discount;