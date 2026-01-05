let str:string="shubham";
function reverseString(input: string ): string
{   let rev:string="";
    for(let i=input.length-1;i>=0;i--)
    {
        rev=rev+input.charAt(i);
    }
    return rev;
    }
console.log("revrse String ",reverseString(str));