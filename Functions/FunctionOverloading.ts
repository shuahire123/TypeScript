function add(a:number,b:number):void;
function add(a:number,b:number,c:number):void;
function add(a:number,b:number,c?:number):void{
    if(c!=undefined)
    {
        let sum:number=a+b+c;
        console.log(sum);
    }
    else
    {
        let sum:number=a+b;
        console.log(sum);
    }
}
add(11,12);
add(10,20,30);