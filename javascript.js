
/*
This code makes each box you mouse over a red background by giving it the visited class
*/

function addMouseoverListener(){
    const square = document.querySelectorAll('.item');

    square.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('visited');
    });
});
}

const startBoard = document.querySelector('#init');

document.addEventListener('DOMContentLoaded', () => {
    createBoard();
    addMouseoverListener();
});
startBoard.addEventListener('click', () => {
    let userChoice = prompt("How big would you like the board to be? \n (Pick between 1 and 100)");
    
    if (userChoice == null){
        return;
    }
    while(isNaN(userChoice)){
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