let sent: string="shubham gorakh ahire";
let  words: string[] = sent.split(" ");
words.forEach((word, index)=>
{   let rev :string ="";
    for(let i=word.length-1;i>=0;i--)
    {
        rev=rev+word.charAt(i);
    }
    words[index]=rev;
})
words.forEach((word,index) =>
{
    console.log(word);
})

