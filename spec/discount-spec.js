'use strict';

var Discount = require('../src/model/discount');

describe('Discount:  ', function () {
  var discount ;
  beforeEach(function () {
    discount = new Discount();
  });

  describe('#rankbyCount(counts):  ', function () {
    it('give a array[4,1,5],the result should be [1,4,5]', function() {
      expect(discount.rankByCount([4, 1, 5])).toEqual([1, 4, 5]);
    })
  });

  describe('#getMin(prices):  ', function () {
    it('give a array[4.8,12,5.8],the result should be 4.8', function() {
      expect(discount.getMin([4.8, 12, 5.8])).toBe(4.8);
    })
  });

  describe('#findBestSolve(counts):  ', function () {

    describe('if you buy less than or equal to 5 books:  ', function () {

      it('if you buy 2 different books, you get a 5% discount. with 8 EUR one copy,the discount should be 0.80',
        function () {
          expect(discount.findBestSolve([1, 1])).toBe(2 * 8.00 * 0.95);
        });

      it('If you buy 3 different books, you get a 10% discount. with 8 EUR one copy,the discount should be 2.40',
        function () {
          expect(discount.findBestSolve([1, 1, 1])).toBe(3 * 8.00 * 0.90);
        });

      it('if you buy 4 different books, you get a 20% discount. with 8 EUR one copy,the discount should be 6.40',
        function () {
          expect(discount.findBestSolve([1, 1, 1, 1])).toBe(4 * 8.00 * 0.80);
        });

      it('if you buy 5 different books, you get a 25% discount. with 8 EUR one copy,the discount should be 10.00',
        function () {
          expect(discount.findBestSolve([1, 1, 1, 1, 1])).toBe(5 * 8.00 * 0.75);
        });

      it('if you buy 1 book, you get no discount.', function () {
        expect(discount.findBestSolve([1])).toBe(8.00);
      })
    });

    describe('if you buy more than 5 books:  ', function () {
      it('if you buy 8 books  , 2 copies of the first book' +
          '2 copies of the second book' +
          '2 copies of the third book' +
          '1 copy of the fourth book' +
          '1 copy of the fifth book, the largest discount should be 51.20',
          function () {
            expect(discount.findBestSolve([2, 2, 2, 1, 1])).toBe(51.20);
      });
    })
  });


});