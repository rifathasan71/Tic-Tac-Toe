let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let newBtn=document.querySelector("#new")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true;  //player O
const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            
        box.innerText='X'
        turnO=false;
        }
        else{
            box.innerText="O"
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
    });
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner=()=>{
    for(let i of patterns){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                
                showWinner(pos1);

            }
        }

    }
};
newBtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)