/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
  str = str.toLowerCase();
  str=str.split(" ").join("")
  let str_reverse=[str.length]
  
  let array_str=[str.length]
  for (let i =0;i<str.length;i++)
  {
    array_str[i]=str.charAt(i)

  }
  //console.log(array_str)
  array_str.reverse();
  for (let i =0;i<str.length;i++)
  {
    str_reverse[i]=str.charAt(i)

  }
  let result =true;
  //console.lo
  //console.log(str_reverse)
  
  for (let i=0;i<str.length;i++)
    {
      //console.log(array_str[i])
      //console.log(str_reverse[i])
      if (array_str[i]==str_reverse[i])
      {
        result=true
        
      }
      else
      {
        result =false
        break;
      }
    }
  return result;
}

module.exports = isPalindrome;
