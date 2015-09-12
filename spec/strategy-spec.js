'use strict';

var Strategy = require('../src/model/strategy');
var Discount = require('../src/model/discount');

describe('Strategy :', function() {
  var strategy ;
  beforeEach(function () {
    var discount = new Discount();
    strategy = new Strategy(discount);
  });
  describe('#findBestSolve(counts): ',function () {

  });
  describe('#findBestSolve(counts):  ', function () {

    describe('if you buy less than or equal to 5 books:  ', function () {

      it('if you buy 1 book, you get no discount.', function () {
        expect(strategy.findBestSolve([1])).toBe(8.00);
      });

      it('if you buy 2 different books,the biggest discount should be 5% for two books',
          function () {
            expect(strategy.findBestSolve([1, 1])).toBe(2 * 8.00 * 0.95);
          });

      it('if you buy 2 same books, should have no discount',
          function () {
            expect(strategy.findBestSolve([2])).toBe(2 * 8.00);
          });

      it('if you buy 3 different books, the biggest discount should be 10% for 3 books',
          function () {
            expect(strategy.findBestSolve([1, 1, 1])).toBe(3 * 8.00 * 0.90);
          });

      it('if you buy 3 books, 2 are same,the biggest discount should be 5% for only 2 books',
          function () {
            expect(strategy.findBestSolve([2, 1])).toBe(2 * 8.00 * 0.95 + 8.00);
          });

      it('if you buy 4 different books, the biggest discount should be 20% for 4 books',
          function () {
            expect(strategy.findBestSolve([1, 1, 1, 1])).toBe(4 * 8.00 * 0.80);
          });

      it('if you buy 4 books,2 are same, the biggest discount should be 10% for only 3 books',
          function () {
            expect(strategy.findBestSolve([2, 1, 1])).toBe(3 * 8.00 * 0.90 + 8.00);
          });
      it('if you buy 4 different books,3 are same, the biggest discount should be 5% for 2 books',
          function () {
            expect(strategy.findBestSolve([3, 1])).toBe(2 * 8.00 * 0.95 + 2 * 8.00);
          });

      it('if you buy 5 different books, the discount should be 10.00',
          function () {
            expect(strategy.findBestSolve([1, 1, 1, 1, 1])).toBe(5 * 8.00 * 0.75);
          });

      it('if you buy 5 books,2 are same, the biggest discount should be 20% for only 4 books',
          function () {
            expect(strategy.findBestSolve([2, 1, 1, 1])).toBe(4 * 8.00 * 0.80 + 8.00);
          });

      it('if you buy 5 books,3 are same, the biggest discount should be 10% for 3 books',
          function () {
            expect(strategy.findBestSolve([3, 1, 1])).toBe(3 * 8.00 * 0.90 + 2 * 8.00);
          });

      it('if you buy 5 books,4 are same, the biggest discount should be 10% for 3 books',
          function () {
            expect(strategy.findBestSolve([4, 1])).toBe(2 * 8.00 * 0.95 + 3 * 8.00);
          });

      it('if you buy 5 books,2 groups each have 2 books, the biggest discount should be 10% ' +
          'for 3 books and 5% for 2 books', function () {
        expect(strategy.findBestSolve([2, 2, 1])).toBe(2 * 8.00 * 0.95 + 3 * 8.00 * 0.90);
      });

      it('if you buy 5 books,2 are same ans 3 are same, the biggest discount should be 10% ' +
          'for 4 books', function () {
        expect(strategy.findBestSolve([2, 3])).toBe(4 * 8.00 * 0.95 + 8.00);
      });

    });

    describe('if you buy more than 5 books:  ', function () {
      it('if you buy 8 books  , 2 copies of the first book' +
          '2 copies of the second book' +
          '2 copies of the third book' +
          '1 copy of the fourth book' +
          '1 copy of the fifth book, the largest discount should be 51.20',
          function () {
            expect(strategy.findBestSolve([2, 2, 2, 1, 1])).toBe(51.20);
          });

      it('if you buy 12 books  , 2 copies of the first book' +
          '3 copies of the second book' +
          '2 copies of the third book' +
          '1 copy of the fourth book' +
          '4 copy of the fifth book, the largest discount should be 51.20',
          function () {
            expect(strategy.findBestSolve([2, 3, 2, 1, 4])).
                toBe(5 * 8.00 * 0.75 + 4 * 8.00 * 0.80 + 2 * 8.00 * 0.95 + 8.00);
          });
    })
  });
})