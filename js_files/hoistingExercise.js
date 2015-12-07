'use strict';

function a(val) {
  if (val > 20) return val;
  return b(val * 2);
}

function b(val) {
  return c(val - 1) + 1;
}

function c(val) {
  return a(val * 2);
}

console.log(a(1));
