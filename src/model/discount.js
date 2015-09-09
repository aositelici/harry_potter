'use strict';

var Utils = require('../lib/utils');

function Discount(basketItems) {
  this.basketItems = basketItems;
}

Discount.prototype.getDiscount = function () {
  var discount = 0;

  while (this.basketItems.length > 1) {

    var price = 0;
    this.basketItems.forEach(function (basketItem) {
      price += basketItem.getPrice();
    });

    discount += this.calculateDiscount(this.basketItems.length, price);

    Utils.reduceCount(this.basketItems);
  }
  return discount;
};

Discount.prototype.calculateDiscount = function (diffCounts, price) {
  if (diffCounts === 2) {
    return Utils.format2(price * 0.05);
  }
  else if (diffCounts === 3) {
    return Utils.format2(price * 0.10);
  }
  else if (diffCounts === 4) {
    return Utils.format2(price * 0.20);
  }
  else if (diffCounts === 5) {
    return Utils.format2(price * 0.25);
  }
  else if (diffCounts === 1) {
    return 0.00;
  }
};


module.exports = Discount;