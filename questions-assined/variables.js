
// variables question assigned by tanish sir 

{
  /*  🟢 PART 1 – Variables (Q1–Q5)
Q1

Declare a variable name and assign your name. Print it.

Q2

Declare a variable age using let and assign value 25.

Q3

Declare a constant country and assign value "India".

Q4

Change value of let variable and print before and after.

Q5

Try changing const variable value. What happens?
*/
}


// Q1 ------------ Declare a variable name and assign your name. Print it.------------------------

{
    // let name = "Ankit";
    // console.log(name);


    /*
    [Running] node "d:\mygithub\my-js\questions-assined\variables.js"
Ankit

[Done] exited with code=0 in 0.175 seconds
    
    */
}

// Q2----- Declare a variable age using let and assign value 25.------------

{
    // let age = 25;
    // console.log(age);



    /*

    [Running] node "d:\mygithub\my-js\questions-assined\variables.js"
25

[Done] exited with code=0 in 0.142 seconds
    
    */
}


// Q3-------Declare a constant country and assign value "India".-----------

{
    // const country ="india";
    // console.log(country);

    /*

    [Running] node "d:\mygithub\my-js\questions-assined\variables.js"
india

[Done] exited with code=0 in 0.167 seconds
     
     */
}

//Q4-------Change value of let variable and print before and after.-----------------

{

    // let wish = "good morning";
    // console.log("before changing value: " + wish);
    // wish = "good night";
    // console.log("after changing value: " + wish);


    /*
    [Running] node "d:\mygithub\my-js\questions-assined\variables.js"
before changing value: good morning
after changing value: good night

[Done] exited with code=0 in 0.126 seconds
    
    */

}

// Q5-------Try changing const variable value. What happens?-----------------

{
    // const name = "Ankit";
    // name = "Rahul";
    // console.log(name);

    /*

     by assigning a new value to a const variable is gives a error 
     TypeError: Assignment to constant variable.


    [Running] node "d:\mygithub\my-js\questions-assined\variables.js"
d:\mygithub\my-js\questions-assined\variables.js:102
    name = "Rahul";
         ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (d:\mygithub\my-js\questions-assined\variables.js:102:10)
    at Module._compile (node:internal/modules/cjs/loader:1761:14)
    at Object..js (node:internal/modules/cjs/loader:1893:10)
    at Module.load (node:internal/modules/cjs/loader:1481:32)
    at Module._load (node:internal/modules/cjs/loader:1300:12)
    at TracingChannel.traceSync (node:diagnostics_channel:328:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.13.0

[Done] exited with code=1 in 0.129 seconds
    
    */
}
