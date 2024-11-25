//Check if string is palindrome or not
function checkPalindrome(str) {
  //using javascript reverse.join and split function;
  return str === str.split("").reverse().join("")
    ? "Palindromic string"
    : `Not a palindromic string`;
}

function isPalindrome(str) {
  let j = str.length - 1;
  for (const chars of str) {
    if (chars !== str[j]) {
      return "Not a palindrome";
    }
    j--;
  }
  return "Palindrome";
}

console.log(isPalindrome("aaabbaaaa"));
console.log(checkPalindrome("mommy"));
