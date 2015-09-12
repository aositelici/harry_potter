'use strict';

var Basket = require('../src/model/basket');
var Counter = require('../src/model/counter');
var Book = require('../src/model/book');
var BasketItem = require('../src/model/basket-item');

describe('counter: ', function () {

  describe('#scan(tag): ', function() {

    it("after scan a tag named first, the output should be a basketItem {name:'first'," +
    " price: 8.00, count:1}",function () {
      var basket = new Basket();
      var counter = new Counter(basket);
      var book = new Book('first', 8.00);
      var basketItem = new BasketItem(book, 1);

      counter.scan('first');
      expect(counter.basket.basketItems).toEqual([basketItem]);
    });

    it("after scan a tag named sixth not in the harry-potter series, the output should be undefined",
      function () {
        var basket = new Basket();
        var counter = new Counter(basket);
        counter.scan('sixth');
        expect(counter.basket.basketItems).toEqual([]);
      })
  });

  describe('#getFinalPrice(): ', function () {
    var basket = new Basket();
    var counter = new Counter(basket);
    counter.basket.basketItems =[{book: {name: 'first', price: 8.00}, count: 2},
                                 {book: {name: 'second', price: 8.00}, count:2 },
                                 {book: {name: 'third', price: 8.00}, count:2 },
                                 {book: {name: 'fourth', price: 8.00}, count:1 },
                                 {book: {name: 'fifth', price: 8.00}, count:1 }
                                ];
    it('if you buy 2 copies of the first book,2 copies of the second book,2 copies of the third book,'+
     '1 copy of the fourth book,1 copy of the fifth book,the final price should be 51.20', function () {
      expect(counter.getFinalPrice()).toBe('51.20');
     })
   });
});