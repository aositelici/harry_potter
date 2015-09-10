'use strict';
var _ = require('lodash');
var DISCOUNT_SCHEME = require('../lib/discount-scheme');
function Discount() {
}

Discount.prototype.rankByCount = function (counts) {
  counts = _.sortBy(counts);
  return counts;
};

Discount.prototype.getMin = function (prices) {
  return _.min(prices);
};

Discount.prototype.findBestSolve = function (counts) {
  if(counts.length < 5){
    var diffValue = 5 - counts.length;
    while(diffValue --) {
      counts.push(0);
    }
  }
  counts = this.rankByCount(counts);

  var count1 = counts[0];
  var count2 = counts[1];
  var count3 = counts[2];
  var count4 = counts[3];
  var count5 = counts[4];

  if (count1 > 0) {
    return this.getMin([DISCOUNT_SCHEME.ONE_BOOK + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      DISCOUNT_SCHEME.TWO_BOOKS + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.THREE_BOOKS + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.FOUR_BOOKS + this.findBestSolve([count1, count2 - 1, count3 - 1, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.FIVE_BOOKS + this.findBestSolve([count1 - 1, count2 - 1, count3 - 1, count4 - 1, count5 - 1])])
  }

  else if (count1 == 0 && count2 > 0) {
    return this.getMin([DISCOUNT_SCHEME.ONE_BOOK + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      DISCOUNT_SCHEME.TWO_BOOKS + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.THREE_BOOKS + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.FOUR_BOOKS + this.findBestSolve([count1, count2 - 1, count3 - 1, count4 - 1, count5 - 1])])
  }

  else if (count1 == 0 && count2 == 0 && count3 > 0) {
    return this.getMin([DISCOUNT_SCHEME.ONE_BOOK + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      DISCOUNT_SCHEME.TWO_BOOKS + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.THREE_BOOKS + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1])])
  }

  else if (count1 == 0 && count2 == 0
      && count3 == 0 && count4 > 0) {
    return this.getMin([DISCOUNT_SCHEME.ONE_BOOK + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      DISCOUNT_SCHEME.TWO_BOOKS + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1])])
  }

  else if (count1 == 0 && count2 == 0
      && count3 == 0 && count4 == 0 && count5 > 0) {
    return this.getMin([DISCOUNT_SCHEME.ONE_BOOK + this.findBestSolve([count1, count2, count3, count4, count5 - 1])])
  }

  else {
    return 0;
  }
};

module.exports = Discount;