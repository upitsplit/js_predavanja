function one() {
  var a = 20;

  function two() {
    console.log(a);
  }

  outer(two);
}

function outer(funk) {
  funk();
}

one();
