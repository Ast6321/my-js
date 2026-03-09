/*

lets start the function topic

first we discuss the what is function 
function ek reusable code block hota h jiska koi naam hota h or 
ham usko uske naam say call karwake khi bhi kabhi bhi kitni baar bhi use kar sakte h 

function ka main purpose hi hota h code ko reusable bnana
jaise maan lo ki hamko 
ek kaam apne code may hamko baar karna h jiase ki navbar baar baar open close karna 
ab ek user kitni baar bhi navbar ko open close karta rh sakta h 
maan lo 100 baar karta h to 
kya ham navbar k open close honay ka code 100 baar copy paste karenge 

nhi ham ek function bna denge 
or usko run karwa lenge 100 baar jab bhi click hoga 
matlab ek click event par function call hota rahega 
phir ab user chahe 100 baar kray ya 1000 baar call kray hamko baar baar code likhne ki jarurat nhi h 

to ab jab aapne function ka mahtav jaan liya h to 
ab m aapko function ka declartion kaise  karte h vo bta deta hu 

function ko declare karne k char step h 
phle step 
function keyword 
dusra step 
function ka naam (jo uske kaam ko depict kare) or uske sath paranthesis 
teesra step curly brackets yaani ki code block 

or chauthe step may ham 
function ko call karte h uske naam k sath paranthesis lagakar 

to chaliyay ab ek function bnate h or call karwate h 

{
    function greet(){
        console.log("hello rahul")
    }

    greet();

[Running] node "d:\mygithub\my-js\learningpart\function.js"
hello rahul

[Done] exited with code=0 in 0.139 seconds


abhi hamne ek function bnaya 
function keyword likha 
then uska naam likha greet() then code block start kiya
or ander ek kaam likha print karne ka hello rahul 
or uske baad function k block say bahar aakar hamne usko call kar liya 
uske naam k sath paranthesis lagakar 

or aapne dekha hamara function call hua or hamko output mili hello rahul 




to main step or procedure yay hi h 
or agar kuch or nya hoga to aapko pta chalta rahega time to time 
thik h to aap practice karte rhna ..






// ab hamara next topic h function parameters 

to function parameters ko ham basicaly function k liyay input bol sakte h 
parameters function scoped variable ki trah hote h 

matlab yay variables kisi var let ya const say declare nhi hotay h 
yay function scoped hotay h 
yay bas funtion k ander hi use karay ja sakte h 

thik h bhai hamne samaj liya ki function parameters 
input ki trah hotay h 
yay function k prsonal variables hotay h 

thik h ab in varaibles may value to chaiyay 
vo kaise deni h 
to bhai en parameters ki value ko ham arguments bolte h 
yay arguments ham call karte wakt dete h 
or phir yay arguments yaani ki values maping or position binding k through 
position k hisab say parameter may assign ho jaati h 
agar kam arguments hoti h to parmeters undefined ho jaate h 
agar jyada arguments ho to ignore ho jaati h 

thik h ab ek baar try kar k dekhte h 

{
    function vikas(a){
        console.log(a);
    }
    vikas("vikas");
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
vikas

[Done] exited with code=0 in 0.149 seconds

yha es example may maine
ek function banaya h 
es function may maine ek parameters pass kiya h 
parameters k naam ka concept same variable declare karne jaisa hi h 
bas reserved keyword chodke  kuch bhi naam do 
koi var let const say no declaration 
sirf function k ander kaam karenge 

thik h jaldi say kuch example or kar lete h 

{
    function vikas(a,b,c,d){
        console.log(a,b,c,d);
    }
    vikas(1,"two", typeof true,null);
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
1 two boolean null

[Done] exited with code=0 in 0.268 seconds


es example may hamne 
alag alag type ki values ko daal k dekha 
jisne enka varaible nature ko prove kar diya 


// ab ek example kam arguments k saaath 

{
    function vikas(a,b,c,d){
        console.log(a,b,c,d);
    }
    vikas(1,"two", typeof true);
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
1 two boolean undefined

[Done] exited with code=0 in 0.122 seconds

hamko undefined mila kyki d may kuch assign hi nhi hua 



// ab ek example jyada arguments ka saath 

{
    function vikas(a,b,c,d){
        console.log(a,b,c,d);
    }
    vikas(1,"two", typeof true,null , undefined );
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
1 two boolean null

[Done] exited with code=0 in 0.117 seconds

yha par extra arguments ignore ho gai



to yay tha function parameters ka ek brief sa intro 
i hope aapko samaj aaya hoga 






ab baat karenge ham return statement ki 

to return ek reserved keyword hota h 
function may eska use function k result ko bahar bhejne may madad karta h 
matlab function ki resultant value ko ham bhar kisi variable may assign kar sakte h 
then usko use kar sakte h 

{
    function vikas(a){
        return a;

    }
    let ankit = vikas(5);
    console.log(ankit);

}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
5

[Done] exited with code=0 in 0.124 seconds

dekhiyay ab es example may hamne 
function ki value ko function ka bahar acces kar liya 

ham function ki values ko access karne k sath sath usko apne mutabik use bhi kar sakte h 
eske liya ek example dekhiyay 


{
    function vikas(a,b){
        return a+b;
    }
   let value = vikas(2,3);
  let updatedvalue = value*2;
  console.log(value);
  console.log(updatedvalue);
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
5
10

[Done] exited with code=0 in 0.125 seconds

dekhiyay es example may hamne kis tarike say 
na keval value ko access kiya balki usko use bho kiya 
usko double kiya 2 say multiply karke 

to aasha karta hu aaap samjhe hoge ki return function ki value ko bahr bjene may madad karta h 


return k baare may ek baat or bta deta hu 
jha bhi function ko return keyword dikhai deta h 
vhi say function bnd ho jata h 
matlab ek baar return keyword dikha uske baad k kisi bhi code ko yay execute nhi karta infact unpar traverse hi nhi karta 

eska bhi ek example dekh lete h 


{
    function vikas(a,b){
        console.log("hello");
        return a+b;
        console.log("world");
    }
   let value = vikas(2,3);
  let updatedvalue = value*2;
  console.log(value);
  console.log(updatedvalue);
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
hello
5
10

[Done] exited with code=0 in 0.212 seconds


dekhiyay es example may 
hamne ek console value ko return k phle likha or ek console value ko return k baad may likha
or jab hamne output dekhi to hame pta chala ki
return k phle ka console print hua lekin return k baad ka console jo function k ander h vo print nhi hua 

matlab it is proven that 
return k baad ka code execute  nhi hota h 

ha ek baat or m bta deta hu 
agar ham kuch return nhi kar rhe h to function by default undefined return karta h 
hamre jo function hote h vo bina return k bhi kaam karte h lekin phir ham bas us result ka use nhi kar sakte h 
agr hamko result ka use karna h to hamko us result ko return karana hoga 
that's it 


thik h ab or kuch return k baare may btane layak nhi h 
ha kh sakte ho mujhko etna hi pta h ...





to thik h bhai ab baat karte h ham arrow function ki 

to bhai arrow function bhi ek normal function jaisa hi hota h 
bas difference yay h ki eska syntax normal function say short hota h 
arrow function ko ham  function expression bhi kh sakte h 
kyki ham arrow function ko kisi variable ko as a expression bhi assign kar sakte h 
to es say ek or concept bhi saamne aata h 
agar vo direct variable may assign hota h or agar single expression may h to implicit return hota h 
khne ka matlab esmay hamko return karne ki jarurat nhi padti h 


return karne k concept bahut simple h 
agr block start ho gya to result use karne k liyay hamko return karwana hi hoga 

arrow function may agar ek hi parameter h to ham paranthesis ko omit kar sakte h 
lekin agar jyada parameter h tp hamko paranthesis lagani padegi 

arrow function ko callback function bnane k liyay generaly use kiya jata h 
callback function vo function hotay h jo kisi or function ko as argument diyay jate h 
call back k baare may ham or aage padhenge 

to abhi ham ek baar arrow function ko likh k dekh lete h 
phle ek variable may arrow function ko assign kar k dekhte h 

variable ham const keyword say bnana prefer karte h kyuki 
ham ek variable ko ek hi function assign karte h 
or const keyword ka aapko pta h ki yay reassign  nhi hone deta h 
bas esliyay ham const ko prefer karte h 
 esa nhi h ki const compulsry h 
 aap let var  const kisi say bhi  variable bnao aapki marij h 
 lekin const ko prefer kiya jata  h 

{

const ftn = (a)=> a*a;
console.log(ftn(2));

}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
4

[Done] exited with code=0 in 0.24 seconds

aapne dekha es example may maine arrow function ko ek const variable may assign 
kar diya or function k bahar na sirf usko call kiya balki usko use bhi kiya matlab print bhi kiya 


maine kha tha callback function bnanae may use hota h 
to ha bhai galat nhi kha 
callback jaisa ki aapko pta hi h k 
jo function kisi dusre method ya function ko as arguments diyay jaate h vo callback khlaate h 

callback k kuch udhran ham phle hi kar chuke h 
jiase map method filter method forEach jaise methods may ham function ko 
as arguments pass karte h jis say vay callback khlaate h 

{

    let arr = [1,2,3,4,5];

    let result = arr.map(x => x+1);

    console.log(result);
}

[Running] node "d:\mygithub\my-js\learningpart\function.js"
[ 2, 3, 4, 5, 6 ]

[Done] exited with code=0 in 0.215 seconds



es example may hamne arrow function ko map method may as argument pass kar diya 
or fir map method nay usko array k har element k liyay call kiya or at the end hamko
same length ka ek new array mila 


i hope ki arrow function aapko samj aaya hoga 
baaki aap ko or samjna h to practice kar lena 


*/




