let str1:string="shubham";
let str2:string="Gorakh";
let str3:string="ahire";
//string length
let lenOfString:number=str1.length;
console.log(lenOfString);//7
//ToUppercase & LowerCase
console.log(str1.toUpperCase());//SHUBHAM

console.log(str2.toLowerCase());//gorakh
//charAt amnd index of
console.log(str1.charAt(6));
console.log(str1.indexOf('b'));
console.log(str1.indexOf('k'));
console.log(str1.charAt(7));
//SubString
/*  0123456
    shubham
    1234567
    */
console.log(str1.substring(3,6));
//include
console.log(str1.includes("bha"));
//startsWith endsWith
console.log(str1.startsWith("shu"));
console.log(str2.endsWith("akh"));
console.log(str1.replace("shu","SHU"));
let fullName=str1.concat(" "+str2).concat(" "+str3);
console.log(fullName);
let fullNameAr:string[]=fullName.split(" ");
console.log(fullNameAr);
let NameWithSpaces=`     ${fullName}      `;
console.log(NameWithSpaces.trim());
console.log(NameWithSpaces.trimStart());
console.log(NameWithSpaces.trimEnd());
let multiLineString:string=`shubham
gorakh
ahire`;
console.log(multiLineString);