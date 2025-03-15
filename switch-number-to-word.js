// function swit(number){
//     let word = {
//         1: "One",
//         2: "Two", 
//         3: "Three",
//         4: "Four",
//         5: "Five",
//         6: "Sex",
//         7: "Seven",
//         8: "Eight",
//         9: "Nine"
//     }
//     if (word.hasOwnProperty(number)){
//         return word[number]
//     }else{
//         return "Number Is Not Exist"
//     }
// }

// console.log(swit(2))
function swit(number){
    switch(number){
        case 0 :
            return "Zero"
        case 1 :
            return "One"
        case 2 :
            return "Two"
        case 3 :
            return "Three"
        case 4 :
            return "Four"
        case 5 :
            return "Five"
        case 6 :
            return "Sex"
        case 7 :
            return "Seven"
        case 8 :
            return "Eight"
        case 9 :
            return "Nine"
        default :
            return "Number Has Not Exist"
    }
}

console.log(swit(0))