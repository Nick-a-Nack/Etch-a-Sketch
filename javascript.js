
/*
This code creates a 16x16 board on page load and adds event listeners to each box on the board 
*/
document.addEventListener('DOMContentLoaded', () => {
    createBoard();
    addMouseoverListener();
});

/*
This code adds a random color to each box on mouseover
*/
function addMouseoverListener(){
    const square = document.querySelectorAll('.item');

    square.forEach((square) => {
    square.addEventListener('mouseover', () => {
        
        square.setAttribute('style', `background-color: rgb(${random256()}, ${random256()}, ${random256()})`);
    });
});
}

/*
Helper function for ^
*/

function random256(){
    return Math.floor(Math.random() * 256);
}

/*
startBoard is the initialize board button at the top of the window
It asks how big the user wants the board to be from 0 to 100 squares
using input validation.
eventlisteners are attached to new board after creation.
*/
const startBoard = document.querySelector('#init');

startBoard.addEventListener('click', () => {
    let userChoice = prompt("How big would you like the board to be? \n (Pick between 1 and 100)");
    
    if (userChoice == null){
        return;
    }
    while(isNaN(userChoice)){
        if (userChoice == null){
            return;
        }
        alert(`${userChoice} is not a number, try again!`);
        userChoice = prompt("How big would you like the board to be?  \n (Pick between 1 and 100)");
    }

    while (userChoice < 1 || userChoice > 100){
        alert(`${userChoice} is not within the requested range, try again!`);
        userChoice = prompt("How big would you like the board to be?  \n (Pick between 1 and 100)");
    }

    clearBoard();

    createBoard(userChoice);

    addMouseoverListener();
});

/*
createBoard creates an NxN board of square boxes on the page with N = 16 being the default
*/
function createBoard(count = 16){
    const board = document.querySelector('.board');

    for (let i = 0; i < count; i++){
        let temp = document.createElement('div');
        temp.classList.add('row');
        for (let j = 0; j < count; j++){
            let square = document.createElement('div');
            square.classList.add('item');
            temp.appendChild(square);
        }
        board.appendChild(temp);
    }
}

function clearBoard(){
    const board = document.querySelector('.board');

    while(board.firstChild){
        board.removeChild(board.firstChild);
    }     
}

class Square{
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
}