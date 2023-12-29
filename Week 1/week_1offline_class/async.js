//built in async functions 
//1. setTimeOut
function findSum(a,b){
    console.log(a+b) ;
}
function sum()
{
    console.log(3+4)
}
//this will wait for 2 sec and then start executing sum 
//function with no arguments 
//it dont need callbacks

setTimeout(sum,2000);
//this line will be executed first
console.log("Hi Async")

//2. file system functions 
const fs= require("fs")
//we need to mention each arg if encoding is not mentioned it will print in byte if err is not mentioned in the function then it will give you data as null
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
});
console.log("hi from outside the file")
