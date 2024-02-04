'use strict'
//////////////////////////////////////
//Variables
const allTaskContainer=$('.Task-Container')[0];
const formConatiner= $('.form-container');
const Addbtn=$('#add-task');
const DelBtn=$('#delete-task');
const key1='task';
const key2='desc';
const localStorageKey='TheData';
let localArr= JSON.parse(localStorage.getItem(localStorageKey));


if(localArr==null){
    localArr=[];
}else{
    localArr=[...localArr];
}

//////////////////////////////////////
//Function calls
getItemsInnerHtml();

//////////////////////////////////////
//Event Listener
$('#task-submit').click(function(e){
    
    e.preventDefault();
    let task=$('#TaskInput')[0].value;
    if(task==''){
        alert('Task can not be empty');
        return;
    }

    let description=$('#DescriptionInput')[0].value;
    
    localArr[localArr.length]={
        [key1]:task,
        [key2]: description,    
  }
   
    addToLocalStorage();
    $('#TaskInput')[0].value='';
    $('#DescriptionInput')[0].value='';
    getItemsInnerHtml();

})

$('.Task-Container').click(function(e){
    if(e.target.classList.contains('btn')){
        console.log(e.target.dataset.delid);
        console.log(e.target.dataset.delId);

        const deleteId=parseInt(e.target.dataset.delid);
        
        localArr.splice(deleteId,1);

        addToLocalStorage();
        getItemsInnerHtml();

    }
})

$('#add-task').click(function(){
    Addbtn.fadeOut();
    DelBtn.fadeOut();
    setTimeout(()=>formConatiner.fadeIn(),700)
})

$('.btn-close-from').click(function(){
    formConatiner.fadeOut()
    
    setTimeout(()=>{
        Addbtn.fadeIn();
        DelBtn.fadeIn();
    },700)
})

$('#delete-task').click(deleteAll)


document.querySelector('.Task-Container').addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains('Task-Title')){
        
        // console.log(e.target);
        // console.log(e.target.parentElement.querySelector('.Task-Description').textContent);
        let reuireDesc="<h6>Description</h6>"+e.target.parentElement.querySelector('.Task-Description').textContent;
        $('.Show-Task-Description').html(reuireDesc);
        $('.Show-Task-Description').fadeIn();
    }
})

document.querySelector('.Task-Container').addEventListener('mouseout',(e)=>{
    if(e.target.classList.contains('Task-Title')){
        
        $('.Show-Task-Description').fadeOut();
    }
})

//////////////////////////////////////
//Functions
function addToLocalStorage(){
    localStorage.setItem(`${localStorageKey}`,`${JSON.stringify(localArr)}`);
}

function getItemsInnerHtml(){
    // console.log('function working');
    let innerHtmlVar='<h1 class="task-h1">Tasks</h1>';
    if(localArr.length>0){
        localArr.forEach((element,index) => {
                // console.log(localStorage.getItem(`${key1}${j}`)); 
                innerHtmlVar+=`<div class="Single-Task-Container">
                <div class="Task-Description displayNone">${element[key2]}</div>
                <span class="Task-Title">${element[key1]}</span>
                <button class="btn btn-sm btn-danger btn-delete" data-delId="${index}">Delete</button>
                <hr>
            </div>`;
        });
        
    }
    // console.log(innerHtmlVar);
    allTaskContainer.innerHTML=innerHtmlVar;    
}

function deleteAll(){
    localArr=[];
    addToLocalStorage();
    getItemsInnerHtml();
}






