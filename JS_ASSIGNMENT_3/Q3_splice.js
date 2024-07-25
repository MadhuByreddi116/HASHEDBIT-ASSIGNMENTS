/* Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/

let str = "INDIA";

let srt =str.split('');
srt.splice(3,0,'O','N','E','S');

let str1=srt.join('');
console.log(str1);
