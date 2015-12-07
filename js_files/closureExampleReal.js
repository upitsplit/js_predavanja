function funk(name) {
  var name = name;
  var timestamp = Date.now();

  return function() {
    console.log('The name is', name);
    console.log('It has', name.length, 'characters');
    console.log('It was created', Date(timestamp));
  }
}

var detail = funk('Mate');
detail();
