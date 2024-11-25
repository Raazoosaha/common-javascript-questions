//Check prime number
function checkPrimeNumber(num) {
  if (num === 1) {
    return "Neither a Prime Number";
  }

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return `${num} is not a Prime Number`;
    }
  }
  return `${num} is prime number`;
}

console.log(checkPrimeNumber(3));
console.log(checkPrimeNumber(27));
console.log(checkPrimeNumber(25));
console.log(checkPrimeNumber(7));
