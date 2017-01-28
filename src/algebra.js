/*
  This is the file containing all of the algebraic
  functionality of metadelta.

  Copyright (C) Gerald Nash 2016-2017
*/
var algebrite = require('algebrite');

module.exports.simplify = algebrite.run;

module.exports.factor = function(expression){
  return algebrite.factor(expression).toString();
};

// TODO: Use advanced algebra and/or Newton's method
module.exports.zeroes = function(oExpression){

  // x^2 - 1 -> '("1", "-1")'
  var str = algebrite.roots(oExpression).toString();

  // '("1", "-1")' -> '"1", "-1"'
  var newStr = str.slice(1, str.length - 1);

  // '"1", "-1"' -> ["1", "-1"]
  var rootStrs = newStr.split(',');

  // ["1", "-1"] -> [1, -1]
  var rootsArr = rootStrs.map(function(rootStr){
    return parseInt(rootStr);
  });

  return rootsArr;
};
