


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

/*
ab ham aage topics ko continue karte h 
ham string k methods ko padhenge 
lekin us say phle aapko ek chij janani bahut important h ki 
vo yay ki aapki string jo hoti h vo immutable hoti h 
immutable honay ka matlab h ki agar vo ek baar define hokar memory allocate kar leti h to fir unme koi change nhi ho sakta h 
ha bhai ha 
proof bhi dunga 
hamko bina proof yha kuch bhi nhi karna h 
dekho proof

{
// let name = "ankit";
// name.toUpperCase();
// console.log(name);

[Running] node "d:\mygithub\my-js\learningpart\string.js"
ankit

[Done] exited with code=0 in 0.165 seconds

}


es uper k example may maine 
ek variable bnaya string type ka 
uske baad us variable par ek method lagaya
method h usko uppercase karne k liyay
to vo maine kiya 
then usko console karwaya 
 

output mila ankit
matlab uppercase hua hi nhi 
ab esa kyu 
kyuki bhai string immutable hoti h vo change nhi ho sakti h 
to fir tum khaoge ki fir to koisa bhi method kaam hi nhi karega 
to fir methods ka fayada hi kya h 

to ek baar chij ko samjho 
string immutable hotay h us particular memory location k uper 
maan lo ki jab maine variable banaya tab js nay usko ek memory location de di 
ab us location par kuch change nhi honga 
ha lekin kisi dusri location par ham usko le jakar usko badal denge 
to esa karne say
phli location par wo vhi hoga jo declare hua the
or dusri locaton par hamra badla hua string hoga 

ab example ko dekho to
maine badle hue result ko koi dusri location di hi nhi 
ha bhai batata hu 
dusri location dene ka matlab h ki 
aap ya to nya variable bnao ya fir usi variable may reinitilize karwao 
 
{
// let name = "ankit";
// let result= name.toUpperCase();
// console.log(result);

[Running] node "d:\mygithub\my-js\learningpart\string.js"
ANKIT

[Done] exited with code=0 in 0.198 seconds

}

dekha result may store karwa k kaise maine usko uppercase bna diya 

to bas yay hi btana tha mujko 
method ka behaviour
or string immutable hote h 

jab en baaato ko man may bitha doge tabhi methods ko or ache say kar paoge 

*/

// to chlo methods ko start karte h 
/*
ham sabhi methods k baare may jaanege 
phle methods ka naam likh deta hu then ek ek karke unko samjhenge 

1. length property
2. charAt()
3. charCodeAt()
4. codePointAt()
5. concat()
6. at()
7. .[]
8. slice()
9. substring()
10. substr()
11. toUpperCase()
12. toLowerCase()
13. toLocaleUpperCase()
14. toLocaleLowerCase()
15. isWellFormed()
16. toWellFormed()
17. trim()
18. trimStart()
19. trimEnd()
20. padStart()
21. padEnd()
22. repeat()
23. replace()
24. regular expressions /i , /g
25. replaceAll()
26. split()



abhi start karne say phle m aap ko kuch or bhi batana chahta hu 
en baato ko dhyan say samjhana h 
js jo h vo UTF-16 ka use karta h 
esmay bahut say character hotay h 
har character ko ek ASCII value assign hoti h 
jaise for example (A = 65 , Z= 90) (a = 97 , z = 122 )(" " space = 32)
to es trah har character ko ASCII value assign hoti h 
js har character ko 16 bit may store karta h yaani ki har 16bit = 1 unit = 1 character
to 0 say 65535 tak k character 16 bit may store hotay h 
lekin eske baad sab character 2 unit may store hotay h yanni ki 16 bit + 16 bit = 32 bit 
enko ham surrogate pair bolte h 
esliyay surrogate pair character ko js 2 character samjhta h 
surrogate pair may hamare emoji or music signs ya or bhi alag alag symbols 
half surrogate pair ko lone surrogate bolte h enka koi mtlab nhi hota h 
half say mera matlab h jo 32 bit h 16-16 bit ki 2 unit unme say koi ek unit ho ya to phle wali ya last wali 
kyuki half surrogate ya lone surrrogate character to hota h kyuki vo 16bit may hota h 
lekin ham usko bad maante h ,  unformed maante h .
to yay chij h esko ek bar aap research kar k khud bhi samjhne ki koshish karo 
agar aap en chijo ko thoda samaj lete ho to aap ko har method or bhi ache say samaj aayega 


to thik h ab start karte h 

 
1. length 
  
 length method say ham kisi bhi string ki length nikal sakte h 
 length ka matlab h usme kitne chaaracter h 
 yaad rakhne ki baat yay h ki string may space bhi ek character hota h 
 to yay jo length property h yay string k space ko bhi count karti h 
 surrogates pair yaani emojis or special charaters ko 2 character ki trah count karta h 
 
 jaise 

{
 let name = "ankit";
 console.log(name.length); // 5 
}


2. charAt()

 es charAt method say ham yay pta kar sakte h ki kon say index positon par kon sa character h 
 eske liyay ham variable par charAt() method ko lagate h or paranthesis may index ki value dete h 
 phir yay method hamko us index par jo bhi character hota h usko return karta h 
 dhyan rakhne ki baat yay hi ki
 index 0 say start hota h 
 yay negitive index par khali string return karta h 
 or out of range value par bhi khali string return karta h 
 out of range ka matlab hota h ki length 5 h or tum index may daal rhe ho 6 ya 7 

{
 //   let name = "ankit";
//  console.log(name.charAt(0)); // a
//  console.log(name.charAt(67)); // ""
//  console.log(name.charAt(-3)); // ""
}


3. charCodeAt()

  es method say ham yay pta karte h ki string k kisi specfic index par present character ka ASCII value kya h 
  eske liyay ham variable par charCodeAt() method lagate h or paranthesis may ham index ki value daalte h
  yay negitive index par or out of range index par NaN return karta h or datatype ko number karta h 
  yay method surrogate pair ko ache say return nhi karta h 
  kyuki surrogate pair 16-16 bit ki do unit may store hote h to yay kisi ek index position par lone surrrogate ka ASCII value deta h jo ki accurate nhi hota h 
  esliyay charCodeAt() 0 say 65535 (bmp) ki rannge tak hi sahi h 
  main kaam bas etna h ki character ka ASCII value (unicode) ko return karna
  
  {
  // let name = "ankit";
  // console.log(name.charCodeAt(-7)); // NaN
  // console.log(name.charCodeAt(37));// NaN
  // console.log(name.charCodeAt(0));// 97

} 

4. codePointAt()
  
   yay method bhi vahi kaam karta h jo ki charCodeAt()karta h 
   lekin jaisa ki hamne dekha tha ki charCodeAt may kuch khamiya thi 
   to bas 
   un khamiyo ko pura karne k liyay hi aaya codePointAt()
   yay method hamay characters ka ASCII value to deta hi h uske sath sath yay hamko
   surrogates pair ka bhi accurate ASCII value (unicode) calculate kar k deta h 
   eske liyay ham variale par codePointAt() method ko lagate h 
   or eske paranthesis may ham index value ko daalte h 
   esmay negetive ya out of range index dene par yay undefined return karta h or typeof bhi undefined hi rhta h 

{
//   let name = "ankit";
//  console.log( name.codePointAt(72)); // undefined 
//   console.log( name.codePointAt(-2)); // undefined 
//    console.log( name.codePointAt(1)); // n
} 
 

5. concat()

yay method jaisa ki naam say clear ho rha h ki concatination karta h 
concatination ka kaam hota do ya do say jyada string ko add karna
ha esko ham + operator say bhi kar sakte h 
lekin yay uska hi ek alag form h esa bol sakte h 
+ operator to number may string ko concatinate ho jaati h 
kya concat method yay kar paayega
sochna nhi h kar k dekhna h 
kar k dekhte h 
dekha 
maine observe kiya ki 
string may to number concatenate ho jaata h lekin number may string add nhi hoti method k through
or hogi bhi kaise 
method to string ka h number k liyay applicable hi nhi h 
 to at the end 
 concat method basicaly strings ko add karta h 
 ek baar likhne ka tarika dek lete h 
 variable par method lagao 
 paranthesis may string likho 
 agar jyada string ho to comma say alag alg kar do 


 {
//  let name = "ankit";
//  let lname = "singh";
//  let fullname = name.concat(" " , lname);
//  console.log(fullname); // ankit singh
 
 }

6. at()

  yay method bhi charAt() variable ki trah hi string may index par kon sa character h yay btata h
  to fir eski jarurat hi kya h jab charAt() to tha hi 
  to bhai charAt may kuch problems thi jaise usme -ve index nhi daal sakte thay 
  lekin at() method may ham -ve index daal sakte  h 
  -ve index ko yay method reverse read karta h 
  waise -ve index ko ham kuch esay samjhte h (length + (-ve index));
  or out of range value k liyay yay method undefined return karta h 
  ek fayada yay hi h k -ve index ko le leta h or ulta traverse karta  h 

{
//  let name = "ankit";

//  let result = name.at(-3);
//  console.log(result); // k
 
 }
  
 7. []

 esko acces string bolte h 
 esmay bhi ham index daalte h or hamko return may us index par present character milta h 
 esmay bhi hamko -ve index par or out of range index par undefined milta h 
 esko likhne ka tarika h variable then square brackets without (.)
 yay array k square brackets jaisa hi dikhta h 
 lekin kaam bas eska itna hi h ki 
 ham eske through bhi string character ko get kar sakte h 
{
//  let name = "ankit";

//  let result = name[-3];
//  console.log(result); // undefined
 
 }



 8. slice()

 yay method string may say parts ko extract karne k liyay hota h 
 matlab yay method hamko string may say us string ka koi hissa return kar sakta h 
 esmay -ve index allowed hotay h 
 yay hamko out of range honay par undefined return karta h 
 esko likhne ka tarika dekh lete h 
 esmay ham variable par es method ko lagate h 
 or paranthesis may ham do index dete h 
 phla index yay btata h ki 
 kha say start karna h or ha phla index ka character included hota h 
 or last index hamesha es method k liyay exculde hi hota h 
 matlab last index jo ham denge us say ek index phle tak ka print hoga
 
{
//  let name = "ankit";

//  let result = name.slice(1 ,3);
//  console.log(result); // nk 
 
 }
bas -ve index dete vakt hamko dhyan rakha hoga 
wo kya dhyan rakhna h aapko pta chal jaayega jab aap kar k dekhoge 
m bas aapko etna bta deta hu ki 
slice method hamesha left to right traverse hota h 
agr khi kisi mod par esko right to left traverse karne ki nobat aati h to yay khali string return kar deta h
thik h ab jyada baat nhi karte  h 
aage badhte  h 



9. substring()
   yay method bhi hamko string  ka part extract kar k deta h 
   par esme thoda change h slice say 
   jaise slice may -ve indexing chal jaati h 
   esmay yay -ve index ko 0 ki trah treat karta h 
   automatic swap bhi kar deta h 
   or out of range value ko last index value tak print kar k deta h 
   agar sirf ek index dete h or vo bhi out of range to yay khali string return kar deta h 
   matlab error k chance bahut kam h es method may 
  
{
//  let name = "ankit";

//  let result = name.substring(6 , 2);
//  console.log(result); // kit
 
 }


10. substr()
   
   yay method bhi slice or substring ki trah hi string part ko extract kar k deta h 
   esamy hamara likhne ka tarika thoda alag hota h 
   ismay hamra phle index ka matlab h start kha say karna h 
   or agle index ka matlab h usko index nhi bolenge usko ham length bolenge 
   matlab dusri value ka matlab hota h ki kha tak traverse karna h 
   rule vhi h last wala exclude hota h
   phle index may agar -ve value h to usko slice ki trah treat karta h 
   or agr length nhi bataoge to provided index k baad ki puri string ko print kar deta h

{
//  let name = "ankit";

//  let result = name.substr(4 , 3 );
//  console.log(result); // t
 
 }

 11. toUpperCase()
  
   es method say ham apni string ko uppercase kar dete h jaisa ki naam say clear h 
   esko use karne  liyay variable then .toUpperCase();
   bas etna likhna h yay us string ko uppercase kar dega 
   dhyan bas esko likhte vakt rakhna h 
   kyuki yay method to k baad camel casing may likha hua h 
   to bas syntax ka dhyan rakhna h 
   baaki agar kuch or es method may hua to aage aapko inform kar dunga 
   abhi kuch khaaas nhi h 

{
//  let name = "ankit";

//  let result = name.toUpperCase( );
//  console.log(result); // ANKIT
 
 }

 12. toLowerCase()

  jaisa ki eske naam say bhi clear h ki yay string ko lowercase may change karta h
  esko use karne k liyay nhi same hi aapko variable then ,toLowerCase yay likhna hota h
  dhyan rakhna h esmay bhi camelcasing ka use h
  
  {
//  let name = "ANKIT";

//  let result = name.toLowerCase();
//  console.log(result); // ankit
 
 }

 13. toLocaleUpperCase()
   
  yay bhi uppercase k method jaisa hota h lekin esmay ham country ka unicode specifies kar sakte h 
  yay hamare tab kaam aata h jab ham bahut bda koi project karte h 
  jisme alag alag country ka text input aata h 
  enke paranthesis may ham us country ka lang model daalte h 

{
//  let name = "ankit";

//  let result = name.toLocaleUpperCase();
//  console.log(result); // ANKIT
 
 }


 14. toLocaleLowerCase()

   yay bhi hamara toLocaleUpperCase() k jaisa hi hota h 
   vhi saare points h jo mnay uppercase waly k liyay btaye thay 
   bas kaam yay h ki yay lowercase may convert kar deta h 

{
//  let name = "ANKIT";

//  let result = name.toLocaleLowerCase();
//  console.log(result); // ankit
 
 }

 15. isWellFormed()

  yay method hamko boolean value return karta h 
  matlab yay hamko true ya false return karta h
  yay method check karta h ki khi hamare string may lone surrogate to nhi h 
  agar hamare string may lone surrogate hote h to false return karta h 
  or agar koi lone surrogate nhi ho to true return karta h 
   
  lone surrogate to maine aapko btaya hi tha kya hote h 
  method start karne say phle btya hua h vha ja k padh lo ek baar

{
//  let name = "ANKIT \uD800";

//  let result = name.isWellFormed();
//  console.log(result); // false
 
 }

yay uD800 kya h yay aap jab surogates k baare may padhoge tab aapko pta chal jaayega 
abhi k liya tum esko ek half code maan lo kisi emoji ka


16. toWellFormed()

   hamaraa yay method un string ko wellformed bna deta h
   yay method un strings k lone surrogates ko bmp k kisi special character k saath replace kar deta h
   or usko wellformed string bna deta h 

{
//  let name = "ANKIT \uD800";

//  let result = name.toWellFormed();
//  console.log(result); // ANKIT �

 
 }
  


 17. trim()


   yay method bhi apne aap may bahut khas h 
   yay method hamare string k start or end may say whitespaces ko remove kar deta h
   space, tabspace ,newline etc 
   sab white space ki category may aate h 
   to yay trim method hamari string ko format karta h 
   matlab start or end may say extra space ko hta deta h 
   bich k spaces ko yay kuch nhi khta

{
//  let name = "       ANKIT \uD800           ";
//      console.log(name); //        ANKIT \uD800                            
//  let result = name.trim();
//  console.log(result); //ANKIT �

 
 }


 18. trimStart()
   yay method jaisa ki naam say clear h 
   string k start may say sabhi spces ko remove kar deta  h 
   sirf start may say 


   {
//  let name = "       ANKIT \uD800           ";
//      console.log(name); //        ANKIT \uD800                            
//  let result = name.trimStart();
//  console.log(result); //ANKIT �

 
 }


 19. trimEnd()
   
  es method k naam say clear ho rha h ki 
  yay string k end may say whitespaces ko remove karta h 
  sirf end may say

{
//  let name = "       ANKIT \uD800           ";
//   console.log(name); //        ANKIT \uD800                            
//  let result = name.trimEnd();
//  console.log(result); //       ANKIT �

 
 }

 20. padStart()

  yay method hamari string k start may kuch characters ko add karne k liyay hota h 
  esko ham likhte h variable k baad . laga k padStart()
  eske paranthesis may ham do values dete h phli value may ham length ko define karte h 
  dusri value may ham apna character ko string may likhte h 
  jisko hamay add karana hota h 

{
 let name = " ANKIT \uD800";                            
 let result = name.padStart(14, "#");
 console.log(result); // ###### ANKIT �

 
 }

 rule yay hoti h jo ham length dete h utni length total print hoti h 
 matlab original string ki length ko provided length msy say minus karke 
 jo length bachti h utne character string ki starting may add ho jaate h
 agar provided length orignal  length say choti h to kuch print nhi hota h 
 or ha yay starting may space ko consider nhi karta h 





 21. padEnd()
   
  yay method bhi same padstart jaisa hi hota h 
  sab rules or lihne ka tarika same h bas 
  output may yay us character ko end may add karta h 
  

  {
//  let name = " ANKIT \uD800";                            
//  let result = name.padEnd(14, "#");
//  console.log(result); // ANKIT �######

 
 }

 22. repeat()

  yay method hamrre liyay hamari hi string ko repeat karta  h 
  esko likhne k liya variable k oiche .lga k method likh do repeat()
  or parenthesis may aap jo value doge utni baar string repeat ho jaayegi
  only 0 or positive value hi allowed h 
  0 par yay hamko khali string provide karta h 

  {
//  let name = "ANKIT ";                            
//  let result = name.repeat(3);
//  console.log(result); // ANKIT ANKIT ANKIT 

 
 }

 23. replace()

  yay method hamare liyay hamari string may hamare dwara provided string part ko hamre hi dwara diyay gaye string part say replace kar deta h 
  esko likhne k liayay ham variable par yay method likhte h or paranthesis may 
  phle vo string part jo replace karna h 
  phir comma 
  phir vo string part jiske saath replace karna h 
  dono paranthesis may quotes k ander hi honay chahiyay 

  {
//  let name = "ANKIT is great";                            
//  let result = name.replace("ANKIT" , "RAHUL");
//  console.log(result); // RAHUL is great

 
 }

 yay bas phla match hota h bas usko hi replace karta h 
 or yay case sensitive hota h esliyay spelling dhyan say likhna


 24. replaceAll()


 bhai jaisa ki naam say clear ho rha h 
 ki yay har jagah say replace kar dega 
 chahe ek baar ho ya 2 baar 
 bas ek baat dhyan rakhni h k yay case sensitive h esliyay spelling dhyan say likhna h
 baaki sab likhne ka tarika to replace jaisa hi h  

 {
//  let name = "ANKIT is great. ANKIT is dumb";                            
//  let result = name.replaceAll("ANKIT" , "RAHUL");
//  console.log(result); // RAHUL is great. RAHUL is dumb

 
 }

 
*/

 
