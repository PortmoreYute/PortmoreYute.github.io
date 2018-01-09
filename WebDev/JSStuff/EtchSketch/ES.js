let conDiv = document.querySelector('#sketchBrd');
let cssOj = window.getComputedStyle(document.querySelector('html'));
let colNum = Number (cssOj.getPropertyValue("--colNum"));
let rowNum = Number (cssOj.getPropertyValue("--rowNum"));
let mOverDiv;


for (var i = 0; i<(16*16); i++) {
  let sqrDiv = document.createElement('div');
  sqrDiv.setAttribute('class','sqrDiv');
  conDiv.appendChild(sqrDiv)
}

function addListeners() {
  mOverDiv = document.querySelectorAll('.sqrDiv');
  mOverDiv.forEach(s => {
          s.addEventListener("mouseover", e => {
            e.target.style.background = '#42B971';
          });
        });
}



function boardSize() {
  let userInput = document.getElementById('brdSize').value;
  let size = Number(userInput);
  if(typeof size === 'number' && size%1===0){
    if(size<70){
      document.documentElement.style.setProperty("--colNum", size);
      document.documentElement.style.setProperty("--rowNum", size);
      while(conDiv.hasChildNodes()){
        conDiv.removeChild(conDiv.firstChild)
      }
      for (var i = 0; i<(size*size); i++) {
        let sqrDiv = document.createElement('div');
        sqrDiv.setAttribute('class','sqrDiv');
        conDiv.appendChild(sqrDiv)
      }
    }else{
      alert("Sorry. Going pass 70 is a bad idea");
    }
  }else{
    alert("Sorry. We only accept whole numbers");
  }


  addListeners();
}

function reset() {
  document.documentElement.style.setProperty("--colNum", colNum);
  document.documentElement.style.setProperty("--rowNum", rowNum);
  while(conDiv.hasChildNodes()){
    conDiv.removeChild(conDiv.firstChild)
  }
  for (var i = 0; i<(colNum*rowNum); i++) {
    let sqrDiv = document.createElement('div');
    sqrDiv.setAttribute('class','sqrDiv');
    conDiv.appendChild(sqrDiv)
  }
  addListeners();
}


addListeners();
