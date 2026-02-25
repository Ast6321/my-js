// first question 
/*

*
**
***
****
*****


*/

{
    // let rownum = 5;
    // for(let i = 1; i<=rownum;i++){
    //    let pattern = "";
    //    for(let j = 1; j<=i; j++){
    //     pattern+="*";
    //    }
    //    console.log(pattern);

    // }
}


// 2nd queston

/*

*****
****
***
**
*

*/

{
    // let rownum = 5;
    // for(let i = rownum;i>=1;i--){
    //     let pattern = "";
    //     for(let j = 1; j<=i;j++){
    //         pattern+= "*";
    //     }
    //     console.log(pattern);
    // }
}

// 3rd question

/*

1
12
123
1234
12345

*/

{
   
// let row= 5;
// for(let i = 1;i<=row;i++){
//     let pattern = "";
//     for(let j = 1;j<=i;j++){
//            pattern+=j;
//     }
        
// console.log(pattern);
// }

}


// 4th question

/*
1
22
333
4444
55555
*/

{
    // let row = 5;
    // for(let i = 1 ; i<=row;i++){
    //     let pattern = "";
    //     for(let j = 1; j<=i; j++){
    //         pattern+=i;
    //     }
    //     console.log(pattern);
    // }
}

//5th question

/*

    *
   ***
  *****
 *******
*********

*/

{
    // let row = 5;
    // for(let i = 1;i<=row;i++){
    //     let pattern= "";
    //     for(let j = 1;j<=row-i;j++){
    //         pattern+= " ";
    //     }
    //     for(let k = 1;k<=i*2-1;k++){
    //         pattern+="*"
    //     }
    //     console.log(pattern);
    // }
}

// 6th question

/*

*********
 *******
  *****
   ***
    *
    
*/

{
    // let row = 5;
    // for(let i = row;i>=1;i--){
    //     let pattern = "";
    //     for(let j = 1;j<=row-i;j++){
    //         pattern+= " ";
    //     }
    //     for(let k = 1;k<=i*2-1;k++){
    //         pattern+= "*";
    //     }
    //     console.log(pattern);
    // }

}

// 7th question

/*

   *
  ***
 *****
*******
 *****
  ***
   *

*/
{

// let patternrow= 11;
// if (patternrow%2===0){
//     console.log("please enter odd number to design pattern")
// }
// else{
// let row= Math.floor(patternrow/2+1);
// for(let i = 1; i<=row;i++){
//     let upattern="";
//     for(let uspace= 1; uspace<=row-i;uspace++){
//         upattern+= " ";
//     }
//     for(let ustar= 1;ustar<=i*2-1;ustar++){
//         upattern+="*"
//     }
//     console.log(upattern);
// }
// let lrow= row-1;
// for(let j =1;j<=lrow;j++){
//     let lpattern ="";
//     for(let lspace= 1;lspace<=j;lspace++){
//         lpattern+=" ";
//     }
//     for(let lstar= 1; lstar<=2*(row-j)-1;lstar++){
//         lpattern+="*";
//     }
//     console.log(lpattern);
// }
// }
}

//8th question  ( hollow square)

/*

*****
*   *
*   *
*   *
*****

*/
{
// let length = 5;

// for(let i =1;i<=length;i++){
//     let pattern ="";
//     for(let j =1;j<=length;j++){
//        if(i===1||i===length || j===1||j===length){
//        pattern+="*"
//         }
//         else{
//             pattern+=" ";
//         }
       
//        }
//          console.log(pattern);
//     }
  
}


// 9th question ( hollow rectangle)

/*

*******
*     *
*******

*/

{
    // let length = 3;
    // let breadth= 7;
    // for(let i =1; i<=length;i++){
    //     let pattern ="";
    //     for(let j = 1;j<=breadth;j++){
    //         if(i===1||j===1||i===length||j===breadth){
    //             pattern+="*";
    //         }
    //         else{
    //             pattern+=" ";
    //         }
    //     }
    //     console.log(pattern);
    // }
}

// 10th question (trying hollow pyramid)

/*
    *
   * *
  *   *
 *     *
*********
*/

{
//     let row= 5;
//     if(row%2===0){
//         console.log("please enter odd number")
//     }
//     else{
//     for(let i=1;i<=row;i++){
//        let pattern = "";
//        for(let ospace= 1; ospace<=row-i;ospace++){
//         pattern+= " ";
//        }


//        for(let j = 1;j<=i*2-1;j++){
//         if(i===1||j===1||i===row||j===(i*2-1)){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
//        }
//        console.log(pattern);

//     }
// }
}


// 11th question

/*

1
01
101
0101
10101

*/


{
    // let row = 5;
    // for(let i = 1;i<=row;i++){
    //     let pattern ="";
    //     let val;
    //     if(i%2===0){
    //         val = 0;
    //     }
    //     else{
    //         val = 1;
    //     }
    //     for(let j =1;j<=i;j++){
    //         pattern+= val;
    //         if(val===0){
    //             val = 1;
    //         }
    //         else{
    //             val=0;
    //         }
    //     }
    //     console.log(pattern);
    // }
}

// 12th question

/*

0
11
000
1111
00000

*/

{
    // let row = 5;
    // for(let i = 1;i<=row;i++){
    //     let pattern="";
    //    let val = i%2===0?1:0;
    //     for(let j = 1;j<=i;j++){
    //           pattern+=val;
    //           val = val===0?0:1
    //     }
    //     console.log(pattern);
    // }
}


// 13th question

/*

10101
01010
10101
01010
10101

*/

{
    // let row = 5;
    // for(let i = 1;i<=row;i++){
    //     let pattern = "";
    //     let val = i%2===0?0:1;
    //     for(let j = 1;j<=row;j++){
    //         pattern+= val;
    //         val = val===0?1:0;
    //     }
    //     console.log(pattern);
    // }
}