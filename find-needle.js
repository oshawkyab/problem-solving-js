// Search Needle In Array

// function Fined Needle
// function findNeedle(array) {
//   // check if element include array
//   if (array.indexOf("needle") !== -1) {
//     // return index of element
//     return `We Find Needle Index Of ${array.map(el => el.toLowerCase()).indexOf('needle')}`;
//   } else {
//     // if not exist needle
//     return `We Not Find Needle In Array`;
//   }
// }
function findNeedle(array) {
  return (
    "we find needle in index of " +
    array.map((e) => e.toLowerCase()).indexOf("needle")
  );
}

console.log(findNeedle(["Omar", "Hassan", "Needle", "Needle"]));
