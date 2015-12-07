var a = 5;

function one() {
  a = 25;
  console.log('a:', a);

  function innerFunk() {
    var b = 15;
    console.log('a:', a, 'b:', b);
  }

  innerFunk();
}

one();
