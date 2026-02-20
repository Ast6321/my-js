


 // learning string 
 /*
 
 so basicaly string is a data type in js 
 in this data type basicaly text is stored 
 we can write text in double quotes 
 example
 "hello rahul"
 we can write in single quotes also 
 example
 'hello rahul'


 we have template strings 
 template string means 
 the string written in backtics (``)
 EXAMPLE 
 `hello rahul`


 we can write quotes inside quotes
 example
 " hello rahul 'how are you' my brother"
 'hello rahul  "how are you" my brother'




 but there is  also a problem 

 ' this is rahul's laptop'
 ab string start hui or rahul k just baad khatam ho gai or aage ka print hi nhi hua 

 to yay sab problem na aaye 
 eske liyay js may hotaa h ek concept 
 escape characters 
 eska matlab hota h jo character print may problem dete h ham js ko btate h ki vo special character h 
 eske liya hamko backslash (\) uske baad vo character 
 esa likhne say js usko special character maan k print hone deta h

 jaise \'   , \" , ya phir maan lo backslash print karna h to \\

 esay hi or bhi kuch special kaam karne k liyay kuch or special character hote h jo backslash k baad lagte h 

\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
 */


// console.log("1) Hello\bWorld"); 
// console.log("2) Hello\fWorld"); 
// console.log("3) Hello\nWorld"); 
// console.log("4) Hello\rWorld"); 
// console.log("5) Hello\tWorld"); 
// console.log("6) Hello\vWorld");


/*
The 6 escape characters above were originally designed to control typewriters,
teletypes, and fax machines.
They do not make any sense in HTML.


kya aapko pta h line breaking k baare may 
mera matlab h ki string may line break kareke next line may likhna 
jaisa ki m abhi kar rha hu comments may 

mujhay to nhi pata tha ki ham string may multi lines nhi likh sakte 
ha bhai nhi likh sakte 
aap bhi karke dekho 

dekha  

iska ilaj bhi h 
backticks 
ha vahi (`   `)

backticks hamay allow karta h multi line text likhne k liyay

let str = `hello
my name is 
ankit 
singh`;

sahi h yay es6 version may kaafi kuch badhiya aaya h 

waise to strings k bahut saare methods hotay h 
lekin aap ko bas bta deta hu ek m method  
method to nhi isko inbuilt property khenge 
wo h .length 
es .length property say ham string ki length nikal sakte h 
lekin yay jo .length property h yay sapce ko bhi count karti h
{
 let str = "ankit";
 console.log(str.length); // 5
}

{
let str = "ankit singh";
console.log(str.length); // 11
}


aage or bhi methods h unko bhi padhenge 
dheere dheere paa lenge manjil ko 

ab ek amazing baat btata hu 
kya tumko pta h ki 
ham string ko object bhi bna sakte h
ha 
ham new keyword ki help say string ko object bhi bna sakte h
lekin string ko object bnane k baad koi khas use h hi nhi 


lekin string ka object ban pana bas yay important h 
kyuki agar string object nhi ban sakta to phir string apne methods or properties ka use nhi kar paayega
kyki string methods tabhi chl paate h 
kyki js intenaly string ko object bnata h 
es process ko ham autoboxing bolte h 

kaafi amazing lagta h jab aap har chij ka behind the scene check karte h 







*/



