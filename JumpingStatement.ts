/*//break
for(let i:number=0;i<=10;i++)
{
    if(i==7)
    {
        break;
    }
    else{
        console.log(i);
    }
}
console.log("**************************")
let i:number=1;
while(i<=10)
{
    if(i==7)
    {   i++;
        continue;
    }
    else
    {
        console.log(i);
    }
    i++;
}*/
for(let i:number=1;i<=10;i++)
{
    if(i%2==0)
    {
        continue;
    }
    console.log(i);
    
}