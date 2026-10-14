/*Sum All Odd Fibonacci
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5, and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Algorithm:
Step1: Define a function fibonacci with n as a parameter.
Step2: In the function, define 3 variable a and b with the value 0 and 1, sum with 0.
Step3: Create for loop by initializing i to 0 , check i  less than n, increment i by each iteration.
Step4: Use if condition and  AND operator to check b value is less than or equal to n and also modulus of b by 2 is not equal to 0.
Step5: Update value of sum by adding it to b.
Step6: Then, update the values of a and b to the next numbers, return b after for loop.
Step5: use console.log to call function with values.

*/

function fibonacci(n)
{
    let a = 0 , b=1;
   let sum=0;
    for( let i=0 ;i < n;i++)
    {  
         if (b <= n && b % 2 !== 0) 
        {
        sum += b;
        }
        [a,b] = [b,a+b];
        

    }
    return b;
}
console.log(fibonacci(5));
console.log(fibonacci(15));