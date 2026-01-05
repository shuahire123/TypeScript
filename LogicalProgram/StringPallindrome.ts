let str:string ="shubham";
let rev:string="";
for(let i=str.length-1;i>=0;i--)
{
    rev=rev+str.charAt(i);
}
if(str===rev)
{
    console.log("String is pallindrome : ",str);
}
else
{
     console.log("String is not pallindrome : ",str);
}