'use strict';
//Pirmasis mygtukas start
const firstButton = document.querySelector("#button1");
const secondButton = document.querySelector("#button2");
const arrowStyle = document.querySelector('.arrow');

    let timerID;
    let timerID1;
    let counter = -53;
    let counter1 = -53;

 
    const pressHoldEvent = new CustomEvent("pressHold");
    //Galimas ispaudimo laikas kai kad rodykle apsisuktu, t.y. 
    const pressHoldDuration = 232;
    const pressHoldDuration1 = 232;
 
    // Listening for the mouse and touch events    
    firstButton.addEventListener("mousedown", pressingDown);
    firstButton.addEventListener("mouseup", notPressingDown);
    firstButton.addEventListener("mouseleave", notPressingDown);
   
    // secondButton.addEventListener('mousedown', pressDownStop);
    // secondButton.addEventListener("mouseup", notPressingDown);
    secondButton.addEventListener("mouseup", pressingDown1);
    secondButton.addEventListener("mousedown", notPressingDown1);
    secondButton.addEventListener("mouseleave", notPressingDown1);

    function pressDownStop(e){
      // cancelAnimationFrame(timerID);
      arrowStyle.style.transform = `rotate(${-53}deg)`;
      arrowStyle.style.transition = `transform ${5}ms`;          
      console.log("Pressing! Stop");
    }
 
 
    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);      
      e.preventDefault();
      console.log("Pressing!");
    }
 
    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = -53;
      arrowStyle.style.transform = `rotate(${counter}deg)`;
      arrowStyle.style.transition = `transform ${3}s`;     
      console.log("Not pressing!");
    }
 

    function timer() {
      console.log("Timer tick!");
 
      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
        arrowStyle.style.transform = `rotate(${counter}deg)`;  
        arrowStyle.style.transition = `transform ${500}ms`;      
      } else {
        console.log("Press threshold reached!");
        firstButton.dispatchEvent(pressHoldEvent);
      }
      
    }




    //antrajam btn
    function pressingDown1(e) {
      // Start the timer
      requestAnimationFrame(timerback);      
      e.preventDefault();
      console.log("Pressing!");
    }
    function notPressingDown1(e) {
      // Stop the timer
      cancelAnimationFrame(timerID1);
      counter1 = -53;
      arrowStyle.style.transform = `rotate(${counter1}deg)`;
      arrowStyle.style.transition = `transform ${400}ms`;     
      console.log("Not pressing!");
    }



    function timerback() {
      console.log("Timer tick!");
 
      if (counter1 < pressHoldDuration1) {
        timerID1 = requestAnimationFrame(timerback);
        counter1++;
        arrowStyle.style.transform = `rotate(${-52}deg)`;    
      } else {
        console.log("Press threshold reached!");
        secondButton.dispatchEvent(pressHoldEvent);
      }
      
    }
  

  
    
  

 

