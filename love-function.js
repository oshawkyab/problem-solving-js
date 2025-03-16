function love(one, two) {
//   if ((one % 2 === 0 || two % 2 === 0) && (one % 2 !== 0 || two % 2 !== 0)) {
//     return "Its Love";
//   } else {
//     return "Not Love";
//   }
    return one % 2 !== two % 2 ? "Love" : "Not Love"
}

console.log(love(10, 3));
