// For loop
//9. Print Multiples of 5 from 5 to 50
/* for(let i=5;i<=50;i+=5)
{
    console.log(i);
} */
// 10. Print Prime Numbers between 1 and 50

/* for(let i=1;i<=50;i++)
{let count:number=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log("Prime number ",i);
    }
} */
// 11. Print Sum of Even Numbers between 1 and 20
 /* let sum=0;
for(let i=1;i<=50;i++)
{  
    if(i%2==0)
    {
        sum+=i;
    }
    
}
console.log("sum of Even number between 1 to 50 ",sum) */
// 12. Print Sum of Odd Numbers between 1 and 20
/* let sum=0;
for(let i=1;i<=50;i++)
{  
    if(i%2!=0)
    {
        sum+=i;
    }
    
}
console.log("sum of odd number between 1 to 50 ",sum)  */
//13. Print Table of 7
/* for(let i=1;i<=10;i++)
{
    console.log(`7 X ${i} = ${7*i}`);
} */
//14. Print Numbers Divisible by 3 and 5 from 1 to 100
/* for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log(i);
    }
} */
//15. Count Number of Digits in a Number
/* let num:number=123456789;
let count=0;
for(let i=num;i>0;i=Math.floor(i/10))
{
    count++;
}
console.log("Number of digit in number ",num," = ",count); */
//16. Find Sum of Digits in a Number
/* let num:number=123456789;
let sum=0;
for(let i=num;i>0;i=Math.floor(i/10))
{   let rem=i%10;
    sum+=rem;
}
console.log(`Sum of Digits of Number ${num} = ${sum}`); */
//17. Print Multiples of 7 between 1 and 100
/* for(let i=1;i<=100;i++)
{
    if(i%7==0)
    {
        console.log(i);
    }
} */
//18. Calculate the sum of all even numbers from 1 to N. 
/* let num:number=500;
let sum:number=0;
for(let i=1;i<=num;i++)
{
    if(i%2==0)
    {
        sum+=i;
    }
}
console.log(`sum of even num between 1 to ${num} is ${sum}`); */