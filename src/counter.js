'use strict';

var Discount = require('./discount');

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

Counter.prototype.getDiscount = function (price) {

  var discounting = new Discount(this.basket.getBasketItems(), price);
  var amount = discounting.getAmount();

  var savedAmount = discounting.getDiscount();
  var discount = amount - savedAmount;
  return discount.toFixed(2);
};

module.exports = Counter;