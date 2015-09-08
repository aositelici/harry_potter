'use strict';

var Basket = require('./basket');
var Scanner = require('./scanner');
var Counter = require('./counter');

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
};

exports.main = main;