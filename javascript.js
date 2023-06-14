const board = document.querySelector('.board');

for (let i = 0; i < 16; i++){
    let temp = document.createElement('div');
    temp.classList.add('row');
    for (let j = 0; j < 16; j++){
        let square = document.createElement('div');
        square.classList.add('item');
        temp.appendChild(square);
    }
    board.appendChild(temp);
}

const square = document.querySelectorAll('.item');

square.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('visited');
    });
});