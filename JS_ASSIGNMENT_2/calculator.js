// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1,num2,operation)

{
switch (operation)
{
    case 'add' :
        return num1+num2;
    case 'sub' :
        return num1-num2;
    case  'mul' :
        return num1*num2;
    case 'div' :
        if (num2==0)
            console.log("Invalid");
        else
          return num1/num2;    
    default :
       return "Wrong Input";

}
}

console.log(calculate(4,3,'add'));
console.log(calculate(4,3,'sub'));
console.log(calculate(4,3,'mul'));
console.log(calculate(4,3,'div'));
