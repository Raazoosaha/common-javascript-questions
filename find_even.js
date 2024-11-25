//find all evens
function findEven(arr) {
  let filteredArr = [];
  for (const element of arr) {
    if (element % 2 === 0) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}
console.log(findEven([3, 1, 12, 45, 2, 34, 44]));
//Using filtered method
function findEvenNum(arr) {
  return arr.filter((ele) => ele % 2 === 0);
}

console.log(findEvenNum([3, 1, 12, 45, 2, 34, 44]));
