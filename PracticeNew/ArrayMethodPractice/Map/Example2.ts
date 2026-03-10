const fruits:string[]=['mango','apple','banana'];
const fruitsUpperCase:string[]=fruits.map(fruit=>
{
    return fruit.toUpperCase();
}
);
console.log(fruitsUpperCase);