// 1 - convert to  string
// 2 - Loop for last element
// 3 - check if content 0 delete

function delZero(n) {
  let str = String(n);
  while (str.endsWith(0)) {
    str = str.slice(0, str.length - 1);
  }
  return str;
}
console.log(delZero(12400));
