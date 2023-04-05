var Nums = [7, 8, 9, 80, 99]
console.log(Nums)
Nums.push(100)
console.log(Nums)

Name = "suraj"

console.log(Name)

//===================  Array ===================================
// array is a collection of homogenious data type , array is an object 
Names = ["Satyam", "shivani", Name, "bhuvan", "noida", 10, true, 11.7]
console.log(typeof (Names), Names)
Locations = [8]
console.log(typeof (Locations))
console.log(typeof (Names[7]))
//============Operations on array ==============================
//create, retrive(access), update , delete 
console.log(Names[7])
Names[7] = "Swati"
console.log(Names[7])

//============ Array method ============
// push() , pop() , lenghth , shift() , unshift()

Names.push("John")
console.log(typeof (Names), Names)
popedValue = Names.pop()
console.log(popedValue)
console.log("Length is: ", Names.length)
console.log(Names.shift())
Names.pop()
Names.pop()
console.log(typeof (Names), Names)
console.log("Length is: ", Names.length)

MarksPre = [78, 5, 67, 9, 90, 34, 3, 4, 87, 85, 58]
//create an array of marks and print marks with index no 
Marks = [78, 56, 67, 89, 90, 34, 73, 64, 87, 85, 58]
for (let index = 0; index < Marks.length; index++) {
    console.log(`Index ${index} : ${Marks[index]}`)
}

//create an function to return sum of marks array 
function SumOfArray(arr) {
    let total = 0
    for (let index = 0; index < arr.length; index++) {
        total = total + arr[index]
    }
   return total
}

console.log( SumOfArray(MarksPre),SumOfArray(Name))


