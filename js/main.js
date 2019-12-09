const arrowStyle = document.querySelector('.arrow');
function arrowMove(e){
    // let step = 0; 
    console.log(this.dataset.name);
    if (this.dataset.name === 'start'){
        for (let index = 0; index < 250; index++) {
         arrowStyle.style.transform = `rotate(${index}deg)`;    
        }
    }
    if(this.dataset.name === 'stop'){
        arrowStyle.style.transform = `rotate(${-65}deg)`
    }  
}



const firstBtn = document.querySelectorAll('.button');
firstBtn.forEach(button => button.addEventListener ('mousedown',arrowMove));
