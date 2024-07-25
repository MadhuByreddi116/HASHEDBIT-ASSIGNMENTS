/* 
Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function
*/

function correctFun(sentence,wrong,correct)
{
    let str = sentence.replace(new RegExp(wrong,'gi'),correct);
    // by using the regex constructor with g it will replaces all the occurences of wrong words...
    return str;
}

let string = "I love Codng in javascript,codng is easy or codng is difficult";

console.log(correctFun(string,"codng","coding"));
