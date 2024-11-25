//Find longest word in the sentence ?
const longestWord = (sentence) => {
  const wordArray = sentence.split(" ");
  let longest = wordArray[0];
  for (let i = 1; i < wordArray.length; i++) {
    if (longest.length < wordArray[i].length) {
      longest = wordArray[i];
    }
  }
  return longest;
};
console.log(longestWord("Hi, I am the Administrator"));
