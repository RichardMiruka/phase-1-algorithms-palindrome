function isPalindrome(str) {
    // Convert string to lowercase and remove non-letter characters
    str = str.toLowerCase().replace(/[^a-z]/g, '');
  
    // Check if the string is the same when reversed
    return str === str.split('').reverse().join('');  
}

/* 
  function isPalindrome(str):
    // Convert string to lowercase and remove non-letter characters
    str = str.toLowerCase().replace(/[^a-z]/g, '')

    // Set up variables to keep track of the start and end of the string
    let start = 0
    let end = str.length - 1

    // Check if the string is a palindrome
    while start < end:
        // If the characters at the start and end of the string don't match, it's not a palindrome
        if str[start] != str[end]:
            return false

        // Move the start and end indices closer together
        start = start + 1
        end = end - 1

    // If we've checked all the characters and they match, it's a palindrome
    return true
*/

/*
*This function first converts the input string to lowercase and removes any non-letter characters using a regular expression.
*Then it checks if the resulting string is the same when reversed by splitting it into an array of characters, reversing the order of the array, and joining the characters back into a string. 
*If the reversed string is the same as the original string, the function returns true, indicating that the input string is a palindrome. 
*Otherwise, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
