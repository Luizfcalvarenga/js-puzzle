console.log("Hora de livecode!!")

const btn = document.querySelector('.btn');
const message = document.querySelector('.hint');
const squares = document.querySelectorAll('td');

btn.addEventListener('click', ()=>{
  message.classList.toggle('active');
})
squares.forEach((square)=>{
  square.addEventListener('click', (e) => {
    e.preventDefault();
    if(canMove(e.currentTarget)) {
      const emptySquare = document.querySelector('.empty')
      emptySquare.classList.remove('empty');
      emptySquare.innerText = e.currentTarget.innerText;
      e.currentTarget.innerText = "";
      e.currentTarget.classList.add('empty');
    }
  })
})

const canMove = (square) => {
  const emptySquare = document.querySelector('.empty')
  const squareRow = square.parentNode.rowIndex;
  const squareColumn = square.cellIndex;

  const emptySquareRow = emptySquare.parentNode.rowIndex;
  const emptySquareColumn = emptySquare.cellIndex;

  const right = square.cellIndex + 1;
  const left = square.cellIndex - 1;
  const up = square.parentNode.rowIndex - 1;
  const down = square.parentNode.rowIndex + 1;

  return (
    (emptySquare.cellIndex === right && squareRow === emptySquareRow) ||
    (emptySquare.cellIndex === left && squareRow === emptySquareRow) ||
    (emptySquare.parentNode.rowIndex === up && squareColumn === emptySquareColumn)||
    (emptySquare.parentNode.rowIndex === down && squareColumn === emptySquareColumn));
}
