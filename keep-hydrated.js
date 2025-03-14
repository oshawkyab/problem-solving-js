//  in hour .5 letter
// argument number of hour
// rounded to smallest number of letter (floor)

function keepHydrated(hour){
    return Math.floor(hour * 0.5)
}

console.log(keepHydrated(3))

console.log(keepHydrated(6.7))

console.log(keepHydrated(11.8))