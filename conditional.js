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

if (TODAY == SUNDAY) {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + SUNDAY_MENU)
} else if (TODAY == MONDAY) {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + MONDAY_MENU)
} else if (TODAY == TUESDAY) {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + TUESDAY_MENU)
} else if (TODAY == WEDNESDAY) {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + WEDNESDAY_MENU)
} else if (TODAY == THURSDAY) {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + THURSDAY_MENU)
} else if (TODAY == FRIDAY) {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + FRIDAY_MENU)
} else {
    console.log("Today is : " + TODAY)
    console.log("Today's menu is : " + SATURDAY_MENU)
}

// find greatest among three value 

let num1 = 78
let num2 = 12
let num3 = 24

if (num1 >= num2 && num1 >= num3) {
    console.log("result is: " + num1 + ' is greater than num2 and num3')
} else if (num2 >= num3 && num2 >= num3) {
    console.log("result is: " + num2 + ' is greater than num3 and num1')
} else {
    console.log("result is: " + num3 + ' is greater than num1 and num2')
}

// find out Todays office pattern => mon,wed,friday=>WFO , tue,thu=>WFH , sat, sun => hurrah! todays is holiday

if (TODAY == MONDAY || TODAY == WEDNESDAY || TODAY == FRIDAY) {
    console.log("Today is Work from office")
} else if (TODAY == TUESDAY || TODAY == THURSDAY) {
    console.log("Today is work from home")
} else {
    console.log("Today is off")
}

//SWITCH CASE : Write a program to print meal menu according to a day

switch (TODAY) {
    case MONDAY:
        console.log("today's menu : ", MONDAY_MENU)
        break
    case TUESDAY:
        console.log("today's menu : ", TUESDAY_MENU)
        break
    case WEDNESDAY:
        console.log("today's menu : ", WEDNESDAY_MENU)
        break
    case THURSDAY:
        console.log("today's menu : ", THURSDAY_MENU)
        break
    case FRIDAY:
        console.log("today's menu : ", FRIDAY_MENU)
        break
    case SATURDAY:
        console.log("today's menu : ", SATURDAY_MENU)
        break
    default:
        console.log("today's menu : ", SUNDAY_MENU)
}

// =================== Fall Through in Switch Case ========================
/*write a program to print a coat msg according to selected day  
        mon, tue :=> "Life is all about next step" , wed,thu,fri :=> "hardwork is key of success" , sat,sun :=>  "no msg  only chill" */

switch (TODAY) {
    case MONDAY:
    case TUESDAY:
        console.log(TODAY+": Life is all about next step")
        break
    case WEDNESDAY:
    case THURSDAY:
    case FRIDAY:
        console.log(TODAY,": hardwork is key of success")
        break
    case SATURDAY:
    case SUNDAY:
        console.log(TODAY+": no msg  only chill")
    default:
        console.log(TODAY+": Wron Day entered")
}