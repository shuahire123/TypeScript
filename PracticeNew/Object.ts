//object creation using objet type
/* let EMP={
    name:"shubham",
    age:24,
    job:"Software Tester",
    EMPInfo:function():void
    {
        console.log(`employee name is ${this.name}, age is ${this.age} and job is ${this.job}`);
    }
};
//get the data from object
console.log(EMP.name); 
console.log(EMP.age);
console.log(EMP.job);
EMP.EMPInfo();  */
//inline object creation
/* let EMP1:{
    name:string,
    age:number,
    job:string,
    EMPInfo:()=>void;
}={
    name:"shubham",
    age:24,
    job:"Software Tester",
    EMPInfo:function():void{
        console.log(`employee name is ${this.name}, age is ${this.age} and job is ${this.job}`);
    }
}
EMP1.EMPInfo(); */
//onject creation using type alias 
type Hotel={
    HotelName:string,
    HotelLocation:string,
    HotelInfo:()=>void;
};
let Hotel1:Hotel={
    HotelName:"Taj Hotel",
    HotelLocation:"Mumbai",
    HotelInfo:function():void{  
        console.log(`Hotel name is ${this.HotelName} and location is ${this.HotelLocation}`);
    }
};
let Hotel2:Hotel={
    HotelName:"malhar",
    HotelLocation:"satana",
    HotelInfo:function():void{
        console.log(`Hotel name is ${this.HotelName} and location is ${this.HotelLocation}`);
    }
};
Hotel1.HotelInfo();
Hotel2.HotelInfo();
//object creation using class
class home{
    homeName:string;
    homeLocation:string;
    constructor(homeName:string,homeLocation:string){
        this.homeName=homeName;
        this.homeLocation=homeLocation;
    }
    homeInfo():void{
        console.log(`home name is ${this.homeName} and location is ${this.homeLocation}`);
    }   
}
let home1=new home("shubham home","satana");
home1.homeInfo();       
let home2=new home("akash home","nashik");
home2.homeInfo();