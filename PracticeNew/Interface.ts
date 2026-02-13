interface car{
    carName:string;
    carModel:number;
    carColor:string;
    carPrice:number;
    getcarDetails():string;
}
let myCar:car={
    carName:"BMW",
    carColor:"black",
    carModel:2020,
    carPrice:50000,
    getcarDetails():string{
        return `Car Name: ${this.carName}, Car Color: ${this.carColor}, Car Model: ${this.carModel}, Car Price: ${this.carPrice}`;
    }
}
console.log(myCar.getcarDetails());
interface person{
    name:string;
    age:number;
    city:string;
    getpersonDetails():string;
}
interface employee extends person,car
{
    employeeId:number;
    getemployeeDetails():string;
}
let emp:employee={
    name:"John Doe",
    age:30, 
    city:"New York",
    carName:"Audi",
    carColor:"white",       
    carModel:2021,
    carPrice:60000,
    employeeId:12345,
    getpersonDetails():string{  
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    },
    getemployeeDetails():string{
        return `Employee ID: ${this.employeeId}, ${this.getpersonDetails()}, Car Details: ${this.getcarDetails()}`;
    },
    getcarDetails():string{
        return `Car Name: ${this.carName}, Car Color: ${this.carColor}, Car Model: ${this.carModel}, Car Price: ${this.carPrice}`;
    }
}
console.log(emp.getemployeeDetails());


    