
function strRev(str)
{
   let newStr="";
    for(let i=0;i<str.length;i++)
    {
        newStr=str[i]+newStr;
    }
    return newStr;
}

let str = "Hello world";

console.log(strRev(str));