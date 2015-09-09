'use strict';

function BasketItem(book, count) {
  this.book = book;
  this.count = count;
}

BasketItem.prototype.getPrice = function() {
  return this.book.price;
};

module.exports = BasketItem;