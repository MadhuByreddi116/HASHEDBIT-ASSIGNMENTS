/* 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.
*/


function findtax(salary)
{
switch (true)
{
    case (salary>1500000):
        return salary*0.3;
    case (salary>1000000):
        return salary*0.2;
    case (salary>500000):
        return salary*0.1;
    case (salary>0):
        return 0;
    default:
        return "Invalid";
}
}

console.log(findtax(540000));
