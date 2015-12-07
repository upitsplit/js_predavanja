'use strict';

function one(a) {
  if (a < 0) return;

  function two() {

    function one(a) {  //what???
      if (a < 0) return;
      console.log(a);
      one(a - 1);
    }

    one(a);
  }

  two(a);
  console.log("\n");
  one(a - 1);
}

one(3);
