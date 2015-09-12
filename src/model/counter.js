'use strict';

var Discount = require('./discount');
var Utils = require('../lib/utils');
var fixture = require('../../spec/fixtures');
var BasketItem = require('./basket-item');
var Strategy = require('./strategy');

function Counter(basket) {
  this.basket = basket;
}

Counter.prototype.scan = function (tag) {
  var allBooks = fixture.loadAllBooks();
  var book ;
  var count = 1;

  allBooks.forEach(function(oneBook) {
    if(oneBook.name === tag) {
      book = oneBook;
    }
  });
  if(book){
    var basketItem = new BasketItem(book, count);
    this.basket.addBasketItem(basketItem);
  }
};

Counter.prototype.getFinalPrice = function () {

  var discount = new Discount();
  var stategy = new Strategy(discount);
  var savedAmount = stategy.findBestSolve(this.basket.getItemCounts());
  return Utils.formatData(savedAmount);
};

module.exports = Counter;