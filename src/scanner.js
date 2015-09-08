'use strict';

var fixture = require('../spec/fixtures');
var BasketItem = require('./basket-item');

function Scanner() {

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