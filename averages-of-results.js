function avg(array) {
  return  Math.round(array.reduce((acc, current) => acc + current) / array.length);
}
function avg(array) {
    let sum = 0;
    array.forEach(el => {
        sum += el
    });
    return Math.round(sum / array.length)
}
console.log(avg([3, 3, 3]));
