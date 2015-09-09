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

Counter.prototype.getAmount = function () {

  var amount = 0;
  var basketItems = this.basket.getBasketItems();
  basketItems.forEach(function (basketItem) {
    amount += basketItem.count * basketItem.book.price;
  });

  return Utils.formatData(amount);
};

Counter.prototype.getDiscount = function () {

  var discount = new Discount(this.basket.getBasketItems());
  var savedAmount = discount.getDiscount();

  return Utils.formatData(savedAmount);
};

Counter.prototype.getFinalPrice = function () {

  var amount = this.getAmount();
  var discount = this.getDiscount();
  var finalPrice = amount - discount;

  return Utils.formatData(finalPrice);
};

module.exports = Counter;