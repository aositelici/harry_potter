'use strict';

var Basket = require('../src/model/basket');

describe('basket', function () {
  var basket;
  var inputBasketItem;

  beforeEach(function () {
    basket = new Basket();
    inputBasketItem = {book: {name: 'first', price: 8.00}, count: 1};
  });

  describe('#findBasketItem', function () {

    it("basket has the same book ,the find result should be " +
        "{book: {name: 'first', price: 8.00}, count: 2}", function () {

      basket.basketItems = [{book: {name: 'first', price: 8.00}, count: 2},
                            {book: {name: 'second', price: 8.00}, count: 1}
                           ];
      expect(basket.findBasketItem(inputBasketItem)).toEqual({book: {name: 'first', price: 8.00}, count: 2});
    });

    it('basket does not have the same book ,the find result should be undefined', function () {
      basket.basketItems = [{book: {name: 'second', price: 8.00}, count: 1}];
      expect(basket.findBasketItem(inputBasketItem)).toEqual(undefined);
    })
  });

  describe('#addBasketItem', function () {

    it("basket has the same book ,the add result should be [{book: {name: 'first', price: 8.00}, count: 3}," +
        "{book: {name: 'second', price: 8.00}, count: 1}]", function () {

      basket.basketItems = [{book: {name: 'first', price: 8.00}, count: 2},
                            {book: {name: 'second', price: 8.00}, count: 1}
                           ];

      spyOn(basket, 'findBasketItem').and.callFake(function () {
        return basket.basketItems[0];
      });
      basket.addBasketItem(inputBasketItem);

      expect(basket.basketItems).toEqual([{book: {name: 'first', price: 8.00}, count: 3},
                                          {book: {name: 'second', price: 8.00}, count: 1}
                                         ]);
    });

    it("basket does not have the same book ,the add result should be [{book: {name: 'second', price: 8.00}, count: 1}," +
        "{book: {name: 'first', price: 8.00}, count: 1}]", function () {

      basket.basketItems = [{book: {name: 'second', price: 8.00}, count: 1}];

      spyOn(basket, 'findBasketItem').and.callFake(function () {
        return undefined;
      });

      basket.addBasketItem(inputBasketItem);

      expect(basket.basketItems).toEqual([{book: {name: 'second', price: 8.00}, count: 1},
                                          {book: {name: 'first', price: 8.00}, count: 1}
                                         ]);
    })
  });

});