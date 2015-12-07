function funk(value) {
  var counter = 0;
  var val = value;

  function inc() {
    counter += val;
  }

  function show() {
    console.log(counter);
  }

  function get() {
    return counter;
  }

  return {
    inc: inc,
    show: show,
    get: get
  };
}

var exp = funk(7);
console.log(exp.get());
exp.inc();
console.log(exp.get());
exp.inc();
console.log(exp.get());
exp.inc();
console.log(exp.get());
