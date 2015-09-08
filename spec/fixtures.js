'use strict';

exports.loadAllBooks = function () {
  var Book = require('../src/book');
  return [
    new Book('first',  8.00),
    new Book('second',  8.00),
    new Book('third',  8.00),
    new Book('fourth',  8.00),
    new Book('fifth',  8.00)
  ];
};