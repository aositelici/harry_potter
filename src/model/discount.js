'use strict';
var _ = require('lodash');

function Discount() {
}

Discount.prototype.rankByCount = function (counts) {
  counts = _.sortBy(counts);
  return counts;
};

Discount.prototype.getMin = function(counts) {
  return Math.min.apply(null,counts);
};

Discount.prototype.findBestSolve = function (counts) {

  counts = this.rankByCount(counts);

  var count1 = counts[0];
  var count2 = counts[1];
  var count3 = counts[2];
  var count4 = counts[3];
  var count5 = counts[4];

  if(counts[0] > 0){
    return this.getMin([ 8.0 + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
         2 * 8 * 0.95 + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
         3 * 8 * 0.9 + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1]),
        4 * 8 * 0.8 + this.findBestSolve([count1, count2 - 1, count3 - 1, count4 - 1, count5 - 1]),
        5 * 8 * 0.75 + this.findBestSolve([count1 - 1, count2 - 1, count3 - 1, count4 - 1, count5 - 1])])
  }

  else if(counts[0] == 0 && counts[1] > 0 ){
    return this.getMin([ 8.0 + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      2 * 8 * 0.95 + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
      3 * 8 * 0.9 + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1]),
      4 * 8 * 0.8 + this.findBestSolve([count1, count2 - 1, count3 - 1, count4 - 1, count5 - 1])])
  }

  else if(counts[0] == 0 && counts[1] == 0 && counts[2] > 0 ){
    return this.getMin([ 8.0 + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      2 * 8 * 0.95 + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
      3 * 8 * 0.9 + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1])])
  }

  else if(counts[0] == 0 && counts[1] == 0
      && counts[2] == 0  && counts[3] > 0){
    return this.getMin([ 8.0 + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),
      2 * 8 * 0.95 + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1])])
  }

  else if(counts[0] == 0 && counts[1] == 0
      && counts[2] == 0  && counts[3] == 0 && counts[4] > 0){
    return this.getMin([ 8.0 + this.findBestSolve([count1, count2, count3, count4, count5 - 1])])
  }

  else {
    return 0;
  }
};

module.exports = Discount;