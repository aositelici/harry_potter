'use strict';

var fixture = require('../../spec/fixtures');
var BasketItem = require('./basket-item');

function Scanner() {//这个scanner有点多余，他就是一个计算型的

}

Scanner.prototype.scan = function(tag) {

  var allBooks = fixture.loadAllBooks();
  var book ;
  var count = 1;

  allBooks.forEach(function(oneBook) {
    if(oneBook.name === tag) {
      book = oneBook;
    }
  });
  if(book){
    var basketItem = new BasketItem(book, count);
    return basketItem;
  }
};

module.exports = Scanner;