/*

 JavaScript Spread and Rest Operator

The spread and rest operators use the same syntax:

(...)

Their behavior depends on the context in which they are used.

Spread Operator → Expands values.
Rest Operator → Collects values.


khne ka matlab yay h ki jo spread or rest operator hota h 
enki dikhawat ek jaise hoti h lekin yay alag kaam karte h 
jaisa ki maine uper batahi diya ki 
spread operator values ko exapand karta h 
or rest operator values ko collect karta h 

aap bologe ki enmay difference kaise karay 
to aap ko ek ander ki baat batata hu kisi ko bolna mat 
jo assignment operator yani ki = k left side hoga to rest operator hoga 
or agar assignment operator yani ki = k right side hoga to matlab spread operator hoga 

yay bas thoda sa difference find out karne k liyay bataya h 
esko literal terms may mat le lena

---------------------------------------

# Spread Operator

The spread operator is used to expand elements of an array or properties of an object.
matlab yay values of array or properties of objects ko expand karta h 
khne ka matlab unko single values may alag kar deta h


----------------Array Spread--------------
{
let arr = [1,2,3];

console.log(...arr);
}

Output

1 2 3

The array elements are expanded.


ab dekhte h array ko copy karke ek naye  array may 
{
let arr = [1,2,3];

let newArr = [...arr];
console.log(newArr);

}
abhi yha par values expand hogi or array brackets k ander chli jaayegi 
or es tarike say hamara array pura array copy ho jaayega 

ha m jaanta hu ki 
aap yay soch rhe ho ki m to pura ka pura array direct assign kar sakta hu 
jiase
let newArr = arr;
ha bhai kar sakte ho 
lekin m ek baat bolta hu jo bh idoubt mna may aae usko turant solve karne ki koshish karni chahiyay

chlo m bta deta hu lekin ek baar try jarur kar lena padhne say phle 

to kya hota h jab ham direct assigning karte h 
jab ham direct assign karte h
to uska reference same hi rhta h 
matlab dono variable ek hi refernce ko point karte h 
matlab ek may kuch change 
to dusre may apne aap change ho jaayega 
chlo m likh bhi deta hu ek code 
es code may m ek array banuga 
or us array ko ek naye array may direct assign kar dunga 
uske baad naye array may ek change karunga 
to dekhenge ki  kya original array may bhi change hua h kya 



{

    let arr = [1,2,3];
    let newArr = arr;
   newArr.push(4);
   console.log(arr);
    console.log(newArr);

}

[Running] node "d:\mygithub\my-js\learningpart\spread-rest-operator.js"
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]

[Done] exited with code=0 in 0.122 seconds


ha to hamne dekha ki original array may bhi change ho gya 
to yay to dikkat ki baat h 
esliyay spread ka use kro 
or apni dikkat mitao 

or ha doubt to aana chahiyay
or aaye to uska turant parbhav say ilaj karna chaiyay


Creates a new array with the same elements.
do array ko jod k dekhte h 


----------Merging Arrays-----------

{
let a = [1,2];
let b = [3,4];

let result = [...a,...b];
console.log(result)
}


output

[1,2,3,4]

es example my hmne spread operartor ki madad say do array ko merge kar diya 
mjay ki baat yay h ki ham array k order ko decide kar sakte h  
kon say array k elements phle kon say array k elements baad may 

-------------------------------------------

ab kuch element add kar k dekhte h 

---------Adding Elements to Array-------

{
let arr = [1,2,3];

let newArr = [0,...arr,4];
console.log(newArr);
}


output


[0,1,2,3,4]


--------------------------------------------------

----------------- Object Spread----------------
abhi baat karenge object may kaise spread operator kaam karta h
{

let user = {
  name:"Rahul"
};

let newUser = {...user,age:22};
console.log(newUser);
}

[Running] node "d:\mygithub\my-js\learningpart\spread-rest-operator.js"
{ name: 'Rahul', age: 22 }

[Done] exited with code=0 in 0.12 seconds

to dekhiya spread operator nay ek object ki properties ko dusre object may copy kar diya 



---

----------------- Updating Object Properties---------------------

If the same property appears again, the **last value overwrites the previous one.

khne ka matlab yay h ki 
ham jo h properties ko update bhi kar sakte h 
bas jis property ko bhi update karna ho usko dubara say likh do 
ek rule hota h ki 
last appeard property first vali ko override kar deti h 
jis say vo update ho jati h 


{

let user = {
  name:"Rahul",
  age:22
};

let updatedUser = {
  ...user,
  age:23
};
console.log(updatedUser);

}


[Running] node "d:\mygithub\my-js\learningpart\spread-rest-operator.js"
{ name: 'Rahul', age: 23 }

[Done] exited with code=0 in 0.12 seconds


to mujhay nhi lagta ki spread operator k baare may or kuch janna baki h 

------------------------------------------------------------------------

# Rest Operator

The rest operator collects multiple values into a single array or object.

eska matlab hota h collector yay operator multiple values ko array ya object ki form may collect karta h 
eski bhi pehchan bta deta hu 
yay assignment operator k left side hota h 
jaisa ki phle bhi bataya h k yay bas pehchan karne k liyay h 

yay destructuring k vakt bhi hamare kaam aata h 


 Rest in Array Destructuring
{
let [a,...rest] = [1,2,3,4];
console.log(a);
console.log(rest);
}

output
a = 1
rest = [2,3,4]


The remaining values are collected in `rest`.

----------------------------------------------------------------------------

Rest in Object Destructuring

{
let user = {
  name:"Rahul",
  age:22,
  city:"Delhi"
};

let {name,...rest} = user;

console.log(name);
console.log(rest);
}

output

name = "Rahul"
rest = { age:22, city:"Delhi" }


-----------------------------------------------------------------

 Rest in Function Parameters

{
function sum(...numbers){
  console.log(numbers);
}

sum(1,2,3,4);
}

Output

[1,2,3,4]

All arguments are collected into an array.

---------------------------------------------------------------------------------------------------------

Spread vs Rest

yha niche maine rest or spread ka ek defination based difference bataya h 

| Operator | Purpose                   |
| -------- | ------------------------- |
| Spread   | Expands elements          |
| Rest     | Collects remaining values |

------------------------------------------------------------------------------------------------------

 Important Notes ya ham kh sakte h ki janne layak kuch baate 

* Both operators use the same syntax `...`.
* Spread is used to expand arrays or objects.
* Rest is used to collect multiple values into a single variable.
* Spread creates a shallow copy, meaning nested objects still share the same reference.



to yay kuch baate thi spread or rest operator k baare may 
esi k sath rest or spread to hote h purey






*/

