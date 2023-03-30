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

    if (ope == "+"){
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

