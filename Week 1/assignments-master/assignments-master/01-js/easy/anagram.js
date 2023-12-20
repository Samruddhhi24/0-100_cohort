/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let array =[str1.length];
  let array1 =[str2.length];
  for (let i = 0; i < str1.length; i++) {
    array[i]=str1.charAt(i);
    //console.log(array[i]);
  }
  for(let i=0;i<str2.length;i++) {
    array1[i]=str2.charAt(i);
  }
  array=array.sort()
  array1=array1.sort()
  if(array.length==array1.length) {
    for (let i=0;i<array.length;i++) {
      if(array[i]==array1[i]) {
        return true;
      }
      else
      {
        return false;
      }
    }
  }
  else{
    return false;
  }

}

module.exports = isAnagram;
