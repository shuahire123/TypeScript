function greet(name:string,callback:(msg:string)=>void):void{
    const message:string=`hello ${name}`;
    callback(message);
}
function message(msg:string):void{
    console.log(msg);
}
greet("shubham",message);