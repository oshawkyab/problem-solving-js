// countBy(counter, length)
function countBy(counter, length) {
  let numbers = [];
  for (let i = counter; i <= length * counter; i += counter) {
    numbers.push(i);
  }
  return numbers;
}


console.log(countBy(2, 5));
console.log(countBy(1, 10));
