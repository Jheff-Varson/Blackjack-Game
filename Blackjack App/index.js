let player = {
    name: "Jeff",
    chips: 145,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let celebration1 = document.querySelector(".gif_img1");
let celebration2 = document.querySelector(".gif_img2");


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber =  Math.floor( Math.random() * 13 ) + 1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}

function startGame(){ 
    if (isAlive === false || hasBlackJack === true) {
        cards = [ ];
        sum = 0;

        isAlive = true
        hasBlackJack = false;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard

        celebration1.style.display = "none";
        celebration2.style.display = "none";
    
        renderGame();
        
    }

}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: " + sum 
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
        celebration1.style.display = "block";
        celebration2.style.display = "inline-block";
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
