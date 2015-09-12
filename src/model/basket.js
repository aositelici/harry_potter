'use strict';

var _ = require('lodash');

function Basket() {
  this.basketItems = [];
}

Basket.prototype.addBasketItem = function (basketItem) {
  var findingItem = this.findBasketItem(basketItem);
  if (findingItem) {
    findingItem.count += basketItem.count;
  } else {
    this.basketItems.push(basketItem);
  }
};

Basket.prototype.findBasketItem = function (basketItem) {
  var result =_.findLast(this.basketItems, function (oneItem) {
    return oneItem.book.name === basketItem.book.name;
  });
  if (result) {
    return result;
  }
};

Basket.prototype.getItemCounts = function () {
  var counts = [];
  this.basketItems.map(function (basketItem) {
    counts.push(basketItem.count);
  });
  return counts;
};

module.exports = Basket;