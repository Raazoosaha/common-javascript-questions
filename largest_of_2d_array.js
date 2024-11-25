//find largest num from 2d array
const inputArray = [
  [3, 5, 11],
  [56, 23, 1],
  [90, 12, 0],
];
//Approach 1 Using inbuilt method
function largestNum(arr) {
  const flattendArr = arr.flat();
  return Math.max(...flattendArr);
}

console.log(largestNum(inputArray));

//Second Approach Tradationaly
function largestElement(arr) {
  const newArr = [];
  let largest = 0;
  for (const element of arr) {
    if (typeof element === "object") {
      for (const item of element) {
        newArr.push(item);
      }
    } else {
      newArr.push(element);
    }
  }
  for (let nums of newArr) {
    if (nums > largest) {
      largest = nums;
    }
  }
  return largest;
}
console.log(largestElement(inputArray));

//third approach
function largestElemenof2d(arr) {
  let largest = Number.MIN_VALUE;
  for (const element of arr) {
    for (const nums of element) {
      if (nums > largest) {
        largest = nums;
      }
    }
  }
  return largest;
}
console.log(largestElemenof2d(inputArray));
