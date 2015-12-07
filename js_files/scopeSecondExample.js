'use strict';

var a = (function one() {

  function two() {
    console.log('Hello there');
  }

  two();
})();

// one(); // ???
console.log(a); //???
