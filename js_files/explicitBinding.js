function one() {
  console.log(this.a);
}

var o1 = { a: 25 };
var o2 = { a: 10 };

one.call(o1);

one = one.bind(o1);
// var originalFunk = one;
// one = function() {
//   originalFunk.call(o1);
// };

one();
one.call(o2);
