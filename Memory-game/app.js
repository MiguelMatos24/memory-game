document.addEventListener('DOMContentLoaded',() => {


    //card options
    const cardArray =[
        {
            name: 'fries',
            image: 'images/fries.png'

        },
        {
            name: 'fries',
            image: 'images/fries.png'

        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'

        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'

        },
       
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'

        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'

        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'

        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'

        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'

        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'

        },
        {
            name: 'pizza',
            image: 'images/pizza.png'

        },
        {
            name: 'pizza',
            image: 'images/pizza.png'

        },
    ];
 
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const cardsChosen = [];
var cardsChosenID = [];
var cardsWon = [];


//create your board
function createBoard() {
    for (let i= 0; i< cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click' , flipCard)
    grid.appendChild(card)
}
}


//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneID = cardsChosenID[0]
    const optionTwoID = cardsChosenID[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert("You found a match")
        cards[optionOneID].setAttribute('src', 'images/white.png')
        cards[optionTwoID].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneID].setAttribute('src', 'images/blank.png')
        cards[optionTwoID].setAttribute('src', 'images/blank.png')
        alert("Try Again")
    }
    const cardsChosen = [];
    const cardsChosenID = [];
    resultDisplay.textContent =  cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'VICTORY'
    }
    console.log(cardsChosenID);
}
//flip your card

function flipCard(){
    var cardId =  this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenID.push(cardId)
    this.setAttribute('src', cardArray[cardId].image)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    } 
}




createBoard()
}
);
