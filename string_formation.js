//check if other string can be formed
function checkPossible(str1, str2) {
  let firstStr = [...str1].sort();
  let secondStr = [...str2].sort();
  let matched = 0;
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = i; j < secondStr.length; j++) {
      if (firstStr[i] === secondStr[j]) {
        matched++;
        break;
      }
    }
  }
  return matched;
}
console.log(checkPossible("ful", "mindfull"));
