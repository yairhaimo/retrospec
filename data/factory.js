var app = angular.module('myModule', []);

app.factory('myFact', function() {
  return {name: 'yair'};
});


var myFact2 = function() {
  return {age: 32};
};
app.factory('myFact2', myFact2);

var myFact3 = function() {
  function Factory() {}
  Factory.getName = function() {
    var x = 1;
    return x;
  };
  Factory.address = 'Petah Tikva';

  return Factory;
};
app.factory('myFact3', myFact3);
