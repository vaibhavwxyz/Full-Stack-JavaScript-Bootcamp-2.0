// Question 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) console.log(i);
  }
  