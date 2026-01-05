let str:string ="shubham";
for(let i=0;i<=str.length-1;i++)
{
    for(let k=i+1;k<=str.length-1;k++)
    {
        if(str.charAt(i)==str.charAt(k))
        {
            console.log("Repeted charcter : ",str.charAt(i));
        }
    }
}