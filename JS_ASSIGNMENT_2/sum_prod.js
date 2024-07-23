/* 4. Write a function to perform this. You are given two numbers n1 and n2. 
You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
*/

function sum_prod(n1,n2)
{
let sum =0;
let s1 =n1.toString(); // conversion of num to string for digits extraction...
let s2 =n2.toString();

let maxlen = Math.max(s1.length,s2.length);
for (let i =0;i<maxlen;i++)
{
    let d1 = parseInt(s1[s1.length-1-i] || 0);  // extracting each digit for multiplication...
    let d2 = parseInt(s2[s2.length-1-i] || 0);
    sum+=d1*d2;
}
return sum;

}

console.log(sum_prod(6,34));
console.log(sum_prod(6345,3634));