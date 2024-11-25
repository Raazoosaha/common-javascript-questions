//print fibonacci series till given number
function printFiboSeries(num) {
  let first = 0;
  let second = 1;
  let arr = [first, second];
  while (second < num) {
    let next = first + second;
    if (next > num) {
      break;
    }
    arr.push(next);
    first = second;
    second = next;
  }
  return arr;
}
console.log(printFiboSeries(14));
//generate fibonacis series using for loop
function printFibonacciSeries(num) {
  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }
  return series;
}
console.log(printFibonacciSeries(5));

//Using recursion can be used for climbing staircase problems
function recursiveFibo(num) {
  if (num < 2) {
    return num;
  }
  return recursiveFibo(num - 1) + recursiveFibo(num - 2);
}
console.log(recursiveFibo(5));
