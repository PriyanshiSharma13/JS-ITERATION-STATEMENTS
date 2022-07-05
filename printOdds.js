// Q5. Print the Odds.
// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

// Note: You have to complete Print_Odd. No need to take any input.

const Print_Odd = (N) => 
{
	 console.log(2);
	 let num = 3;
	 while(num <= N)
	 {
	   console.log(num);
	   num = num + 2;
	 }
};
console.log(Print_Odd(10));