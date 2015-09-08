'use strict';

var Discount = require('../src/discount');

describe('Discount', function () {

  describe('#calculateDiscount', function () {
    var discount = new Discount([], 8);

    it('if you buy 2 different books, you get a 5% discount. with 8 EUR one copy,the discount should be 0.80',
        function () {
          expect(discount.calculateDiscount(2)).toBe(0.80);
        });

    it('If you buy 3 different books, you get a 10% discount. with 8 EUR one copy,the discount should be 2.40',
        function () {
          expect(discount.calculateDiscount(3)).toBe(2.40);
        });

    it('if you buy 4 different books, you get a 20% discount. with 8 EUR one copy,the discount should be 6.40',
        function () {
          expect(discount.calculateDiscount(4)).toBe(6.40);
        });

    it('if you buy 5 different books, you get a 25% discount. with 8 EUR one copy,the discount should be 10.00',
        function () {
          expect(discount.calculateDiscount(5)).toBe(10.00);
        });

    it('if you buy 1 book, you get a 5% discount on those two books.', function () {
      expect(discount.calculateDiscount(1)).toBe(0.00);
    })
  });

  describe('#getDisCount', function () {
    it('if basket is null,the discount should be 0.00', function () {
      var discount = new Discount([], 8);
      expect(discount.getDiscount()).toBe('0.00');
    });
  });
});