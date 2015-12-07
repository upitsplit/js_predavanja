var a = 15;

function one() {
  var a = 10;
  console.log(this.a);
}

setTimeout(one, 500);
