/*Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

function sumPrimes(num) {
  return num;
}
sumPrimes(10);

The results should be like :

sumPrimes(10)  // should return a number.
sumPrimes(10) // should return 17.
sumPrimes(977)  // should return 73156.
// 
Algorithm:

Step1: Create a funtion sumPrime with the parameter num.
Step2: Initialize a variable sum to 0.
Step3: Use for loop with i initialized to num, checks if i is greater than or equal to 2 and decrement by every iteration.
Step4: create local boolean variable isPrime and set to true.
Step5: use another for loop with j, initialize value i-1, checks if j is greater than or equal to 2 and decrement by every iteration.
Step6: Now  with if condition check modulus of i by j is zero.
Step7: if true, set isPrime value to false and break the if statement.
Step8: Inside i for loop check isPrime value is true if true then add the i and sum store it in sum.
Step9: If false exit for loop and return sum
Step10: Use console.log to call the function with the value.
*/

function sumPrime(num)
{
    let sum=0;
    for (let i=num; i>=2; i--)
    { 
       let isPrime= true;
       for(let j=i-1;j>=2; j--)
       {
        if(i%j==0)
        {
            isPrime=false;
        break;
        }
        }

    if(isPrime=true)
    {   
        sum+= i;
    }
}
        return sum;
}
console.log(sumPrime(5));
console.log(sumPrime(16))