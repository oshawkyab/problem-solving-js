// replace element 
// regEx
// ""

// ----------salution 1
// function removeEx(string){
//     return string.replace(/!/ig,"")
// }

// salution 2
function removeEx(sting){
    return sting.split("").filter((el) => el != "!").join("")
}


console.log(removeEx("HE!llo!"));
