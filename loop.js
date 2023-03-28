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
for (let i = 0; i <=50; i++) {
    reminder = i% 2
    if (reminder > 0) {
        continue
    } else {
        console.log(i," ")
    }
}

console.log("Infinite loop started..................")
// for(let i=0;;i++){
//     console.log("Hey",i)

// }

//WHILE loop using for loop
let counter = 0
for(;counter < 10;){
   var name = "Shivani"
   console.log("My name is",name)
   counter++
}
//DO-WHILE loop using for loop
for (; ;) {
    var name = "Shivani"
    console.log("My name is", name)

    if (counter < 10) {
        counter++
    } else {
        break
    }
}
//nested for loop 
for (let i = 0; i<10;i++){
    for (let j =1;j<=5;j++){
        process.stdout.write(""+j)
    }
    console.log()
}

//write a program to print a start(*) pattern 
row=5
colum = 5
for(row=0;row<5;row++){
    for(colum=0;colum<5;colum++){
        if (colum>=row)
            process.stdout.write("*")
        else
            process.stdout.write(" ")
    }
    console.log()
}


//write a program to print a pattern
for(row=0;row<5;row++){
    let askiValue = 0
    for(colum=4;colum>=0;colum--){
        if (colum >= row){
            process.stdout.write(String.fromCharCode(askiValue+65))
            askiValue++
        }else{
            process.stdout.write(" ")
        }   
    }
    console.log()
}

//reverse set 

let str = "SHIVANI"
for(let i=0;i<str.length;i++){
    console.log(str[i])
}

//write a program to print a pattern of Shivani
