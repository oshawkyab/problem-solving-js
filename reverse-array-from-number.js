// function reverseArray(n){
//     let arr = Array.from(String(n)).map(( n=> Number(n))).reverse();
//     return arr;
// }
// function reverseArray(n) {
//   let arr = Array.from(String(n), Number).reverse();
//   return arr;
// }
// function reverseArray(n) {
// //   change From Number To Array
// let str = String(n);
// return str.split("").map(num => Number(num)).reverse()
// }

function reverseArray(n){
    return n.toString().split("").map(num => Number(num)).reverse()
}

console.log(reverseArray(456));
