//FOR LOOP

/*for(let i=0;i<=names.length-1;i++)
{
    console.log(names[i]);
}*/
//for in loop
/* for(let name in names)
{
    console.log(names[name]);
} */
//for of loop
/* for(let name of names)
{
    console.log(name);
} */
let names:Array<string> =['shubham','akash','mamta','gorakh','malhar','neha','gauri','radha'];
/* //serach for element in array 
function search(element:string,names:Array<string>):boolean
{
    for(let value of names)
    {
        if(element===value)
        {
            return true;
        }
       
    }
     return false;
}
let isNamePresent=search("joyti",names);
console.log(isNamePresent); */
function NameInUpperCase(arr:string[]):string[]
{
    let upperCaseArr:string[]=[];
    for(let i in arr)
    {
        upperCaseArr[i]=arr[i].toUpperCase();
    }
    return upperCaseArr;

}
let ar=NameInUpperCase(names);
for(let name of ar)
{
    console.log(name);
}