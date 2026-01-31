function empDesignation(name:string,desg?:string):void{
if(desg)
{
    console.log("Employee Name : ",name," Designation : ",desg);
}
else
{
    console.log("Employee Name : ",name);
}
}
empDesignation("shubham","Tester");