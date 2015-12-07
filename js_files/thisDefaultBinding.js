function one() {
  console.log(this.a);
}

var o1 = { a: 10, one: one };
var o2 = { a: 15, one: o1.one };

one();
o1.one();
o2.one()
