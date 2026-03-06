/*        

---------------------------------------------Array--------------------------------------------------------

ha to aaj say ham array ko start kr rhe h 
array may sab chije nhi padhenge 
bas utna padhenge jitna abhi k liyay important h 



ha to bhai kya hota h array 
array multiple primitve values ko store karta h ek hi memory refernce par 
or uske baad ham numberd indexing k through har ek value ko access kar sakte h 
array mutable hota h 
matlab usko modify kar sakte h 
par kyuki ham array ko generaly const say declare karte h to usko ham complete initilize ya dubara decalre nhi kar sakte h 
jo ki coding may kaafi achi chij h 
jab ham modify kar rhe hote h to to ham uske refernce ko nhi balki us refernce par un values ko modify kar rhe hotay h 

eske alwa ham 
ha 
array may aap multiple type ki values ko store karwa sakte ho
array may index 0 say start karte h 
index ko access karne k liyay ham generaly square brackets ka use karte h (array[index])
thik h eske alwa mujhay nhi lagta kuch batana baaki h 


ek array bnate h or index k through access kar k dekhte h 
ha bhai bna k dekhenge 
ham yha theory k liyay nhi h 



{

// const arr = [1,"ankit",true,123456789n];

// cheking values by index

// console.log(arr[0]); // 1
// console.log(arr[1]); // ankit
// console.log(arr[2]); // true
// console.log(arr[3]); // 123456789n

// checking the datatypes of values 

// console.log(typeof arr[0]); // number
// console.log(typeof arr[1]); // string
// console.log(typeof arr[2]); // boolean
// console.log(typeof arr[3]); // bigint

 
// assigning new values to array (modification) by index

// arr[0] = 10;
// arr[2] = false;

// console.log(arr);

[Running] node "d:\mygithub\my-js\learningpart\array.js"
[ 10, 'ankit', false, 123456789n ]

[Done] exited with code=0 in 0.129 seconds


}

*/

/*


-------------------------------------------array looping---------------------------------------------


array jab ham padhte h tab ham basicaly looping hi perform karte h arrays par 
kyki abhi to samjhanay k liyay ham chote chote arrayas examples lete h lekin arrays ka size dynamic hota h 
esliyay un par same kaam perform karne k liyay ham looping ka istemaal karte h

looping in the sense array par loop lagana 
jo ki loop k har ek index k liyya chalti h 
esamy ham ek basic loop
for loop
for each method 
or map method 

for loop k baare may to apko pata hi h 
mujhay nhi lagta uske baare may hame kuch or bhi janne ki aavshyakta h 
fir bhi thoda batata hu 

for loop k baare may 
for loop may ham e variable ko initilize karte h kisi value say 
array may ham usko 0 say initilize karenge kyuki index 0 say start hota h 
uske baad condition lagate h 
hamari condition may ham loop ko last index tak chalayenge 
to uske liya ham loop ko array.length say less index tak chalaenge
then of obvious 
increament i++
and then blocks start

//{
//     const arr = [1,2,3,4,5,6,7,8,9]
//      let result =0;
//     for(let i =0; i<arr.length;i++){
//        result += arr[i];
//     }
//     console.log(result);

/*
[Running] node "d:\mygithub\my-js\learningpart\array.js"
45

[Done] exited with code=0 in 0.13 seconds


/*


// }


bas esi trah say ham array ki values ko iterate  kar k use karenge 


ab baat karenge forEach method k baare may 
yay array ka method basicaly array par iteration karne may madad karta h 
esko array par iterate karane k liyay
array k baad .lga k likhte h es method may ham basicaly ek function likhte h yay function  ek loop ki trah say 
har element par iterate karta h
har iteration par hamre pass us array ki teen chije hoti h
ek to element ek index or us array ka reference 
yay teeno us function k parameter hote h 
unka likhne ka order bhi vhi hota h 
element index array
kisi ko skip nhi kar sakte 
aage piche nhi ho sakte 
bhai ab or kya batau abhi thoda try kar k dekhogay to lagbhag samajh hi jaoge 


 {
let arr = [5, 12, 8, 20, 3];

 arr.forEach(function(element,index,array){
    console.log("element : " + element);
    console.log("index : "+ index);
    
 })
console.log(arr);

 }


 [Running] node "d:\mygithub\my-js\learningpart\array.js"
element : 5
index : 0
element : 12
index : 1
element : 8
index : 2
element : 20
index : 3
element : 3
index : 4
[ 5, 12, 8, 20, 3 ]

[Done] exited with code=0 in 0.299 seconds

-----------------------------------map method-----------------------------------------------------------

ab baat karte h map method ki
map method bhi ek trah ka function jaisa hi method h jaisa ki forEachh
yay method bhi array par iteration  karta h 
lekin yay hamko hamesha hi ek nya array  deta h
mjay ki baat yay h ki yay hamko hamesha hi same length ka array hi deta h esmay hamko return may kuch dena hi padta h 
yay return ki value ko automatic array may insert kar deta h 
jabki forEach  may hamko yay kaam manualy karna padta h
thik h ab jyada baat nhi karenge 
ek exmaple dekhte h 
es example may ham 
ek array ko thoda transform karke ek nya array bnaenge 
es naye array may 
even numbers ka double store ho jayega or odd number ko string may convert kar dunga

ok lets do it

 {
let arr = [5, 12, 8, 20, 3];
 let result = arr.map((element)=>{
            
            if(element%2===0){
                return element*2;
            }
            else{
                return element.toString()
            }

 });
console.log(result);

 }

 [Running] node "d:\mygithub\my-js\learningpart\array.js"
[ '5', 24, 16, 40, '3' ]

[Done] exited with code=0 in 0.216 seconds

to es trah hamne array may looping ko sikha 
vaise to bahut kuch h looping k baare may 
lekin abhi k liyay etna kaafi h 




---------------------filter method ------------------------------

ab baat karte h filter method k baare may 
yay method hamko hamre array may say un elements ka ek new array bna k deta h jo element condition pass karta h 
likhne ka tarika eska bhi un uper walay methods k jaisa hi h 
es method k output ko bhi store karwaya jata h 
yay method hamko new array return karta h 
yay method intenaly ek array return karta h 
false honay par skip karta h or true hone par elemnt ko array my add karta h

{
    const arr = [1,4,5,6,9,1];
    let result = arr.filter(function(element,index,array){
    return element%2===0;
       

    });
    console.log(result);
}

[Running] node "d:\mygithub\my-js\learningpart\array.js"
[ 4, 6 ]

[Done] exited with code=0 in 0.169 seconds

ek baat eske baare may or baaki sab methods may janne ki yay h ki yay method ko return ki value say oi matlab nhi h 
yay bas check karta h ki kya return truthy h falsy bas 
agar truthy h to element ko add kar dega or falsy hoga to add nhi karega or khali array reeturn kar dega 

aasha karta hu samaj aaya hoga 
samay nhi h jaldi karna hoga 
practice karte rhe 




----------find method --------------

ab baat karte h find method k baare may 
find method hamare liyay hamare array may say hamre us phle element ko find kar k deta h jha bhi kisi bhi element nay condition ko true kar diya
filter to har condition pass karne walay element ko add kar kar k array bna deta h 
lekin find element hamko ek value return karta h jisne bhi condition ko  pass kiya  hua hota h 

{
    const arr = [1,4,5,6,9,1];
    let result = arr.find(function(element,index,array){
    return element%2===0;
       

    });
    console.log(result);
}


[Running] node "d:\mygithub\my-js\learningpart\array.js"
4

[Done] exited with code=0 in 0.14 seconds

to dekha aapne 
kaise find method nay hamare liya sirf phle element ko condition true hone k basis par return kar diya or baaki isi element ko check bhi nhi kiya


jindgi bhi esi hi hoti h 
to jab kabhi bhi uska find method traverse karte karte aap tak pahuche 
apne efforts or mehnat say us condition ko true kar dena 
varna koi or agar true kar dega to vo return ho jaayega 
or aap rh jaoge .....


es method ka return bhi truthy or falsy check karta h 
baaki aap practice kar k dekh lena



-------every()--------------------------

ab baat btata hu m tumko every method k baare may 
yay method bhi complete array par traverse karta h 
or yay method hamko boolean value return karta h 
ya to true ya to false 
yay method bhi condition check karta h or agar har element k traverse par return value truthy h 
to true return krta h
or agar ek bhi false hui to false 


{
    const arr = [1,3,5,7,9,1];
    let result = arr.every(function(element,index,array){
    return element%2!==0;
       

    });
    console.log(result);
}


[Running] node "d:\mygithub\my-js\learningpart\array.js"
true

[Done] exited with code=0 in 0.149 seconds


{
    const arr = [1,3,5,7,9,2];
    let result = arr.every(function(element,index,array){
    return element%2!==0;
       

    });
    console.log(result);
}

[Running] node "d:\mygithub\my-js\learningpart\array.js"
false

[Done] exited with code=0 in 0.15 seconds


------------------some()------------------

ab baat btata hu tumko some method k baare 
yay method bhi hamko boolean value return karta h 
yay bhi condition check karta h 
lekin eska lafda thoda alag h 
yay kya karta h ki agar kisi bhi ek (sabhi jaruri nhi h )kisi bhi ek element k traverse par 
agar isko return ki value may true milta h to yay true return karta h 
agar sabhi false honge tabhi false return karega


{
    const arr = [1,3,5,7,9,2];
    let result = arr.some(function(element,index,array){
    return element%2===0;
       

    });
    console.log(result);
}

[Running] node "d:\mygithub\my-js\learningpart\array.js"
true

[Done] exited with code=0 in 0.192 seconds



{
    const arr = [1,3,5,7,9,1];
    let result = arr.some(function(element,index,array){
    return element%2===0;
       

    });
    console.log(result);
}


[Running] node "d:\mygithub\my-js\learningpart\array.js"
false

[Done] exited with code=0 in 0.228 seconds


----------reduce()-------------------
 
yay method basicaly hamare array ko reduce karke kisi ek single value may bdal deta h 
ham asa assume karte h ki 
yay numbers k array elements ka sum ya multiplication 
string array ka concatenation 
vagera vagera kar sakte h 
abhi k liyay bas etna samaj lete h ki kya karta h kaise karta h 
es method may ham 4 parameters pass karte h 
phla parameter accumulator hota h jiska matlab h ek simple sa variable jisme kuch last tak store hota h update hote hote 
uske baad vhi element index array 
then esmay ham us accumulator k liyay initil value bhi de sakte h 
jis say ham hamre output ka type nirdharit kar sakte h 
although addition or concatination jaise operations k liyay variable ka initilization bahut jaruri hota h 
esa nhi h ki compulasary h initial value dena 
lekin hamesha say ek safe practice h initial value dena 
agar ham initial value nhi dete h to accumulator by default phle array element ko as accumulator maanta h 
or 2nd element say iteration or operation ko perform karta h 
yay hamesaha left to right element ko traverse karta h obivsly sabhi karte h 
to thik h ek chota sa example dekh lete h or aage badh jaaate h 

{
    const arr = [1,3,5,7,9,1];
    let result = arr.reduce(function(acc,element,index,array){
     return acc + element;
    });
    console.log(result);
}

[Running] node "d:\mygithub\my-js\learningpart\array.js"
26

[Done] exited with code=0 in 0.139 seconds



abhi maine chatgpt say mera test lene ko bola 
or usne array k 8 questions dekar mujhsay output pucha 
then maine sabhi question k output btaye


-------------------------------------------------------------------------------------------------------------------------

                                                                                                    array ka test ho jaaye 



Ram Ram Rahul Bhai 🙏

Chalo Array ka chhota sa test karte hain. Mix questions hain — map, filter, reduce, find, some, push, slice, splice sab cover ho jayega.
Bas output batao ya code likho.






🧪 Question 1

Output kya hoga?

let arr = [1,2,3,4];

let result = arr.map(x => x * 2);

console.log(result);




🧪 Question 2

Output kya hoga?

let arr = [5,10,15,20];

let result = arr.filter(x => x > 10);

console.log(result);





🧪 Question 3

Output kya hoga?

let arr = [1,2,3,4];

let result = arr.reduce((acc,x) => acc + x,0);

console.log(result);






🧪 Question 4

Output kya hoga?

let arr = [3,7,12,5];

let result = arr.find(x => x > 10);

console.log(result);






🧪 Question 5

Output kya hoga?

let arr = [2,4,6,8];

let result = arr.some(x => x % 2 !== 0);

console.log(result);






🧪 Question 6

Final array kya hogi?

let arr = [1,2,3];

arr.push(4);

console.log(arr);





🧪 Question 7

Output kya hoga?

let arr = [10,20,30,40,50];

let result = arr.slice(1,4);

console.log(result);




🧪 Question 8

Final array kya hogi?

let arr = [10,20,30,40];

arr.splice(1,2);

console.log(arr);






Rahul Bhai agar tumne 8/8 sahi kar liya to samajh lo:

Array topic DONE ✅



my answers

answer 1
[2,4,6,8]

answer 2
[15,20]

answer 3
10

answer 4 
12

answer 5
false

answer 6
[1,2,3,4]

answer 7
[20,30,40]

answer 8
[20,30]




answer checking


🧪 Question 1

Tumhara answer: [2,4,6,8]
✅ Correct

map() har element ko transform karta hai.





🧪 Question 2

Tumhara answer: [15,20]
✅ Correct

filter() condition true wale elements return karta hai.






🧪 Question 3

Tumhara answer: 10
✅ Correct

1+2+3+4 = 10





🧪 Question 4

Tumhara answer: 12
✅ Correct

find() first element return karta hai jo condition satisfy kare.






🧪 Question 5

Tumhara answer: false
✅ Correct

some() check karta hai ki koi ek element condition satisfy karta hai ya nahi.
Array me koi odd number nahi hai → false.






🧪 Question 6

Tumhara answer: [1,2,3,4]
✅ Correct

push() array ke end me element add karta hai.






🧪 Question 7

Tumhara answer: [20,30,40]
✅ Correct

slice(1,4) → index 1 se start, 4 include nahi hota.







🧪 Question 8

Tumhara answer: [20,30]
❌ Wrong

Code:

let arr = [10,20,30,40];

arr.splice(1,2);

console.log(arr);




Meaning:

start index = 1

delete count = 2

Delete honge → 20,30

Final array:

[10,40]

✅ Correct answer: [10,40]






📊 Final Score

7 / 8

Bohot badhiya Rahul Bhai 🔥
Array methods tumhe almost clear ho gaye hain.

Aur tumhari learning rule yaad hai:

bas, itna kaafi hai, aage badho

Array topic DONE ✅


to array may 8 may say 7 number 
kul mila k thik h 
ham aage badh sakte h 



*/

