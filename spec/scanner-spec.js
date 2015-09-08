'use strict';

var Scanner = require('../src/scanner');
var Book = require('../src/book');
var BasketItem = require('../src/basket-item');

describe('scanner', function () {

  describe('#scan', function () {
    it("after scan a tag named first, the output should be a basketItem {name:'first', price: 8.00, count:1}",
        function () {
          var tag = 'first';
          var scanner = new Scanner();
          var book = new Book('first', 8.00);
          var basketItem = new BasketItem(book, 1);
          expect(scanner.scan(tag)).toEqual(basketItem);
        });

    it("after scan a tag named sixth not in the harry-potter series, the output should be undefined",
        function () {
          var tag = 'sixth';
          var scanner = new Scanner();
          expect(scanner.scan(tag)).toEqual(undefined);
        })
  })

});