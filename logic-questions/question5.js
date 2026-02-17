

{
    let sum=0;
   outerloop:for(let i=10;i<=50;i++){
        let isprime;
        for(let j=2;j<i;j++){
            if(i%j===0){
                continue outerloop;
            }
            else{
                isprime=true;
            }


        }
        if(isprime){
            sum+=i
        }

    }
    console.log(sum);
}