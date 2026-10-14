/*Search and Replace
Perform a search and replace the sentence using the arguments provided and return the new sentence.

The first argument is the sentence to perform the search and replace on.
The second argument is the word that you will be replacing (before).
The third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it.



For example, if you mean to replace the word "Book" with the word "dog", it should be replaced with "Dog"

function myReplace(str, before, after) {
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

Algorithm:
Step1: Create a funtion searchreplace with the parameters str, before, after.
Step2: Use if condition to check First letter of the before word is Uppercase or not, if true then change first letter of before word to Uppercase.
Step3: return the replaced value to str using .replace ().
Step4: console.log to call function with argument values.



*/
function searchreplace(str,before,after)
{
    if(before[0]===before[0].toUpperCase())
        {
            after = after[0].toUpperCase() + after.slice(1);
        }
    return str.replace(before,after)
}

console.log(searchreplace("One Day I am gonna make Onions cry", "Onions" , "tomato"));
console.log(searchreplace("If you can't be kind at least be Vague", "Vague", "Cry" ));