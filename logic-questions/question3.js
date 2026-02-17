
{
    
 outerloop:for(let i=5; i<=30;i++){
    let isprime;
    for(let j =2;j<i;j++){
        if(i%j===0){
            continue outerloop;
        }
        else{
            isprime=true;
        }
    }
    if(isprime){
        console.log(i);
    }
}

}