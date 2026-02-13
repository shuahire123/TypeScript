class nature
{
    natureName:string;
    readonly natureWather:string;
    constructor(natureName:string, natureWather:string)
    {
        this.natureName=natureName;
        this.natureWather=natureWather;
    }
    natureInfo():string{
        return `nature name is ${this.natureName} and wather is ${this.natureWather}`;
    };
}
let nature1:nature= new nature("river","fresh water");
console.log(nature1.natureInfo());
//nature1.natureWather="salt water"; //error because natureWather is readonly property 
nature1.natureName="sea"; //error because natureWather is readonly property 
console.log(nature1.natureInfo());
