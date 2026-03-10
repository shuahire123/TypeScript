const numbers=[1,2,3,4,5,6,7];
const NumberObj=numbers.map(value=>
{
    return {number:value};
}
);
console.log(NumberObj);