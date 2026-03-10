const product=[{mobile:'samsung',price:50000},{mobile:'motorola',price:20000},{mobile:'apple',price:130000}];
const NewPrice=product.map(value=>
{
    return {Mobile:value.mobile, price:value.price+10000};
}
);
console.log(NewPrice);