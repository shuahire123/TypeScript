//forEach
let age:Array<number>=[10,15,51,52,23,1,0.6];
/* age.forEach((ageOfperson ,i)=>{
    console.log(i,ageOfperson);
}) */
//map 
/* let newAge=age.map( (value)=>
{
    return value+2;
});
console.log(newAge); */
//filter
/* let evenAge= age.filter((value)=>
{
    if(value%2===0)
    {
        return true;
    }
});
console.log(evenAge); */
/* let nums:number[]=[12, 17, 18, 21, 15, 30, 10];
let adultMembers=nums.filter(value=>value>18);
console.log(adultMembers); */
//reduce
/* let sum=age.reduce((sumOfAll,i)=>sumOfAll+i,0);
console.log(sum);
 */
//some
/* let res=age.some((value)=>value>52);
console.log(res); */
//every
let res=age.every((value)=>value>=0.6);
console.log(res);