//Merge two sorted array using spread and sort
function mergeSortedArray(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  return mergedArray;
}
console.log(mergeSortedArray([1, 2, 6, 8], [3, 4, 5, 7, 9]));
//Gready approach
function greedyMerge(arr1, arr2) {
  let finalArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }
  return finalArr;
}
console.log(greedyMerge([1, 2, 6, 8, 10, 12], [3, 4, 5, 7, 11]));
