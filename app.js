let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let newBtn2 = document.querySelector("#new2");
let msgContainer = document.querySelector(".msg-container");
let msgContainer2 = document.querySelector(".msg-container2");
let msg = document.querySelector("#msg");
let msgDraw = document.querySelector("#msgDraw");
let count = 0;
let winner = false;
let turnO = true; 

const patterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    winner = false;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer2.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'X';
            box.style.color = '#ff6347'; 
            turnO = false;
        } else {
            box.innerText = 'O';
            box.style.color = '#4682b4';  
            turnO = true;
        }

        box.disabled = true;
        count++;
        checkWinner();
        checkDraw();
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.color = ''; 
    });
};

const showWinner = (winner) => {
    msgContainer2.classList.add("hide"); 
    let winnerColor = winner === 'X' ? '#ff6347' : '#4682b4'; 
    msg.innerHTML = `Congratulations, Winner is <span style="color: ${winnerColor}; font-weight: bold;">${winner}</span>`;
    msgContainer.classList.remove("hide");  
    disableBoxes();
};

const showDraw = () => {
    msgContainer.classList.add("hide");  
    msgDraw.innerText = `Oops! It's a Draw`;
    msgContainer2.classList.remove("hide");  
    disableBoxes();
};

const checkWinner = () => {
    patterns.forEach((pattern) => {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                winner = true;
            }
        }
    });
};

const checkDraw = () => {
    if (count === 9 && !winner) {
        showDraw();
    }
};

newBtn.addEventListener("click", resetGame);
newBtn2.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
