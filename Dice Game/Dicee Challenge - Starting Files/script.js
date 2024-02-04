'use strict';
function randomNum(){
    return Math.floor((Math.random()*6)+1);
}
function pathGenerator(num){
    return `images/dice${num}.png`
}

let p1Score=randomNum();
let p2Score=randomNum();

document.querySelector('.img1').setAttribute('src',pathGenerator(p1Score));
document.querySelector('.img2').setAttribute('src',pathGenerator(p2Score));

if(p1Score>p2Score){
    document.querySelector('.container h1').textContent='Player 1 wins';    
}else if(p2Score>p1Score){
    document.querySelector('.container h1').textContent='Player 2 wins';    
}else{
    document.querySelector('.container h1').textContent='Draw refresh me';    
}



