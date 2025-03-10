// function countSheep(array) {
//     if (array === null || array === undefined) return null
//     let arrTrue = [];
//     array.forEach(el => {
//         if (el) arrTrue.push(el)
//     });
//     return arrTrue.length
// }
// ------------
function count(array) {
  // initial value
  let counter = 0;
  array.forEach((el) => {
    if (el) counter += 1;
  });
  return counter
}
// -------------
function countSheep(array) {
  if (array === null || array === undefined) return null;
  return array.filter((arr) => arr).length;
}

console.log(countSheep([true, false, true, false, false]));
console.log(count([true, false, true, false, false, true]))