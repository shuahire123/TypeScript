/*let char:string="a";
if(char>="A"&&char<="Z")
{
    console.log("Character is upper case ",char);
}
else{
    console.log("invalid ",char);
}*/
//check number is multiple of 10
/* let num:number=175;
if(num%10==0)
{
    console.log("Number is multiplay of 10 : ",num);
}
else
{
    console.log("invaliid ");
} */
//check teenager
/* let age:number=12;
if(age>=13&&age<=19)
{
    console.log("persone is teenager : ",age);
}
else
{
    console.log("person is not teenager ")
} */
//compare larger number
/* let num1:number=10, num2:number=12;
let res:string=num1>num2?`Num1 is greater ${num1}`:`Num2 is greater ${num2}`;
console.log(res); */
//check number is positive negative or zero
/* let num:number=-0;
if(num<0)
{
    console.log("number is neagtive ");
}
else if(num>0)
{
    console.log("number is positive");
}
else
{
    console.log("number is Zero");
} */
// check persone is elgible for discount
/* let age:number=40;
if(age>=60)
{
    console.log("person is eligble for discount ");
}
else{
    console.log("person is not eligble for discount ");
} */
//check if number postive and even
/* let num:number=10;
if(num>0)
{
    if(num%2==0)
    {
        console.log("Number is postive and Even ",num);
    }
} */
//check charcter is uppercase Wovel
/* let char:string="F";
if(char>="A"&&char<="Z")
{
    if(char=="A"||char=="E"||char=="O"||char=="I"||char=="U")
    {
        console.log("charcter is Upper case vowel ",char);
    }
    else
    {
        console.log("charcter is  Upper case not vowel ",char);
    }
}
else
{
    console.log("charcter is not Upper case",char);
} */
//check if number is multiplay of 5 and 10
/* let num:number=20;
if(num%10==0&&num%5==0)
{
    console.log("Number is multplay of 5 and 10 ",num);
} */
//check if charcter is vowel or consolnent
let char:string="E";
if(char>="a"&&char<="z")
{
    
    if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u")
    {
        console.log("charcter is lower case vowel ",char);
    }
    else
    {
        console.log("charcter is  Upper case consonent ",char);
    }
}
else if(char>="A"&&char<="Z")
{
    
    if(char=="A"||char=="E"||char=="O"||char=="I"||char=="U")
    {
        console.log("charcter is Upper case vowel ",char);
    }
    else
    {
        console.log("charcter is  Upper case consonent ",char);
    }
}