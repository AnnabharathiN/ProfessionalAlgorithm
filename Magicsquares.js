/*Magic Squares
A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:

<code>
8 1 6
3 5 7
4 9 2
</code>
Copy
The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.



Example inputs/outputs

<code>[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
</code><div>
</div>

Algorithm:

Step1: Create a funtion magicsquare with the parameter sqr.
Step2: Initialize four variables diag1,diag2,row,col to 0.
Step3: Use for loop with i initialized to zero, checks if i is less than three and increnent by every iteration.
Step4: Assign row and col value to 0, create another for loop to j with same condition previous one.
Step5: Inside j for loop , add the rows and columns value and save in it row and col.
Step6: Use logical OR operator to check row and col value is not equal to 15, if true return false.
Step7: Oustide j for loop but inside i for loop add diagonal values ans store in diag1 and diag2.
Step8: Return true if both value are equal to 15, Check using AND operator
Step9: Console.log to call the function with the values.


*/

function magicsquare(sqr)
{
 let diag1 =0;
 let diag2 =0;
 let row =0;
 let col =0;

 for(i=0;i<3;i++)
 {
    row =0;
    col=0;
    for(j=0;j<3;j++)
    {
        row +=sqr[i][j];
        col +=sqr[i][j];
    }
if (row!==15 || col!==15)
{
    return false;
}
  diag1 += sqr[i][i];
  diag2 += sqr[i][2-i];
 }
 return diag1 ===15 && diag2 ===15;
}
console.log(magicsquare([[2, 7, 6], [9, 5, 1], [4, 3, 8]]));
console.log(magicsquare([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
