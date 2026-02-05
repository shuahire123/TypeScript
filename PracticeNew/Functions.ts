//Named Function
/* function sum( a:number, b:number)
{
    console.log(a+b);
}
sum(10,20); */
//function with return type
/* function sum(a:number,b:number):number{
    let res= a+b;
    return res;
}
let sumOfNum=sum(10,20);
console.log(typeof sumOfNum);
console.log(sumOfNum); */
//Arrow Function
/* let arrowFunction=()=>
{
    console.log("arraow function ");
}
arrowFunction(); */
//Anonymous Function
/*let multiplication=function(a:number,b:number):number
{
    return a*b;
}
console.log(multiplication(10,15));*/
/* let division = (a:number,b:number):number=>
{
    return a/b;
}
console.log(division(10,5)); */
//callback function
/* function showMessage(message:string)//callback function
{
    console.log(message);
}
function greet(name:string,callback:(message:string)=>void)
{
    console.log(name);
    callback("hello");
}
greet("malhar",showMessage); */
/* function add(num1:number,num2:number):number
{
    let res=num1+num2;
    return res;
}
function Multiplication(num1:number,num2:number,callback:(num1:number,num2:number)=>number)
{
    let multiRes=num1*num2;
    console.log("Multipliction result : ",multiRes);
    let add=callback(10,20);
    console.log("Addition result : ",add);
}
Multiplication(12,12,add); */
/* function fetchResult(
    data: number,
    callback: (num: number) => string
): void {
    if (data > 50) {
        let message = callback(data);
        console.log(message);
    } else {
        console.log("Data is too small");
    }
}

const cb = (num: number): string => {
    return `Success: ${num}`;
};

fetchResult(80, cb);
fetchResult(30, cb); */
//function overloading
/* function sum(num1:number,num2:number):number;
function sum(num1:number,num2:number, num3:number):number;
function sum(num1:number,num2:number,num3?:number):number
{
    if(num3!==undefined)
    {
        let add=num1+num2+num3;
        return add;
        //console.log("Addition of number is : ",add);
    }
    else
    {
        let add=num1+num2;
        return add;
        //console.log("Additon of number is: ",add);
    }
}
console.log(sum(1,2,3));
console.log(sum(1,2)); */
/* function formatInfo(name:string):string;
function formatInfo(name:string,age:number):string;
function formatInfo(name:string,age?:number):string{
    if(age!==undefined)
    {
        let info=`User Name is ${name} and age is ${age}`;
        return info;
    }
    else{
        let info =` User Name is ${name}`;
        return info;
    }
}
console.log(formatInfo("shubham"));
console.log(formatInfo("shubham",31)); */
//rest function
function sum(...nums:number[])
{   let total=0;
    for(let i=0;i<=nums.length-1;i++)
    {
        total+=nums[i];
    }
    console.log("total of number ",total);
}
sum(1,2,3,4,7,8,9);
sum(1,2,3);


