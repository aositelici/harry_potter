'use strict';

var Discount = require('./discount');
var Utils = require('../lib/utils');

function Counter(basket, scanner) {
  this.basket = basket;
  this.scanner = scanner;
}

Counter.prototype.scan = function (tag) {

  var basketItem = this.scanner.scan(tag);
  if (basketItem) {
    this.basket.addBasketItem(basketItem);
  }
};

Counter.prototype.getDiscount = function () {

  var discount = new Discount();
  var savedAmount = discount.findBestSolve(this.basket.getItemCounts());
  return Utils.formatData(savedAmount);
};

module.exports = Counter;