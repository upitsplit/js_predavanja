'use strict';

var a = 25;

console.log(typeof (a));
console.log(typeof (a + 'hello'));
console.log(typeof (a + function() { return 0; })); //don't ever do this!!!
