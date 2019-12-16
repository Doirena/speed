'use strict';
const arrowStyle = document.querySelector('.arrow');
const firstButton = document.querySelector("#button1");
const secondButton = document.querySelector("#button2");
const startPos = -53;
const finishPos = 232;
const stop =-52.9;
let change = false;
let i=0;

function arrowMove(){
for (i = startPos; i <= finishPos; i++) {   
    arrowStyle.style.transform = `rotate(${i}deg)`; 
    arrowStyle.style.transition = `transform ${3}s`;
    }
}

function arrowStopUP(){
    for (let index = finishPos-1; index>=startPos; index--) {
        arrowStyle.style.transform = `rotate(${index}deg)`;
        arrowStyle.style.transition = `transform ${15}s`;
    }
}
function arrowStop(){
    for (let index = finishPos-1; index>=startPos; index--) {
        arrowStyle.style.transform = `rotate(${stop}deg)`;
        arrowStyle.style.transition = `transform ${3}s`; 
    }
}



firstButton.addEventListener('mousedown',arrowMove);
firstButton.addEventListener('mouseup', arrowStopUP);
secondButton.addEventListener('mousedown', arrowStop);
secondButton.addEventListener('mouseup', arrowStopUP);
