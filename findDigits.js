// Q1. Find the number of digits
// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.

const Find_Digits = (N) => 
{
	  let result = 0;
  while (N > 0) {
    N = Math.floor(N / 10);
    result ++;
  }
  return result;
}
console.log(Find_Digits(1234));