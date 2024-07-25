
/*
Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.

*/


function digsum(num)
{
while(num>=10)
{
let str =num.toString();
let arr = str.split("");
let digit = arr.map(Number);
let sum = digit.reduce((res,cur)=>res+cur);
num = sum;
}
return num;
}

console.log(digsum(456));
