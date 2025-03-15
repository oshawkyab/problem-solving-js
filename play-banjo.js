// function play(name){
//     if(name[0] === "R" || name[0] === "r"){
//         return `${name} play banjo`
//     }else{
//         return name + " Not Play"
//     }
// }
// function play(name) {
//   return name.charAt(0) == "R" || name.charAt(0) == "r"
//     ? "PLaY THIS GAME"
//     : "NOT PLAY";
// }
function play(name) {
  return (/r/ig).test(name) ? "PLAY" : "NOT PLAY"
}

console.log(play("ea"));
