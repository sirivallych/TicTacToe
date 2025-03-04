let btns= document.querySelectorAll(".btn")
let body = document.querySelector("body")
let playerx=true
let winnerX=true
winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log("button was clicked")
        if (playerx==true){
            btn.innerText="X"
            playerx=false
        }
        else{
            btn.innerText="O"
            playerx=true
        }
        btn.disabled=true
        checkwinner()
    })
});
let resetBtn= document.querySelector(".rst")
resetBtn.addEventListener("click",()=>{
    window.location.reload()
})
checkwinner=() =>{
    for (let pattern of winner){
        if (btns[pattern[0]].innerText == "X" && btns[pattern[1]].innerText == "X" && btns[pattern[2]].innerText == "X"){
            console.log("winner is playerX")
            btns.forEach((btn) =>{
                btn.disabled=true
            })
            
            displayWinner()
        }
        else if(btns[pattern[0]].innerText == "O" && btns[pattern[1]].innerText == "O" && btns[pattern[2]].innerText == "O"){
            console.log("winner is playerO")
            btns.forEach((btn) =>{
                btn.disabled=true
            })
            winnerX=false
            displayWinner()
        }
    }
}
displayWinner=() =>{
    function displayCongrats() {
        let congratsContainer = document.getElementById('congrats');
        congratsContainer.style.visibility = "visible";
        if (winnerX==true){
            let p=document.querySelector(".text")
            let newContent=document.createTextNode("Player X has won the game.. :)")
            p.appendChild(newContent)
        }
        else{
            let p=document.querySelector(".text")
            let newContent=document.createTextNode("Player O has won the game.. :)")
            p.appendChild(newContent)
        }
    }
    setTimeout(displayCongrats,0); 
}
body.addEventListener("click",() =>{
    let congratsContainer = document.getElementById('congrats');
    if (congratsContainer.style.visibility=="visible"){
        congratsContainer.style.visibility = "hidden";
    }
})
