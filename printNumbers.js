// Q8. Print Numbers
// You are given an integer 
// N
// , and your task is to print all the integers starting from 
// 1
//  till 
// N
//  (
// N
//  inclusive).

// Note: You have to complete printNumbers function. No need to take any input.

const printNumbers = (N) => {
    let i = 0 ;
    while(i < N){
        i++
        console.log(i);
    }    
};
console.log(printNumbers(4));