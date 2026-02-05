//push add element/elements to array 
let famName:Array<string>=['shubham','akash','mamta','gorakh','malhar','neha','gauri','radha'];
/* famName.push("Kastrurabai");//['shubham',     'akash','mamta',       'gorakh','malhar',      'neha','gauri',       'radha','Kastrurabai']
console.log(famName);
//pop remove last element 
famName.pop();
console.log(famName);
//shift reomve first element from array
famName.shift();
console.log(famName);
//unshift add one more element at first
famName.unshift("shubham","kalu");
console.log(famName);
//concat two arrays
let lastName:string[]=["ahire"];
let fullName=famName.concat(lastName);
console.log(fullName);
//slice get sub array from array
let fewArr=famName.slice(1,5);
console.log(fewArr); */
//Splice used to add or elements remove elements
famName.splice(1,2);//[ 'shubham', 'gorakh', 'malhar', 'neha', 'gauri', 'radha' ]
console.log(famName);
famName.splice(1,0,"ahire");
console.log(famName);
//index of element
let index=famName.indexOf("malhar");
console.log(index);//3
console.log(famName.includes("shubham"));//true
console.log(famName.includes("akash"));//false
//tostring 
let str=famName.toString();
console.log(str);
