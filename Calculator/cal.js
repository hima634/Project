let currentDisplay='';
  
document.querySelector('#one').onclick=function(){
     currentDisplay += '1';
     showDisplay(currentDisplay);
}

document.querySelector('#two').onclick=function(){
    currentDisplay += '2';
    showDisplay(currentDisplay);
}

document.querySelector('#three').onclick=function(){
    currentDisplay += '3';
    showDisplay(currentDisplay);
}

document.querySelector('#four').onclick=function(){
    currentDisplay += '4';
    showDisplay(currentDisplay);
}
document.querySelector('#five').onclick=function(){
    currentDisplay += '5';
    showDisplay(currentDisplay);
}
document.querySelector('#six').onclick=function(){
    currentDisplay += '6';
    showDisplay(currentDisplay);
}
document.querySelector('#seven').onclick=function(){
    currentDisplay += '7';
    showDisplay(currentDisplay);
}
document.querySelector('#eight').onclick=function(){
    currentDisplay += '8';
    showDisplay(currentDisplay);
}
document.querySelector('#nine').onclick=function(){
    currentDisplay += '9';
    showDisplay(currentDisplay);
}
document.querySelector('#zero').onclick=function(){
    currentDisplay += '0';
    showDisplay(currentDisplay);
}
document.querySelector('#dot').onclick=function(){
    currentDisplay += '.';
    showDisplay(currentDisplay);
}
document.querySelector('#add').onclick=function(){
    currentDisplay += '+';
    showDisplay(currentDisplay);
}
document.querySelector('#sub').onclick=function(){
    currentDisplay += '-';
    showDisplay(currentDisplay);
}
document.querySelector('#mul').onclick=function(){
    currentDisplay += '*';
    showDisplay(currentDisplay);
}
document.querySelector('#divide').onclick=function(){
    currentDisplay += '/';
    showDisplay(currentDisplay);
}
document.querySelector('#clr').onclick=function(){
    currentDisplay ='';
    showDisplay(currentDisplay);
}
//equal
document.querySelector('#equal').onclick=function(){
    currentDisplay =eval(currentDisplay);
    showDisplay(currentDisplay);
}

  function showDisplay(currentDisplay){
    document.querySelector('#display').value=currentDisplay;
 }