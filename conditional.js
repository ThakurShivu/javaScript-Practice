const TODAY='Sunday'
const SUNDAY_MENU='Aalu ka paratha'
const MONDAY_MENU='Coffee'
const TUESDAY_MENU='Frenchfries'
const WEDNESDAY_MENU='Momos'
const THURSDAY_MENU='Noodles'
const FRIDAY_MENU='Chhole'
const SATURDAY_MENU='Rajma'
//days
const SUNDAY = "Sunday"
const MONDAY = "Monday"
const TUESDAY = "Tuesday"
const WEDNESDAY = "Wednesday"
const THURSDAY = "Thursday"
const FRIDAY = "Friday"
const SATURDAY = "Saturday" 

if (TODAY == SUNDAY){
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ SUNDAY_MENU)
}else if (TODAY == MONDAY){
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ MONDAY_MENU)
}else if (TODAY == TUESDAY){
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ TUESDAY_MENU)
}else if (TODAY == WEDNESDAY){
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ WEDNESDAY_MENU)
}else if (TODAY == THURSDAY){
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ THURSDAY_MENU)
}else if (TODAY == FRIDAY){
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ FRIDAY_MENU)
}else{
    console.log("Today is : "+TODAY)
    console.log("Today's menu is : "+ SATURDAY_MENU)
}

// find greatest among three value 

let num1=78
let num2=12
let num3=24
 
if(num1>=num2 && num1>=num3){
    console.log("result is: "+num1+ ' is greater than num2 and num3')
}else if(num2>=num3 && num2>=num3){
    console.log("result is: "+num2 +' is greater than num3 and num1')
}else{
    console.log("result is: "+num3+ ' is greater than num1 and num2')
}

// find out Todays office pattern => mon,wed,friday=>WFO , tue,thu=>WFH , sat, sun => hurrah! todays is holiday

if (TODAY==MONDAY||TODAY==WEDNESDAY||TODAY==FRIDAY){
    console.log("Today is Work from office")
}else if(TODAY==TUESDAY||TODAY==THURSDAY){
    console.log("Today is work from home")
}else{
    console.log("Today is off")
}









