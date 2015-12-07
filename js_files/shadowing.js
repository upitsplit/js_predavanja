var a = 2;
function one() {
  var a = 25;

  function two(a) {
    a = 10;
    console.log(a);
  }

  two(5);
  console.log(a);
}

one();
console.log(a);
