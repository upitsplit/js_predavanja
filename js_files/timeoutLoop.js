for (var i = 0; i < 5; i++) {
  setTimeout(function(i) {
    console.log(i);
  }, 200, i)
}

console.log('outer:', i);
