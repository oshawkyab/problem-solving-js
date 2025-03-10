// check for array uf null return 0
// Sort Array 
// slice withOut first and last
// reduce VAlues
function sumWithoutHeighestAndLowest(array) {
  if (array == null) return 0;
  let newArray = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, c) => a + c);
  return newArray;
}

console.log(sumWithoutHeighestAndLowest([11, -1, 9, 50, -1, 20]));
