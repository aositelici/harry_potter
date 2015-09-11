'use strict';
var _ = require('lodash');
var DISCOUNT_SCHEME = require('../lib/discount-scheme');
function Discount() {
}

Discount.prototype.rankByCount = function (counts) {
  counts = _.sortBy(counts);
  return counts;// 直接return _.sortBy(counts);不就好了？
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
  counts = this.rankByCount(counts);//怎么能改参数呢？参数传进来是不能随便改的。除非你这个函数名上能表现出你会改参数，否则不能改。
  //上面另换一个变量也不影响啊，为什么要参数？而且rank过之后，意义也发生了变化吧。不过没看明白rankByCount里为什么要sort

  var count1 = counts[0];//count1~5是啥？到底为啥要sort啊……
  var count2 = counts[1];
  var count3 = counts[2];
  var count4 = counts[3];
  var count5 = counts[4];

  if (count1 > 0) {//count1>0什么含义啊
    return this.getMin([DISCOUNT_SCHEME.ONE_BOOK + this.findBestSolve([count1, count2, count3, count4, count5 - 1]),//为啥count1>0, count5-1?
      DISCOUNT_SCHEME.TWO_BOOKS + this.findBestSolve([count1, count2, count3, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.THREE_BOOKS + this.findBestSolve([count1, count2, count3 - 1, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.FOUR_BOOKS + this.findBestSolve([count1, count2 - 1, count3 - 1, count4 - 1, count5 - 1]),
      DISCOUNT_SCHEME.FIVE_BOOKS + this.findBestSolve([count1 - 1, count2 - 1, count3 - 1, count4 - 1, count5 - 1])])
  }
  //else为啥要换行？还要空一行？
  else if (count1 == 0 && count2 > 0) {//
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
//看了半天也没看懂上面的代码到底都做了啥，问题被复杂化了。
//最后看了日志看明白了，用了动态规划，这个题没有那么复杂啊，自己分析一下就会发现，只有44组合优于53组合一种情况，其他的都按最大的不同压栈就好了
//硬套公式是不对的。
//即便是动态规划，也应该写的更明白一点，可读性更高一点。

module.exports = Discount;