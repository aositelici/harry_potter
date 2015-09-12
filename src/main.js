'use strict';

var Basket = require('./model/basket');
var Counter = require('./model/counter');

function main(tags) {

  var basket = new Basket();
  var counter = new Counter(basket);
  tags.forEach(function (tag) {
    counter.scan(tag);
  });

  var discount = counter.getFinalPrice();
  console.log(discount + ' is the price with the biggest discount');
}

exports.main = main;