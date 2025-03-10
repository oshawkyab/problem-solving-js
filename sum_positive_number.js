// // Sum Posisve Number
// function sumNumber(arr){
//     // init value for Sum
//     let sum = 0;
//     // Loop For Array
//     arr.forEach(n => {
//         // check value
//         if(n >= 0){
//             // add Value If it Positive
//             sum += n
//         };
//     });
//     console.log(sum)
// }
// sumNumber([5, -4, 5, -80, 10])

// Another Solve
function sumNumber (arr){
    return arr.filter((x) => x >= 0).reduce((acc , cur) => acc + cur)
}

console.log(sumNumber([-1, 2, 4]))