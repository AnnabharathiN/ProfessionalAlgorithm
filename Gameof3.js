/*Game of 3s
We want to play a "Game of 3s". Here's how you play it:

First, you pick a random number. Then, repeatedly do the following:

If the number is divisible by 3, divide it by 3.
If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
The game stops when you reach "1".

Challenge Description
The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

Input Description
The input is a single number: the number at which the game starts.

gameOfThree(100);

Output Description
The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

//OUTPUT:
100 -1
33 0
11 1
4 -1
1

Algorithm:

Step1: Create a funtion gameofthree with the parameter n.
Step2: Within the function , use while statement with a contindition n is not equal to 0.
Step3: create new variable step with 0 value.
Step4: Now use if ..else if condition to check modulus of 3 is 0 ,1 or -1 then assign step value accordingly as 0,-1 and 1.
Step5: use console.log to display the value of n and step.
Step6: Now add both n and step then divide by 3 and store it in n.
Step7: use console log to display 1 as last value.
Step8: Call the function with a value


*/

function gameofthree(n)
{
    while(n!==1)
    {
        let step=0;

    if(n%3===0)
    {
        step=0;
    }
    else if(n%3===1)
    {
        step=-1;
    }
    else 
    {
    step=1;
    }
    console.log(n + " " + step);
    n=(n+step)/3;
    }
  console.log(1)      ;
}
gameofthree(150);
gameofthree(100);