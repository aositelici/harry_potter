'use strict';

var Scanner = require('../src/model/scanner');
var Basket = require('../src/model/basket');
var Counter = require('../src/model/counter');

describe('counter: ', function () {

  describe('#scan(tag): ', function() {
    var basket = new Basket();
    var scanner = new Scanner();
    var counter = new Counter(basket, scanner);

    it('',function () {
      spyOn(counter.scanner, 'scan').and.callFake(function () {
        return {book: {name: 'first', price: 8.00}, count: 1};
      });
      counter.scan('first');
      expect(counter.basket.basketItems).toEqual([{book: {name: 'first', price: 8.00}, count: 1}]);
    });
  });

  describe('#getDiscount(): ', function () {
    var basket = new Basket();
    var scanner = new Scanner();
    var counter = new Counter(basket, scanner);
    counter.basket.basketItems =[{book: {name: 'first', price: 8.00}, count: 2},
                                 {book: {name: 'second', price: 8.00}, count:2 },
                                 {book: {name: 'third', price: 8.00}, count:2 },
                                 {book: {name: 'fourth', price: 8.00}, count:1 },
                                 {book: {name: 'fifth', price: 8.00}, count:1 }
                                ];

    it('if you buy 2 copies of the first book,2 copies of the second book,2 copies of the third book,'+
     '1 copy of the fourth book,1 copy of the fifth book,the discount should be 12.4', function () {
      expect(counter.getDiscount()).toBe('51.20');
     })
   });
});