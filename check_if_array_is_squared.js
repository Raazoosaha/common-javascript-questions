//Create a function which accept two array, the function should return true if element of first array correspond to the element of second array
//is square

function checkSquare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(checkSquare([1, 2, 6, 3], [1, 4, 36, 9]));
