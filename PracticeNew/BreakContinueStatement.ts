/* Continue*/
//19. Write a program to print the odd numbers from 1 to 20 using a for loop. Use the continue statement to skip even numbers.
/* 
for(let i=1;i<=20;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
    else
    {
        continue;
    }
} */
//20. Write a program to print numbers from 1 to 30, but skip numbers that are multiples of 5. Use the continue statement within a while loop.
/* let i: number = 1;

while (i <= 30) {
  if (i % 5 === 0) {
    i++;          // increment before continue
    continue;     // skip multiples of 5
  }

  console.log(i);
  i++;
} */


/* Break
 */
//21. Write a program to find and print the first even number between 1 and 10 using a for loop. Use the break statement to exit the loop as soon as you find the first even number.
for(let i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(i);
        break;
    }
}
//22. Write a program to print numbers from 1 to 30. Stop printing and exit the loop when youfind a number greater than 15. Use the break statement within a for loop. 
/* for(let i=1;i<=30;i++)
{
    if(i===15)
    {
        break;
    }
    console.log(i);
} */