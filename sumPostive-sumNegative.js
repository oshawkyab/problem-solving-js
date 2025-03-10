// init two var = 0
// arrar filter Negative & Postive
// init array content Sum Of Postive And Sum Of Negative

function sumOf(array) {
  let pos = array.filter((e) => e > 0).length;
  let neg = array.filter(e => e < 0).reduce((acc, current) => acc + current);
  return [pos, neg];
}
console.log(sumOf([1, 3, 2, -12, -9, 20]));
