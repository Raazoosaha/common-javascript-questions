//Maximum number of Array
//Approach 1 :
function maxNum(arr) {
  let max = arr[0];
  for (const element of arr) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}
console.log(maxNum([4, 23, 1, 3, 77, 2]));

function maxNumBySort(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 1];
}
function maxNumByMethod(arr) {
  return Math.max(...arr);
}
console.log(maxNumBySort([4, 23, 1, 3, 77, 2]));
console.log(maxNumByMethod([4, 23, 1, 3, 77, 2]));
