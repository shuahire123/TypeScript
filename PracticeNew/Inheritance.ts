class car{
    name:string;
    model:string;
    yom:number;
    constructor(name:string,model:string,yom:number){
        this.name=name;
        this.model=model;
        this.yom=yom;
    }
    carStart():void{
        console.log("car is starting");
    }
     cardetails():void{
        console.log(`car name is ${this.name}, model is ${this.model} and year of manufacture is ${this.yom}`);
    }

}
class electricCar extends car{
    batteryCapacity:number;
    constructor(name:string,model:string,yom:number,batteryCapacity:number){
        super(name,model,yom);
        this.batteryCapacity=batteryCapacity;
    }
    electricCarDetails():void{
        console.log(`car name is ${this.name}, model is ${this.model} and year of manufacture is ${this.yom} and battery capacity is ${this.batteryCapacity}`);
    }
    carStart(): void {
        console.log("electric car is starting silently");
    }
}
class petrolCar extends car{
    fuelTankCapacity:number;
    constructor(name:string,model:string,yom:number,fuelTankCapacity:number){
        super(name,model,yom);
        this.fuelTankCapacity=fuelTankCapacity;
    }
    petrolCarDetails():void{
        console.log(`car name is ${this.name}, model is ${this.model} and year of manufacture is ${this.yom} and fuel tank capacity is ${this.fuelTankCapacity}`);
    }
    carStart(): void {
        console.log("petrol car is starting with noise");
    }

}

let tesla=new electricCar("Tesla","Model S",2022,100);
tesla.electricCarDetails();
tesla.carStart();
let honda=new petrolCar("Honda","Civic",2020,50);
honda.petrolCarDetails();
honda.carStart();