function bounsTime(salary, bouns){
    if(bouns){
        return salary * 10 + " EGP"
    }else{
        return salary + " EGP"
    }   
}

console.log(bounsTime(2, false))

