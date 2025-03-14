// average = total / number

// function average(array){
//     let sum = 0;
//     array.map(e => sum += e)
//     return sum / array.length;
// }
function average(array) {
  if (array === null) return 0;
  return array.reduce((acc, current) => acc + current) / array.length;
}

console.log(average([1, 2, 5]));
