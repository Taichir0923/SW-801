const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

let fps = 60;
let xPosition = canvas.width/2;
let yPosition = canvas.height/2;
let radius = 5;
let xSpeed = Math.floor(Math.random() * 201 + 99) / fps; // max speed 5, min speed 1.65
let ySpeed = Math.floor(Math.random() * 201 + 99) / fps; 
// arrowLeft = 37
// arrowUp = 38
// arrowRight = 39
// arrowDown = 40

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

// document.addEventListener('keydown', keydown);
// document.addEventListener('keyup', keyup);

if (Math.floor(Math.random() * 2) === 0) {
    xSpeed = -xSpeed
}

if (Math.floor(Math.random() * 2) === 0) {
    ySpeed = -ySpeed
}

function runGame(){
    requestAnimationFrame(runGame);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    moveBall();
    detectCollision();
    drawBall();
}

function drawBall(){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, radius, 0, Math.PI * 2);
    ctx.fill();
}

function moveBall(){
    xPosition += xSpeed;
    yPosition -= ySpeed
    // console.log(xPosition)
}

function detectCollision(){
    // baruun hashlagt tulah;
    if(xPosition >= canvas.width - radius && xSpeed > 0) xSpeed = -xSpeed;

    // zuun hashlagt tulah
    if(xPosition <= radius && xSpeed < 0) xSpeed = -xSpeed;

    // deed hashlagt tulah
    if(yPosition <= radius && ySpeed > 0) ySpeed = -ySpeed;

    // dood hashlaga
    if(yPosition >= canvas.height - radius && ySpeed < 0) ySpeed = -ySpeed;
}

// function keydown(e){
//     if(e.keyCode === 37){
//         moveLeft = true;
//     }
//     if(e.keyCode === 38){
//         moveUp = true;
//     }
//     if(e.keyCode === 39){
//         moveRight = true;
//     }
//     if(e.keyCode === 40){
//         moveDown = true;
//     }
// }

// function keyup(e){
//     if(e.keyCode === 37){
//         moveLeft = false;
//     }
//     if(e.keyCode === 38){
//         moveUp = false;
//     }
//     if(e.keyCode === 39){
//         moveRight = false;
//     }
//     if(e.keyCode === 40){
//         moveDown = false;
//     }
// }

runGame();
