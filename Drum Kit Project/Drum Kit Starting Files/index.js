'use strict';
const drumParent=document.querySelector('.set');
const w=new Audio('sounds/crash.mp3');
const a=new Audio('sounds/kick-bass.mp3');
const s=new Audio('sounds/snare.mp3');
const d=new Audio('sounds/tom-1.mp3');
const j=new Audio('sounds/tom-2.mp3');
const k=new Audio('sounds/tom-3.mp3');
const l=new Audio('sounds/tom-4.mp3');


drumParent.addEventListener('click',function(e){
    if(e.target.classList.contains('drum')){
        const btnClicked=e.target.textContent;
        MakeSound(btnClicked)
        keyAnimation(btnClicked);
    }
})

document.addEventListener('keydown',function(e){
    MakeSound(e.key);
    keyAnimation(e.key);
})



function MakeSound(key){
    switch(key){
        case 'w':
            w.play();
            break;
        case 'a':
            a.play();
            break;
        case 's':
            s.play();
            break;
        case 'd':
            d.play();
            break;
        case 'j':
            j.play();
            break;
        case 'k':
            k.play();
            break;
        case 'l':
            l.play();
            break;
        default:
            
    }
}

function keyAnimation(key){
    let btn=document.querySelector('.'+key);
    console.log(btn);
    btn.classList.toggle('pressed');

    setTimeout(function(){
        btn.classList.toggle('pressed');
    },100)
}

