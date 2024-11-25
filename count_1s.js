//count the number of cosecutive 1's in array

function countOnes(arr) {
  let counts = 0;
  let maxCount = 0;
  for (const element of arr) {
    if (element === 1) {
      counts += 1;
      if (counts > maxCount) {
        maxCount = counts;
      }
    } else {
      counts = 0;
    }
  }
  return maxCount;
}
console.log(countOnes([0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1]));
