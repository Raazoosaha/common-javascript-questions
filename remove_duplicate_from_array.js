//remove the duplicate value from the array
function duplicateRemover(arr) {
  //using Javascript Set method
  return [...new Set(arr)];
}

function removeDuplicate(arr) {
  const hashMap = new Map();
  for (const element of arr) {
    if (!hashMap.has(element)) {
      hashMap.set(element, element);
    }
  }
  return [...hashMap.values()];
}
console.log(removeDuplicate([1, 3, 4, 4, 5]));
console.log(duplicateRemover([1, 3, 4, 4, 5]));
