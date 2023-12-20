/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let array =['a','i','e','o','u'];
    let array1=['A','E','I','O','U'];
    let count =0;
    for (let i=0;i<str.length;i++)
    {
      for (let j=0;j<str.length;j++)
      {
        if (array[i]==str[j] || array1[i]==str[j])
        {
          count ++;
        }
      }

    }
    return count;
    
}

module.exports = countVowels;