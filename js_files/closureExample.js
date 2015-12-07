function funk(name) {
  var name = name;
  var timestamp = Date.now();

  function detailName() {
    console.log('The name is', name);
    console.log('It has', name.length, 'characters');
    console.log('It was created', Date(timestamp));
  }

  detailName();
}

funk('Mate');
