let array =[1,2,3]
let array1 =[4,5,6]

//push to the last of array like append 
array.push(8)
console.log(array)

//remove last element 
array.pop()
console.log (array)

//add a element frist position
array.unshift(0)
console.log(array)

//remove first element of array 
array.shift()
console.log(array)

//adding one array at the end of first array or concatinating two arrays
console.log(array.concat(array1))

//foeach loop
function fun(str)
{
    console.log(str)
}
array.forEach(fun)