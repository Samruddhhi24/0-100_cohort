// calculate length of string 
function getlength(str)
{
    console.log(str.length);
}
let a="hello world world world";
getlength(a);

//get index of any letter
function getindex(str,target)
{
    console.log(str.indexOf(target));
    console.log(str.lastIndexOf(target));
}
getindex(a,"world");

//slicing a string 
function slicestr(str,start,end)
{
    console.log (str.slice(start,end))
}
slicestr(a,1,3)

//replace word from string 
function replacestr(str ,word,replacer)
{
    console.log(str)
    console.log(str.replace(word,replacer))
}
replacestr(a,"world","me")

//split thr string with delimeter

function splitstr(str,deli)
{
    console.log(str.split(deli))
}
splitstr(a," ")

//a.trim() - remove extra space at the end or start
console.log(a.toUpperCase())
console.log(a.toLowerCase())