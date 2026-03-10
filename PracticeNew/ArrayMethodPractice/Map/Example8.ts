const usersName:{FirstName:string,LastName:string}[]=[{FirstName:'shubham',LastName:'ahire'},{FirstName:'gorakh',LastName:'ahire'}];
const FullName:{fn:string,ln:string,fullName:string}[]=usersName.map(value=>
{
    return {fn:value.FirstName,ln:value.LastName,fullName:`${value.FirstName} ${value.LastName}`};
}
);
console.log(FullName);