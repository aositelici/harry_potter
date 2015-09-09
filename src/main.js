'use strict';

var Basket = require('./model/basket');
var Scanner = require('./model/scanner');
var Counter = require('./model/counter');

function main(tags) {
  var price = 8.00;

  var basket = new Basket();
  var scanner = new Scanner();
  var counter = new Counter(basket,scanner);
  tags.forEach(function(tag) {
    counter.scan(tag);
  });

  var discount = counter.getDiscount(price);
  console.log(discount +' is the price with the biggest discount');
}

exports.main = main;