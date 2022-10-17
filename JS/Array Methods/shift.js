let arr=[10,25]

//unshift means adding in the starting number or string or anything to the given list
arr.unshift(5,15,20)
console.log(arr)


//shift means deleting the  starting number or string or anything from the list 
arr.shift(25)
console.log(arr)


let size = ['s','m','l','xl','xxl']
//to print the values we use console.log(name)
let removed_Ele = size.pop()
//removed_Ele is used for the printing the last num or string or anything from the list
console.log(removed_Ele)


let names = ['rahul','sonia','priyanka']
//names.indexOf() is used for the value ofbthe num or string
console.log(names.indexOf('priyanka'))

//names.reverse() is used for the reverse the values that is in the list
console.log(names.reverse())

var  marks = [98,95,25,45,312,55]
//name of the file[] is used for the printing the specific index of array elements in the list
console.log(marks[5])


let sizes = ['s','m','l']
//printing the total values that are using the for loop 
for (let i=0; i<=2; i++){
    console.log(sizes[i])
}
//finding the array length in the list
console.log(sizes.length)


