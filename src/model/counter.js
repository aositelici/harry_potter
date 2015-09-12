'use strict';

var Discount = require('./discount');
var Utils = require('../lib/utils');
var fixture = require('../../spec/fixtures');
var BasketItem = require('./basket-item');
var Strategy = require('./strategy');
var _ = require('lodash');

function Counter(basket) {
  this.basket = basket;
}

Counter.prototype.scan = function (tag) {
  var allBooks = fixture.loadAllBooks();
  var count = 1;

  var book = _.findLast(allBooks, function (oneBook) {
    return oneBook.name === tag;
  });
  if (book) {
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