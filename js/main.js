const arrowStyle = document.querySelector('.arrow');
const initialPositionBtn = 53;
function arrowMove(e){
    console.log(e);
    // console.log(this.dataset.name);
    
    
    // Pirmasis mygtukas greicio i prieki
    if (this.dataset.name === 'start'){
        for (let index = 0; index <= 232; index++) {
         arrowStyle.style.transform = `rotate(${index}deg)`; 
         arrowStyle.style.transition = `transform ${500}ms`; 
         arrowStyle.style.background = `red`;   
        } 
    } 
    //kai atleidziamas pelesmygtukas
    firstBtn.forEach(button => button.addEventListener ('mouseup', () => {
    if (this.dataset.name === 'start'){
        arrowStyle.style.transform = `rotate(${-initialPositionBtn}deg)`;
        arrowStyle.style.transition = `transform ${5}s`;
        
        }
    }));

    if(this.dataset.name === 'stop'){
        arrowStyle.style.transform = `rotate(${-initialPositionBtn}deg)`
        arrowStyle.style.transition = `transform ${500}ms`;  
        arrowStyle.style.background = `green`; 
    }  
}

const firstBtn = document.querySelectorAll('.button');
firstBtn.forEach(button => button.addEventListener ('mousedown',arrowMove));
// firstBtn.forEach(button => button.addEventListener ('mouseleave', () => mousedown =false));



