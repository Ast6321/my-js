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

*/

