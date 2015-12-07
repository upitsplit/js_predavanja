var a = 15;

function one() {
  console.log(this.a);
}

var obj = {
  a: 20,
  delay: function() {
    setTimeout(one, 500);
  }
}

one();
obj.delay();
