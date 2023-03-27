/*
    Loop : execution of a statement multiple times, untill it(counter) reches it's termination condition(count)
    syntex: for (variable, condition , incremment/decrement){
        statement1
        satatement2
    }
    
    while(condition){
        print 
        
    }
    do{

    }while(condition)

*/
let num1 = 3;
// console.log(++num1)
console.log("=====Table of 3 ====")
for (let i = 1; i <= 10; i++) {
    const Result = i * num1;
    console.log(num1, "*", i, " = ", Result);
}

//pre-increment ++i and post-increment i++
//i++ , ++i :=>  i = i+1  :=> i += 1


//print all even 1 to 20 using loop
console.log("All even 0 to 20 are following given bellow")
for (let i = 0; i <= 20; i++) {
    reminder = i% 2
    if (reminder > 0) {
        continue
    } else {
        console.log(i," ")
    }
}