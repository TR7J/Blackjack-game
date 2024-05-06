let player = {
    name: "Tim",
    chips: "600"
}
let cards = [];
let sum = 0;
//Keeps track of the state of the game.
let hasBlackJack = false; 
let isAlive = false;
//Added in case we want to use the variable message somewhere else in the code, and other reasons.
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el");
/* let sumEl = document.querySelector("#sum-el"); */ // We are asking for an element by its selector. We specify the given selector inside the paranthesis.
let playerEl = document.getElementById("player-el");



playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
    return randomNumber;
    }       
}



//Creating a startGame function and moving the conditionals in the body of the function so that when the button from html is clicked the conditions are ran.


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i += 1){
       cardsEl.textContent += cards[i] + " ";
    }

    // Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    /* console.log(hasBlackJack); */
    console.log(isAlive);
    messageEl.textContent = message;
    /* console.log(message); */
}



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum = sum + newCard;
        // Pushing a new card to the cards array
        cards.push(newCard);
        renderGame();
    }   
}


// Methods are functions that are attached to objects