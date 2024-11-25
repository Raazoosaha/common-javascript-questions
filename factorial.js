//factorial of a number;
function factorial(num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
}

console.log(factorial(5));
