'use strict';

var Basket = require('../src/model/basket');

describe('basket: ', function () {//既然下面的describe是想测试方法，那么这个describe就该说清楚自己是某个类的测试集合，那就应该用大写
  var basket;
  var inputBasketItem;

  beforeEach(function () {
    basket = new Basket();
    inputBasketItem = {book: {name: 'first', price: 8.00}, count: 1};
  });

  describe('#findBasketItem: ', function () {

    it("basket has the same book ,the find result should be " +
       "{book: {name: 'first', price: 8.00}, count: 2}", function () { // test case 和 assertion是可以超80个字符的
       //上面这个写的太具体了，除非是测试格式的case，其他的case应该用更抽象的概念，让人一眼看清重点，比如关注在count上。

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

  describe('#addBasketItem: ', function () {

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

    it("basket does not have the same book ,the add result should be [{book: {name: 'second', price: 8.00}, count: 1}" +
       ",{book: {name: 'first', price: 8.00}, count: 1}]", function () {

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

  describe('#getItemCounts: ', function () {
    it("should return each item's counts as a array", function () {
      basket.basketItems = [{book: {name: 'first', price: 8.00}, count: 2},
                            {book: {name: 'second', price: 8.00}, count: 1}
      ];
      expect(basket.getItemCounts()).toEqual([2, 1]);
    })
  })

});