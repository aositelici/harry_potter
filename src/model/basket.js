'use strict';

function Basket() {
  this.basketItems = [];
}

Basket.prototype.addBasketItem = function (basketItem) {
  var findingItem = this.findBasketItem(basketItem);
  if (findingItem) {
    findingItem.count += basketItem.count;
  }
  else {//else为啥要换行……
    this.basketItems.push(basketItem);
  }
};

Basket.prototype.findBasketItem = function (basketItem) {
  var result;

  this.basketItems.forEach(function (oneItem) {
    if (basketItem.book.name === oneItem.book.name) {
      result = oneItem;
    }
  });//这不就是个findLast,参考： https://lodash.com/docs#findLast

  if (result) {
    return result;
  }
};

Basket.prototype.getItemCounts = function () {
  var counts = [];
  this.basketItems.forEach(function (basketItem) {
    counts.push(basketItem.count);
  });
  return counts;//这是map
};


module.exports = Basket;