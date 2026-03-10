const nameAr=['shubham','gorakh','ahire'];
const newName=nameAr.map((value,index)=>
{
    return {id:index,Name:value};
}
);
console.log(typeof nameAr);
console.log(typeof newName);
console.log(newName);
