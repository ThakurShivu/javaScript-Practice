const TODAY = 'Wednesday'
const SUNDAY_MENU = 'Aalu ka paratha'
const MONDAY_MENU = 'Coffee'
const TUESDAY_MENU = 'Frenchfries'
const WEDNESDAY_MENU = 'Momos'
const THURSDAY_MENU = 'Noodles'
const FRIDAY_MENU = 'Chhole'
const SATURDAY_MENU = 'Rajma'
//days
const SUNDAY = "Sunday"
const MONDAY = "Monday"
const TUESDAY = "Tuesday"
const WEDNESDAY = "Wednesday"
const THURSDAY = "Thursday"
const FRIDAY = "Friday"
const SATURDAY = "Saturday"


function BreakfastMenuByDay(TODAY) {
    let menu
    if (TODAY == SUNDAY) {
        menu = SUNDAY_MENU
    } else if (TODAY == MONDAY) {
        menu = MONDAY_MENU
    } else if (TODAY == TUESDAY) {
        menu = TUESDAY_MENU
    } else if (TODAY == WEDNESDAY) {
        menu = WNDESDAY_MENU
    } else if (TODAY == THURSDAY) {
        menu = THURSDAY_MENU
    } else if (TODAY == FRIDAY) {
        menu = FRIDAY_MENU
    } else {
        menu = SATERDAY_MENU
    }
    return `Today is : ${TODAY} and Today's menu is: ${menu}`
}
console.log(BreakfastMenuByDay(MONDAY))

//write a function to return additon of two numbers  => add
//write a function to return subtract of two numbers => sub
//write a function to return multiply of two numbers = mult
//write a function to return devid of two numbers = div
//write a function to return reminder of a/b = mod 

//write a function to return additon of two numbers  => add
function add(num1, num2) {
    return num1 + num2
}
console.log(add(4, 5))


//write a function to return subtract of two numbers => sub
function sub(num1, num2) {
    return num1 - num2
}
console.log(sub(3, 2))

//write a function to return subtract of two numbers => mult
function mult(num1, num2) {
    return num1 * num2
}
console.log(mult(7, 8))


//write a function to return subtract of two numbers => div
function div(num1, num2) {
    return num1 / num2
}
console.log(div(9, 5))

//write a function to return subtract of two numbers => mod
function mod(num1, num2) {
    return num1 % num2
}
console.log(mod(5, 7))

//make a calculater using call by function in javascript

function calculate(ope, num1, num2) {
    let res

    if (ope == "+") {
        res = num1 + num2
    } else if (ope == "-") {
        res = num1 - num2
    } else if (ope == "*") {
        res = num1 * num2
    } else if (ope == "/") {
        res = num1 / num2
    } else if (ope == "%") {
        res = num1 % num2
    } else {
        res = "please give me input"
    }
    return `operand is: ${ope} and result is: ${res}`
}
console.log(calculate("*", 7, 5))

// make a calculator using switch

function calculator(ope, num1, num2) {
    let res
    switch (ope) {
        case "+":
            res = num1 + num2
            break;
        case "-":
            res = num1 - num2
            break;
        case "*":
            res = num1 * num2
            break;
        case "/":
            res = num1 / num2
            break;
        case "%":
            res = num1 % num2
            break;
        default:
            res = "error"
    }
    return `operand is: ${ope} and result is: ${res}`
}

console.log(calculator("+", 9, 8))


//write a function for check the eligibility for a vote.


function IsEligibleForAVote(age) {
    let output
    if (age >= 18) {
        output = "Eligible for a vote"
    } else {
        output = "Not eligible for a vote"
    }
    return `Result is:${output}`
}
console.log(IsEligibleForAVote(18))

// NOTE: we can also store a function in variable and call that function using that variable name 

//let's assign Print funtion in printer variable 
var printer = function Print(Name) {
    console.log("Hello :", Name)
}

// now call Print function by calling printer variable 

printer("Vimal Shah")

// as we seen in above example we can store a function , we can avoid function Name because we are not calling function  by it's name 
var Player = function (GameName) { //anonumous function
    console.log("Oho! you are playing : ", GameName, " game")
}
Player("God of War")

// so above example shows we can avoid unneccessary name which we are not using 
// as we know () means function so  can also remove 'function' key word
VoteEligibilityCheck1 = (age) => {   //arrow function
    let vv = "VV"
    if (age >= 18) {
        console.log("WOW ! you are eligible for vote")
    } else {
        console.log("Oops ! you can't vote")
    }
    func = () => { //closer fuction 
        console.log("I am inside an anonuomous function")
        console.log(vv)
    }
    func()
}
VoteEligibilityCheck2 = (age) => {   //arrow function
    if (age >= 21) {
        console.log("WOW ! you are eligible for vote")
    } else {
        console.log("Oops ! you can't vote")
    }
}

// we can also pass a function inside a function 
check = (eligibilityCheckMethod, age) => { // example of first class function
    eligibilityCheckMethod(age)
}
check(VoteEligibilityCheck1, 18)

// write a javascript program to get the current date.

current = (sp) => {
    today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()

    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm
    return (mm + sp + dd + sp + yyyy)

}
console.log(current('/'))
console.log(current('-'))