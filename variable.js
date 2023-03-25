// // /*
// // ================ Variables =============
// // variables are used to store data , variables can be different type acording to data
// // */

value1 = 5  
value2 = '7 A books'
total = value1 + parseInt(value2)
value2= 10.5
 console.log("Total is "+total)

 /* Type : int , string , boolean , float */
console.log(typeof(value2))

//implicit conversion and explicit conversion of a data type 
  value1 = String(value1)
console.log(typeof(value1)+ value1)

// // // decleration and initialisation 
 var Name        //declation
Name = "Satyam"  // initialisation


 let Class 
 Class = "MCA"

 const BLOOD_GROUP= "O+"

 Name = "Bhuvan"
Class = "BCA"

console.log(typeof(BLOOD_GROUP))
console.log("Name "+Name + " Class: "+Class + " BloodGroup: "+BLOOD_GROUP)

 // Scope opf a variable
function Check(){
     var Name = "Shivani"
   Class = "Bsc"
   var NewValue = "newValue"
console.log("Name: "+Name+" Class: "+Class)
 }

Check()
 console.log("Name: "+Name+" Class: "+Class)
console.log("New Value "+NewValue)

