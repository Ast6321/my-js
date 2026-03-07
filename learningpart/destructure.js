/*

JavaScript Destructuring

Destructuring is a JavaScript feature that allows us to extract values 
from arrays or properties from objects and assign them to variables in a concise way.

khne ka matlab yay h ki destructring technique hamko arrays ki value or object ki properety 
ko variables may direct assign karne k kaam aati h .


Instead of accessing values manually, destructuring lets us unpack them directly using a pattern.

eska matlab h ki yay direct assign karta h pattern k hisab say 
matlab right hand side may array ya object ki propereties ko 
left hand side variable may position k hisab say set kar deta h matlab assign kar deta h .

Array Destructuring

Values are assigned based on position (index).

let [a, b] = [5, 4];

console.log(a); // 5
console.log(b); // 4

Here:

a → 5
b → 4
Skipping values
let [a,,c] = [10,20,30];

yha par pattern dekho 
pattern k hisab say right hand side ki value 10 gai a may
right hand side ki value 20 gai left hand side commas k bich may (matlab vha kuch variable nhi h to value ho gai gayab)
right hand side ki value 30 pattern k hisab say gai c may 
to es trah say a may 10 or c may 30 aa gai 

console.log(a); // 10
console.log(c); // 30



Object Destructuring

yha par ham object properties ko destructure karenge 

Values are extracted based on property names.

let {name, age} = {name: "Rahul", age: 22};
yha par hamne object properties ko destructure kiya 
pattern position k hisab say let name may name chla gya Rahul
or age may chla gya 22

console.log(name); // Rahul
console.log(age); // 22



Renaming Variables

We can rename variables during destructuring.
ham rename bhi kar sakte h 
tarika vhi h 
jiase hamne loops may labeling kri thi 
bilkul vaise hi ham destructuring k doran rename kar sakte h 
jiase niche waly example may 
hamne name ka rename karke username kar diya 
bas original name then colon (:) or hamra badla hua naaam 
or ho gya rename 
yay cheejay debugging k time kaam aati h 

let {name: username} = {name: "Rahul"};

console.log(username); // Rahul



Default Values

Default values are used if the property or element does not exist.

let [a,b=10] = [5];

console.log(a); // 5
console.log(b); // 10

yay to waise general si baat h agr kuch diya hi nhi hoga to jayega kya 
to esay case may jo default value hoti h vo chli jati h bas





Rest Operator with Destructuring

The rest operator collects remaining values.

yay operator ka matlac hota h bache hue sabhi 
operator bas yay teen dots h (...) uske baad ham naam kuch bhi likh sakte h 
basic matlab yay hota h ki bachi hui saari values
alag alag jagah use karne par matlab badal jata h
yay rest operator or spread operator do tarike say generaly istemaal hota h 
vo uske usecase pay depend karta h ki yay kab spread hoga or kab rest hoga 
esi ko spread operator bhi bolte h or bhi bahut saare naam ham rakh sakte h

let [a,...rest] = [1,2,3,4];

console.log(a); // 1
console.log(rest); // [2,3,4]




Function Parameter Destructuring

Destructuring can also be used directly in function parameters.

khne ka matalb h ki destructring kis had tak estemaal kar sakte h 
yha jo niche m example dunga usmay dekhna ki kaise call krte wakt arguments function k parameters may assign ho jaayengi 

function createUser({name,email}) {
  console.log(name,email);
}

createUser({
  name:"Rahul",
  email:"rahul@gmail.com"
});




Important Notes

It only extracts values and assigns them to variables.

Works with arrays and objects.

Commonly used in modern JavaScript, APIs, and backend frameworks like Node.js and Express.

yay ek badhiya feature h 
maine ek question bhi kiya tha jha par maine 
ek swaping ka question kiya tha 

vo tha ek variable may kuch value h 
dusre variable may kuch  value h 
unko swap karna h 
jaise 

let a = 4;
let b = 5;
console.log(a);// 4
console.log(b);// 5

[a,b]=[b,a];
 
console.log(a); //5
console.log(b); //4

es tarike say maine values ko swap kar diya tha 

es say or bhi bahut kuch ho sakta h 
lekin vo jab hamre saamne pronblem aayegi tab dekh lenge 
abhi k liya hamko backend may ghusna h to mujhay lgta h etna kaafi h 

to chlo aage badhte h 




*/

