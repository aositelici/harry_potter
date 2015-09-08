'use strict';

var Scanner = require('./scanner');

function Counter(basket, scanner) {
  this.basket = basket;
  this.scanner = scanner;
}

Counter.prototype.scan = function(tag) {

  this.scanner.scan(tag);


};