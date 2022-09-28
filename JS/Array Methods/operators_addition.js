let a=152;
let b=12;
let f=15;
let c;
let d=true;
let e="pooji"

console.log(a=f)
console.log(a+b)
console.log(a+c)
console.log(a+d)
console.log(a+e)


// checking the which datatype
let g= [10, 20, 30, 'Forty', 50, 10, 20, "Rahul", true];
console.log(typeof g)

//checking the primitive types holding the single values
var price = 399;
var rating = 4.1;
var name = "Regular fit solid";
var brand = "Peter England";
var stock = true;
var discount;
//reading data
console.log(price)
console.log(typeof price)
console.log(typeof rating)
console.log(typeof brand)
console.log(typeof name)
console.log(typeof stock)
console.log(typeof discount)


//group of key: value pairs as one entity
var emp = {
    id: 101,
    name: "Rahul Gandhi",
    sal: 45000
}
console.log(emp)
console.log(typeof emp)


//nonprimitive datatypes
var size1 = 'S';
var size2 = 'M';
var size3 = 'L';
var size = [38, 40, 42, 44, 46];
console.log(size)
console.log(typeof size)


function cal_Age(year) {
    
    return 2022 - year, "44"
}
let age1 = cal_Age(1983)
console.log(age1)
let age2 = cal_Age(1993)
console.log(age2)


//function 
function wish() {
    return "GM"
    console.log("Take Break Fast")
}

let message = wish();
console.log(message)

//if-else other type
var num=1051;
num % 2===0? console.log("even"):console.log("odd")

//checking the odd even
var num = 200;
if(num%2===0){
    console.log("even");
}
else{
    console.log("odd")
}