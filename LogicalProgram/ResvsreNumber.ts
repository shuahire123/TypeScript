/*let num:number = 123456789;
function revNumber(input : number) : number{
    let rev:number=0;
    for(let i=input;i>0;i=Math.floor(i/10))
    {
        let rem=i%10;
        rev=(rev*10)+rem;
    }
    return rev;
}
console.log(revNumber(num));*/
let num: number=123456789;

function revNumber(input: number) : string{
    let strNum: string=String(input);
    let rev="";
    for(let i=strNum.length-1;i>0;i--)
    {
        rev=rev+strNum[i];
    }
    return rev;
}
console.log(revNumber(num));