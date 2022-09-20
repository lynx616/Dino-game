var container = document.getElementById("container");
var dino = document.getElementById("dino");
var block = document.getElementById("block");
var road = document.getElementById("road");
var cloud = document.getElementById("cloud");
var score = document.getElementById("score");
var gameover = document.getElementById("gameover");
var enter = document.getElementById("enter");

let interval = null;
let playerScore = 0;

let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;

}

window.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.key == 'Enter'){
        enter.style.opacity="0%";
        dino.src = "dino.gif";
       gameover.style.display="none";
       block.classList.add("blockActive");
       road.firstElementChild.style.animation="roadani 1.2s linear infinite";
       cloud.firstElementChild.style.animation="cloudani 35s linear infinite";

       let playerScore=0;
       interval = setInterval(scoreCounter,200);
    }
})
//jump
window.addEventListener("keydown" , (e)=>{
    if(e.code == "Space" || e.code == "ArrowUp")
        if(dino.classList != "dinoActive"){
            dino.classList.add("dinoActive");
            setTimeout(()=>{
                dino.classList.remove("dinoActive");
            },500);
        }
})
//game over
let result = setInterval(() =>{
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockleft = parseInt(getComputedStyle(block).getPropertyValue("left"));
        if(dinoBottom <= 90 && blockleft >=20 && blockleft<= 105){
            
            gameover.style.display="block";
            gameover.style.opacity="100%";
            block.classList.remove("blockActive");
            road.firstElementChild.style.animation="none";
            cloud.firstElementChild.style.animation="none";
            clearInterval(interval);
            playerScore=0;
            enter.style.opacity="100%";
        }
}, 10);