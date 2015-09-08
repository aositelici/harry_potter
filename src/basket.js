'use strict';

function Basket() {
  this.basketItems = [];
}

Basket.prototype.addBasketItem = function (basketItem) {
  var findingItem = this.findBasketItem(basketItem);
  if (findingItem) {
    findingItem.count += basketItem.count;
  }
  else {
    this.basketItems.push(basketItem);
  }
};

Basket.prototype.findBasketItem = function (basketItem) {
  var result;

  this.basketItems.forEach(function (oneItem) {
    if (basketItem.book.name === oneItem.book.name) {
      result = oneItem;
    }
  });

  if (result) {
    return result;
  }
};

Basket.prototype.getBasketItems = function () {
  return this.basketItems;
};


module.exports = Basket;