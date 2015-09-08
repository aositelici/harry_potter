'use strict';
var Utils = require('./utils');
function Discount(basket, price) {
  this.basket = basket;
  this.price = price;
}

Discount.prototype.getAmount = function () {
  var _this = this;
  var amount = 0;

  this.basket.forEach(function (basketItem) {
    amount += basketItem.count * _this.price;
  });
  return Utils.formatData(amount);
};

Discount.prototype.getDiscount = function () {
  var discount = 0;

  while (this.basket.length > 1) {
    discount += this.calculateDiscount(this.basket.length);
    for (var i = 0; i < this.basket.length; i++) {
      this.basket[i].count -= 1;
      if (this.basket[i].count === 0) {
        this.basket.splice(i, 1);
        i--;
      }
    }
  }
  return  Utils.formatData(discount);
};

Discount.prototype.calculateDiscount = function (diffCounts) {
  if (diffCounts === 2) {
    return Math.round(diffCounts * this.price * 0.05*100)/100;
  }
  else if (diffCounts === 3) {
    return  Math.round(diffCounts * this.price * 0.10*100)/100;
  }
  else if (diffCounts === 4) {
    return Math.round(diffCounts * this.price * 0.20*100)/100;
  }
  else if (diffCounts === 5) {
    return Math.round(diffCounts * this.price * 0.25*100)/100;
  }
  else if (diffCounts === 1) {
    return 0.00;
  }
};


module.exports = Discount;