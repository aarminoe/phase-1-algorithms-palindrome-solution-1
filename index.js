function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('')
  let reversedArray = wordArray.reverse()
  let reversedWord = reversedArray.join('')
  return reversedWord === word
}

/* 
  Add your pseudocode here
  -make a variable using the split function on word
*/

/*
  Add written explanation of your solution here
  create an array
  reverse that array
  create a string of that array using join
  return reversed string
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
