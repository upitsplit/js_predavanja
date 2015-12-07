'use strict';

var a = 25;

function one() {
  console.log(a); //???
  var a = 10;

  function two(a) {
    console.log(a); //???
    var a = 5;
    console.log(a); //???
  }

  two(7);
  console.log(a); //???
}

one();
