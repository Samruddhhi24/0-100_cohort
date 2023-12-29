
//promise have three states pending resolve rejected
//pending when resolve in not called in promise 
//resolve is callled means control go to .then 
function sum()
{
    let a=3;
    let b=4;
    console.log(a+b) ;
}
let p=new Promise(function(resolve){
    resolve()
    
})
//console.log(p)
console.log("hi")
p.then(console.log("hi from then"))

