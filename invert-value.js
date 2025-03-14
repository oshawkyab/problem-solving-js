// invert value from array
// [1] loop on array
// [2] use map from element
// [3] element * -1

function invertValue(array) {
  return array.map((e) => e * -1);
}

console.log(invertValue([1, -1, 2, -10]));
