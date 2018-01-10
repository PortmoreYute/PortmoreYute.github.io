let result;
let numOne=0;
let op;
let numTwo=0;
let check = false;

let resultTxt = document.getElementById('input');

function numBtn(value) {
  resultTxt.innerHTML=resultTxt.innerHTML+value;
}

function backspace() {
  let newNum;
  newNum = resultTxt.innerHTML;
  newNum = newNum.substring(0, newNum.length - 1);
  resultTxt.innerHTML= newNum;
}

function opertation(action) {
  console.log("Operation Function");

  if (check==false) {
    result=Number(resultTxt.innerHTML);
    resultTxt.innerHTML='';
    check=true;
  }else{
    numTwo=Number(resultTxt.innerHTML);
    resultTxt.innerHTML=''
    calResult();
  }
  op = action;
}

function  calResult(){
  console.log("Result Function");
  if(op=='add'){
    result=result + numTwo;
  }
  if(op=='subtract'){
    result=result - numTwo;
  }
  if(op=='multiply'){
    result=result * numTwo;
  }
  if(op=='divide'){
    result=result / numTwo;
  }
  console.log("Result: ",result);
}

function  equal(){
  numTwo=Number(resultTxt.innerHTML);
  calResult();
  resultTxt.innerHTML=result;
  check=false;
}

function clearCal() {
  console.log("Clear Function");
  resultTxt.innerHTML = "";
  numOne=0;
  numTwo=0;
  result=0;
  op='';
}
