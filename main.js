import './style.css'
const secondiTag = document.getElementById("secondi")
const minutiTag = document.getElementById("minuti")
const startMinuti= document.getElementById("startMinuti")
const startButton= document.getElementById("startButtom")
const stopButton= document.getElementById("stopButtom")

startButton.onclick = () => {

    
    timerID = setInterval(() => {
      secondi --
      
      if (secondi<0){
        secondi=59
        minuti=minuti-1
        
      }
      secondiTag.style
    .setProperty('--value', secondi);
      minutiTag.style
    .setProperty('--value', minuti);
     if(minuti === 0 && secondi === 0){
        clearInterval(timerID)
        return
      } 
    },1000)
  
}

stopButton.onclick = () =>{
  clearInterval(timerID)
}
let minuti, secondi,timerID=undefined;

startMinuti.oninput=()=>{

  console.log(startMinuti.value)
  secondiTag.style
    .setProperty('--value', 0);
  minutiTag.style
    .setProperty('--value', startMinuti.value);
  minuti=startMinuti.value;
  secondi=0;
}

