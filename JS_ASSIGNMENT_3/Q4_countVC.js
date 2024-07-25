// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "hello i am the hashedbit intern";
let vcount = 0;
let ccount=0;
let space=0;
for (val of str)
{
    if(val == 'a' ||val == 'e' ||val == 'i' ||val == 'o' ||val == 'u' )
    {
      vcount++ ;
    }
    else if (val==" ")
    {
       space ++;   
    } 
    else {
        ccount++;
        
    }
         

}

console.log(`vowles count is:  ${vcount}`);
console.log(`consonants count is: ${ccount}`);