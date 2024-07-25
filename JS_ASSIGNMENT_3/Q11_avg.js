/*
Q11)
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.

*/


let stud ={
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37},
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};


function avg(stud){
    let result = {};
let students= Object.keys(stud); // accessing individual students.... as array....
students.forEach((val)=>{
    let sub = stud[val];
    let subject=Object.values(sub);
    let sum = subject.reduce((res,cur)=> res+cur,0);
    let avg=sum/subject.length;
    result[val]={
        average: avg};
}
);
return result;
}

console.log(avg(stud));
//console.log(stud.student1.subject1);