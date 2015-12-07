function one() {
  var a = 10;

  setTimeout(function() {
    // console.log('b:', b);
    var b = 20;

    setTimeout(function() {
      a = 5;
      var c = 15;

      setTimeout(function() {
        console.log('a:', a, 'b:', b, 'c:', c);
      }, 300);

    }, 200);

    setTimeout(function() {
      console.log('a:', a, 'b:', b);
    }, 200);

    b = 200;
  }, 500);
}
one();
