function start_circle(){
    document.querySelector(".start-button").style.opacity = "0.4" ;
   document.querySelector(".circle").style.display = "block"
    
    let start =  setInterval(()=>{
document.querySelector(".time").innerText = `${timeleft()}s`;
document.querySelector(".circle").style.top =  `${left()}px` ;
document.querySelector(".circle").style.left =  `${left()}px` ;
},1 * 10**3);
setTimeout(start,30000)
document.querySelector(".start-button").disabled = "true"
}
function left(){
    let minH = 70;
    let maxH = 320;
   let hori =  Math.floor((Math.random()*(maxH-minH)) + minH);
     return hori;
}    let i = 500;
function timeleft(){
    i--;
return i;
}
let score = 0;
function onclick_circle(){
    score++;
    document.querySelector(".score").innerText = score ;
    document.querySelector(".circle").style.top =  `${left()}px` ;
document.querySelector(".circle").style.left =  `${left()}px` ;
    return score;
}
