class modifiers
{
    public name:string;
    private age:number; 
    protected salary:number;
    constructor(name:string,age:number,salary:number)
    {
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    getAge():number
    {
        return this.age;
    }
    getSalary():number
    {
        return this.salary;
    }       
    getName():string
    {
        return this.name;
    }
}
class employee extends modifiers
{
    constructor(name:string,age:number,salary:number)
    {
        super(name,age,salary);
    }
     
}
let emp1=new employee("John",30,50000);
console.log(emp1.getName());
console.log(emp1.getAge());
console.log(emp1.getSalary());
emp1.name="Doe"; // Allowed, because name is public
// emp1.age=35; // Error, because age is private
 //emp1.salary=60000; // Error, because salary is protected
 console.log(emp1.getName());