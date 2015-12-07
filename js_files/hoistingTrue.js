'use strict';

function one() {
  var a;
  console.log(a); //???
  a = 10;

  function two(a) {
    console.log(a); //???
    var a;
    a = 5;
    console.log(a); //???
  }

  two(7);
  console.log(a); //???
}
var a;
a = 25;

one();
