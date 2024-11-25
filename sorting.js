//Descending order using bubble sort
function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//Revised Bubble Sort
function sortAccending(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
      if (!isSwapped) {
        break;
      }
    }
  }
  return arr;
}

console.log(sortDescending([3, 1, 2, 45, 12]));
console.log(sortAccending([3, 1, 2, 45, 12]));
