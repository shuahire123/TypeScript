const users: {id:number,profile:{name:string,city:string}}[]=[{id:101,profile:{name:'shybham',city:'satana'}},{id:102,profile:{name:'maljhar',city:'nashik'}}];
const names:string[]=users.map(value=>
{
    return value.profile.name;
}
);
console.log(names);
