
// -----------------------basic talks----------------------------------------------

/* ham sab ek bhasa ko padhna chahte h jiska naam h java script 
ab es bhasa say hamko kisi insaan say baat nhi karni h hamko es bhasa say ek computer say baat karni h 
ab computer h ek dam dumb machine esko bilkul bhi civic sense nhi h 
esko hamko batana padta h ki ham kya karna chahte h
esko hamko step by step batana padta h ki ham kya karna chahte h 
jaise ki agar ham ek cup chai banana chahte h to hamko esko step by step batana padega ki pehle pani garam karna h
or ab yay bhi batana padega ki pani liquid h esko kisi bartan yani ki aluminium ya steel k bartan me garam karna padega 
varna yay direct pani ko gas par rakh dega   itna dumb hota h computer
to inshort hamko sab kuch batana padta h 

to computer ko btane k liyay  hamay us say usi ki bhasa may baat karni padegi 
jaise ham bache ko bta rhe ho ki mum ka mtlb pani hota h 

jaise hamari grammer h yani ki likhne ka tarika h usi trah js ka bhi ek likhne ka tarika hota h 
js may ham kaafi trah ka data rakh sakte h */




//  ------------------------- data types ------------------------------------



/*js may hamare pass 8 tarike ka data types hotay h inme ham 8 trike ka data rakh sakte h 
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Object
7. Symbol
8. BigInt

number may koi b mathematical value aa gai jaise 1,2,3,4,5,6,7,8,9,10   number ka typeof number hota h

string may koi b text aa jata h jaise "hello world" , "ham sab js padhna chahte h"
jo bhi koi chij double ya single quote may ho wo string hota h     string ka typeof string hota h

boolean may sirf do value hoti h true ya false bollean ka typeof boolean hota h

null ka mtlb hota h ki koi value nhi h mtlb ki usme null likha h ya 0 h  null ka typeof object hota h (ye js ka ek bug hai)
undefined ka mtlb hota h ki koi value hi nhi di gayi h  undefined ka typeof undefined hota h  

object may ham multiple value rakh sakte h jaise ki ek person ka name, age, address etc
yay key value pair may hota h    object ka typeof object hota h

symbol ek unique identifier hota h jo ki mostly object may use hota h par mujhay iska jyda use nhi pata    symbol ka typeof symbol hota h



bigint ek aisa data type h jo ki bde number ko represent krta h jo ki normal number se bda hota h jaise 9007199254740991 
ham kisi number k last may n likh k use bigint bana skte h jaise 9007199254740991n   bigint ka typeof bigint hota h

es tarah ham js may data rakh skte h or computer ko step by step bta skte h ki ham kya krna chahte h*/

/* yhi par ham thoda sa number or string k kuch relation k baare may thoda janana chahenge 
ek chota sa concept samjhenge ki agr ham number may string ko add karte h to kya hota h 
string may number ko add karte h kya hota h 
or number ko string may kaise convert kar sakte h 
ha m jaanta hu ki aap kya soch rhe ho 
ki hamko number ko string may badlna hi kyo h 
to bhai aage hamko eski bahut jarurat padne wali h

to chlo samj lete h 

to bhai mujhay yay pta chla ki jab ham number may string ko add karte h to vo bhi string ban jata h
or chhe string may number ko add karo to wo bhi string hi return karta h  
{
let num=12;
console.log(num)  //12
let str="a";
num+=str
console.log(typeof num + " " + num)  //1212
}
{
let num=10;
console.log(num)  //12
let str="a";
str+=num
console.log(typeof str + " " + str)  //1212
}

*/

/*
ha to ab baat karte h ki ham number ko string may kaise badal sakte h 
to eske liyay koi jyada bhadak nhi leni h eske liyay string ka ek inbuilt method hota h toString() ham number k baad .toString() likh k usko string may badal skte h


{let num=12;
console.log(num)  //12
console.log(typeof num + " " + num)  //number 12
num=num.toString()
console.log(typeof num + " " + num)  //string 12
}

*/

 /*

to bhai ab baat karenge ham variables k baare may 
hamary pass 3 keywords hotay h  variables bnane k liyay 
1. var
2. let
3. const

var ek purana variable h jiska ki global scope hota h 
esko ham kitni baar bhi declare kar sakte h or kitni baar bhi initialize kar sakte h
ham var ko khi say bhi access kar sakte h 
eska ek nuksaan bhi h mtlb ki agar ek baar dubara declare ho gya to purani value chli jayegi or nayi value aa jayegi

ek or mehtavpuran baat m bta deta hu ki var function scope bhi hota h yani ki function k ander likhe jaane par vo bhi function k block k bahar accessable nhi hota h
{
function varTest(){
    var name = "rahul";
    console.log(name);
    var name = "ajay";
    console.log(name);// but redeclaration is allowd inside function
}
varTest();
console.log(name); //error name is not defined

} 


*/




// var name = "rahul";
//yha par hamne ek variable banya var say usme value daali rahul ab rahul double quote may likha h to eska mtlb h ki vo string type ka data h
// console.log(name); //rahul
// var name = "ajay";
// console.log(name); //ajay

/*abhi dubara  declare ho gya ki name barbar h ajay to ab ajay hi rahega rahul nhi rahega 
mtlb ki jha par ajay declare hua us say phle to rahul rahega or baad may khi bhi use hoga vha ajay*/


/*ab ham let k baare may padhenge 
let ek block scope variable h jiska ki ham kahi say access nhi kar sakte h 
esko ham sirf usi block may access kar sakte h jaha par esko declare kiya gaya h 
esko ham kitni baar bhi initialize kar sakte h par ek hi baar declare kar sakte h 
agar ham dubara declare karne ki koshish krenge to error aayega
lekin ham let may value ko dubara initilize kar sakte h 
kahne ka mtlb yay h ki declare to ek baar hi hog LEKIN value ko ham kitni baar bhi change kar sakte h*/

// let name = "rahul";
// console.log(name); //rahul
// let name= "ajay"; //yha par jaise hi mnay same naam ka variable declare karne ki kohish kri vaise hi error aa gya
//lekin m value dubara initilize kar sakta hu 
// name = "ajay";
// console.log(name); //ajay
//or block scope khne ka mtlb hi ki yay variable sirf ek hi block may acces hoga kisi ek or block may ham same naam ka variable bna sakte h 

// {
//     let name = "rahul";
//     {
//         let name = "ajay";
//         console.log(name); //ajay
//     }
//       console.log(name); //rahul
// }
//dekho manay let name or let name  do baar declare kiya lekin error nhi aaya 
//kyuki yay dono alag alag block may declare hua h ek yellow block h or ek pink block h 
/*to ham do alag alg block may same naam say let say variable declare kar sakte h 
lekin ek baat ka dhyaan rakhna hoga ki
ham jis vriable kpo jis block may declare kar rhe h hm us variable ko usi block may access kar lay 
jis block may declare kro uska kaam vhi par khatam kar do 

*/ 

/*ab ham const k baare may padhenge
const bhi let ki tarah hi block scope variable h 
lekin eski ek khasiyat or h 
jaise let ko ham dubara declare nhi kar sakte h waise hi ham const ko bhi dubara declare nhi kar sakte h 
lekin let ko ham initilize kar sakte h lekin const may to ham dubara initilize bhi nhi kar sakte h 
mtlb ki const ko ham sirf ek hi baar declare or initialize kar sakte h
or eski value ko ham change nhi kar sakte h 
eska mtlb yay h ki const ka value hamesha constant rahega yani ki same rahega 
*/
// const name = "rahul";
//ab maine const name ko declare kar diya ab m na to esko dubara declare kar sakta hu or na hi dubara initilize kar sakta hu
//mtlb na to declare kar sakta hu or na hi initilize kar sakta hu
//khne ka mtlb ek tarike say constant hi bn jaata h (lekin hota nhi h vo kyu baad may batauga)
// const name = "ajay"; //error
// name = "ajay"; //error




//--------------------------operators----------------------------------
/*

 
typeof operator
it is used to check data type of any value
 
JavaScript Operators
1. arithmetic op
2. assignment op
3. comparison op
4. logical op
5. ternary op
6. delete op
7. typeof op
8. bitwise op
9. instanceof op
10. string op
 
ar op
+,-, *, /, %(modulus)
 
assignment
=, +=, -=, *=, /=, %=,**=
 
a+=b; // a = a+b;
 
comparison op
== (equal to)
!=(not equal to)
>(greater than)
<(less than)
>=(greater than or equal to)
<=(less than or equal to)
===(Strict equal to)
2 === "2" false
 
!==(Strict not equal to)
5 !== "5"
 
unary op
postfix expr++ expr--
prefix ++expr --expr
 
++ :
--
 
num = 21;
num++;
print(num);
 
 
logical operator
Logical AND(&&):
 
1 1 = 1
1 0 = 0
0 1 = 0
 
Logical OR(||)
0 0 = 0
1 0 = 1
0 1 = 1
1 1 = 1
 
Logical Not(!)
 
 
ternary Op
 
condition ? value_if_true : value_if_false
 
delete op  mostly used to delete a property from an object 
yay kisi variable ko delete nhi krta h var name = "rahul"; delete name; console.log(name); //rahul
 
String or Concatenation op
+
 


*/

// conditional statements----------------------
  

/*
conditional statements are very important to create logic in our code 
it includes 
if else 
nested if else
else if 
switch case
ternary operator

if may ham ek condition check karte h agar vo true ho jati h to if k block kacode execute hota h agr condition false ho jati h to else k block ka code execute ho jata h 
or jyada detail may janana h to maine meri copy may likh rakha h padh lena badiya notes bna rakhe h...


switch case may 
ham kisi variable ki alag possible values k liaya alag case likhte h jab koi case mil jata h to vo case may likha code execute ho jata h 
dhayan dene vaali baat bas itni h ki  switch may ham break ka istemaal kray har case k baad break jarur lagaye 

sakht hidayat h break jarur lagana h 

*/
/*   if else or else if or switch case k uper maine do program bnaye h 
        aap un program ko dekhi ek if else par h dusra switch case par h




        mujhay lagta h ki if else may mujhay ab or kuch janane ki jarurat nhi h 
        esa nhi h ki m yha kuch likh nhi rha to m kuch miss kar rha hu ya skip kar rha hu
        baat yay h ki notbook may notes bna chuka hu 
        or baar likha nhi jaata 
        wasay m practice karta rhta hu 
        ek overview jo hota h vo to  maine lay liya h 


*/

/*
to ab hamaray coditionals bhi ho chuke h 
ab hamko loops karne h 

loops ko basicaly ham iteration bhi bol sakte h kyki loops may ham iteration hi karte h ek baar ek i ki value k liyay
code ko execute karti h uske baad lopdusra nuber leti h or uske liyay phir wo code execute karta h 
at the end jab tak condition false nhi ho jaati tab tak loop chalti jaati h 


loops may abhi ham  sikhenge --
forloop
while loop 
do while loop 

or bhi loops hoti h lekin ek baar ham enko samjhenge 

for loop 
eska syntax dekh lete h
eske syntax may 
for keyword chote letters may then brackets or block start 
for(){
}
round brackets k ander sabse phle ek variable with initilization then semicolon
then a condition then a increement or decrement 
for(let i = 0; i<=10; i++) {
}

ek variable i say initilize then conidtion jab tak i chota ya brabar h 10 say uske baad increment 


to yay ek for loop ka syntax h esko ham implement bhi karenge jab ham question karenge 

chlo ab ham while loop ko dekh lete h 


while loop ko generaly tab use kiya jata h jab hamko yay nhi pta ho ki loop ko kitni baar chalna h 
 eska syntax batata hu 
 while loop k syntax may 
 declaration  or intilization loop k bahar hoti h 
 then while loop  may condition means   while(condition){}
then uske code block k ander ham apne code k baad increment wala part likhte h 


let i =0;
while(i<=10){
---code---
i++
}

yay ek general sa syntax h 



eska hi ek or varient hota h 
jiska naam hota h do while loop 
esmay kya hota h ki 
loop ek baar to chalti h 
agar condition true ho ya na ho 
condition baad may check hogi ek baar to code execute ho hi jaayega 



eska syntax bta deta hu 

let i = 0;
do {
----code----
i++
}

while(i<=10)




to yay teen loops h enka estemaal karke ham thode intersting question bhi karenge 

ha waise loops or bhi hoti h 
jaise for in , for of,for each   or bhi bahut kuch lekin enko ham baad may karenge 


loops say related do topics or hotay h 
wo bhi bta deta hu 
ek hota h break keyword 
or dusra h continue keyword 
teesra h labeling of loops 
  

break keyword wahi h jo switch case may tha
yay js engine ko jha bhi dikh jaayega 
js engine usi vakt loop say bahr nikal jata h 
js engine break keyword dikhne k baad kuch nhi sochta vo loop ko band hi kar deta h 

aap sochoge ki 
eski jarurat kha padegi 

ek baat bta deta hu jindgi bahut ajeeb hoti h kab kiski jarurat pad jaaye kuch nhi kh sakte 
kai baar jindgi aapko esay mod par la k chhod degi ki ap ko us miti ki jarurat bhi padegi jisko aap apne pairo say kuchal k chalte ho 

to esa nhi h ki break sirf switch may hi lagega 

maan lijiyay ki ham kisi array may ko number find kar rhe h 
or vo hamay 2 number par mil jaye 
lekin loop ka structure hamne esa banaya h ki vo pure array ko search kray last tak kyuki hamay nhi pata ki vo number kha h 
to esay case may ham ek conditon likh sakte h ki if number found then break loop


to es trah hamari loop ko pura aray  search nhi karna padega 



esay case may ham break lagate h 


ab continue 
jab js engine ko continue milta h tab vo jump to karta h lekin loop ko khatam nhi karta h bs us iteration k liyay code execute nhi karta next number 
k liyay loop ko continue kar deta h 
matlab to actualy tabhi pta chelga jab eska use karenge 

tension na lo karenge eska bhi use karnge 



esi folder may har ek question ko karunga alag file bn kar k 
usme bahut saare loops k question tumko mil jayenge


yay questions karne k baad m string topic ko cover karunga 

 ..........................to be continued.......................
   



 maine string k liyay alag say file bna di h 
 string.js karke vhi par padhenge string
*/