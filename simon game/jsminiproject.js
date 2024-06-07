
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let gameseq=[];
let userseq=[];
let level=0;
let started=false;

let btns =["yellow","red","purple","green"];
document.addEventListener("keypress",()=>{  
    if(started==false)
        {
           //Omitted code here
           //Write your code here
        }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        //Omitted code here
           //Write your code here
    },400);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       //Omitted code here
           //Write your code here
    },300);
}

function levelUp(){
   //Omitted code here
           //Write your code here
    h3.innerText=`Level = ${level}`;
    // random button choose
    let randInx= Math.floor(Math.random()*4);
    let randColor=btns[randInx];
    let randbtn =document.querySelector(`.${randColor}`);
  
   //Omitted code here
  //Write your code here
}





function checkAns(idx){
    // let idx=level-1;
    
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length===gameseq.length)
            {
               //Omitted code here
           //Write your code here
            }
        console.log("correct");
    }
    else
    {
       
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        h3.innerHTML=`Game Over ! Your score was <b>${level}</b><br> Press any key to start again`;
        reset();
    }
}

function btnPress()
{
    let btn =this;
    userFlash(this);
    let userColor = this.classList[1];
    // console.log(userColor);
   
    console.log(gameseq);
    //Omitted code here
           //Write your code here
}
let allBtns= document.querySelectorAll('.btn');
for(let btn of allBtns)
{
    //Omitted code here
           //Write your code here
}

function reset()
{
    //Omitted code here
           //Write your code here
}
