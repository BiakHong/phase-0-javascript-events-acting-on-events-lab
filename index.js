// Your code here
const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const right ='400px'
    const rightNumbers = parseInt(right, 10);

    if(left < (rightNumbers-40)){
    dodger.style.left = `${left + 1}px`;}

  }
function moveDodgerUp(){
    const upNumbers= dodger.style.bottom.replace("px", "")
    const upNumb = parseInt(upNumbers,10);

    const right ='380px'
    const rightNumbers = parseInt(right, 10);

    if(upNumb >= 0 && upNumb < rightNumbers){
        dodger.style.bottom = `${upNumb + 5}px`;
    }
}

function moveDodgerDown(){
    const upNumbers= dodger.style.bottom.replace("px", "")
    const upNumb = parseInt(upNumbers,10);

    const right ='380px'
    const rightNumbers = parseInt(right, 10);

    if(upNumb > 0 && upNumb < rightNumbers){
        dodger.style.bottom = `${upNumb -5}px`;
    }
}


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  else if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  else if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});