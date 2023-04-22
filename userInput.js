//import package for read input from sytem console 
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your feedback?", function(rating){
    console.log("rating is", + rating)
    if(rating<1){
        console.log("Give me a feedback")
    }else if(rating<2){
        console.log("review: *")
    }else if(rating<3){
        console.log("review: **")
    }else if(rating<4){
        console.log("review: ***")
    }else if(rating<5){
        console.log("reviw: ****")
    }else if(rating<6){
        console.log("review: *****")
    }else{
        console.log("over rating")
    }
})
rl.question("what is your age ?", function (age){
    console.log("your age is ", + age)
    if (age <15) {
        console.log("you are a child")
    }else if (age < 30){
        console.log("you are a  teen ager")
    }else if(age <60){
        console.log("you are adult")
    }else{
        console.log("you are old buddy!")
    }
})

rl.question("What is your name? ", function (answer) {
    console.log(`Oh, so your name is ${answer}`);
    return
  });


