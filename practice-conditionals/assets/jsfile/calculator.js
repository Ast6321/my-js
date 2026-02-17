function calculate(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let operation = document.querySelector('input[name="operation"]:checked').value;
    let result;

  if (operation == "add")
  {
    result= number1+number2;
  }
  else if (operation == "subtract")
  {
    result= number1-number2;
  }
  else if(operation == "multiply")
  {
    result=number1*number2;
  }
  else if(operation == "divide"){
    result=number1/number2;
  }
  else{
    result="invalid operation";
  }

  document.getElementById("resultheading").innerHTML="the result is: "+ result;
}

function render(){
    window.location.href="switchcase.html";
}