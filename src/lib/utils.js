'use strict';

exports.formatData = function(data) {
  return data.toFixed(2);
};

exports.format2 = function(data) { //format2是什么鬼？
  return Math.round(data * 100) / 100;
};

//这种工具包不要用lib，用util。那就会显得这个文件很怪，怪就对了，因为不应该有泛泛的util，都应该有具体的用途。