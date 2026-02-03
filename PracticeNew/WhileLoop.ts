/* While loop
 */
//1. Write a program to calculate the sum of the first 10 natural numbers using a while loop.
/* let num:number=0;
let sumOfNumbers=0;
while( num<10)
{
    sumOfNumbers+=num;
    num++;
}
console.log(sumOfNumbers); */
//2. Write a program to calculate the factorial of a given number using a while loop.
/* let num: number = 5;
let originalNum: number = num;
let fact: number = 1;

while (num > 0) {
    fact *= num;
    num--;
}

console.log("Factorial of", originalNum, "is", fact);
 */
//3. Write a program to reverse a given number using a while loop.
/* let num:number=123456789;
let rev:number=0;
while(num>0)
{
    let lastDigit:number=num%10;
    rev=(rev*10)+lastDigit;
    num=Math.floor(num/10);

}
console.log("Revrse of number is : ",rev); */
//4. Write a program to check if a given number is a prime number using a while loop.
/* let num:number=7;
let count:number=0;
let i=1;
while(i<=num)
{
    if(num%i==0)
    {
        count++;
    }
    i++;
}
if(count==2)
{
    console.log(`${num} is prime number`);
}
else
{
    console.log(`${num} is not prime number`);
} */
//5. Write a program to find the largest digit in a given number using a while loop.
 /* let num:number=1278465124;
 let ar:number[]=[];
 while(num>0)
 {
    let rem:number=num%10;
    ar.push(rem);
    num=Math.floor(num/10);
 }
 let max:number=ar[0];
 let i=0;
 while(i<=ar.length-1)
 {
    if(max<ar[i])
    {
        max=ar[i];
    }
    i++;
 }
 console.log("max number from array is : ",max); */
//6. Write a program to check if a given number is a palindrome using a while loop.
/* let org:number=12231;
let num:number=org;
let rev:number=0;
while(num>0)
{
    let rem=num%10;
    rev=(rev*10)+rem;
    num=Math.floor(num/10);
}
if(org===rev)
{
    console.log("Number is pallindrome ",org);
}
else
{
    console.log("Number is not pallindrome ",org);
}

 */