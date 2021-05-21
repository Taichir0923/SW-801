const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let fps = 60;
// let xPosition = canvas.width/2;
// let yPosition = canvas.height/2;
// let radius = 1;
// let xSpeed = Math.floor(Math.random() * 201 + 99) / fps; // max speed 5, min speed 1.65
// let ySpeed = Math.floor(Math.random() * 201 + 99) / fps; 
// // arrowLeft = 37
// // arrowUp = 38
// // arrowRight = 39
// // arrowDown = 40

// let moveLeft = false;
// let moveRight = false;
// let moveUp = false;
// let moveDown = false;

// // document.addEventListener('keydown', keydown);
// // document.addEventListener('keyup', keyup);

// if (Math.floor(Math.random() * 2) === 0) {
//     xSpeed = -xSpeed
// }

// if (Math.floor(Math.random() * 2) === 0) {
//     ySpeed = -ySpeed
// }

// function runGame(){
//     requestAnimationFrame(runGame);
//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     moveBall();
//     detectCollision();
//     drawBall();
// }

// function drawBall(){
//     ctx.fillStyle = 'white';
//     ctx.beginPath();
//     ctx.arc(xPosition, yPosition, radius, 0, Math.PI * 2);
//     ctx.fill();
// }

// function moveBall(){
//     xPosition += xSpeed;
//     yPosition -= ySpeed
//     // console.log(xPosition)
// }

// function detectCollision(){
//     // baruun hashlagt tulah;
//     if(xPosition >= canvas.width - radius && xSpeed > 0) xSpeed = -xSpeed;

//     // zuun hashlagt tulah
//     if(xPosition <= radius && xSpeed < 0) xSpeed = -xSpeed;

//     // deed hashlagt tulah
//     if(yPosition <= radius && ySpeed > 0) ySpeed = -ySpeed;

//     // dood hashlaga
//     if(yPosition >= canvas.height - radius && ySpeed < 0) ySpeed = -ySpeed;
// }

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

// runGame();


// Class Ball => constructor(xPosition, yPosition, xSpeed, ySpeed, radius, red, green, blue);
// this.xPosition = xPosition; ths.y;
// drawBalls(){ ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`; }
// ctx.beginPath(); ctx.arc(this.xPosition, this.yPosition, this.radius, 0, Math.PI * 2);
// ctx.fill

// let ballsContainer = [];

// new Ball

let normSize = 5;
let maxSize = 30;

let effect = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', e => {
    effect.x = e.x;
    effect.y = e.y;
    // console.log(effect)
})

class Ball {
    constructor(xPosition, yPosition, xSpeed, ySpeed, radius, red, green, blue){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
    };

    drawBalls(){
        ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPosition, this.radius, 0, Math.PI * 2);
        ctx.fill();
    };

    moveBalls(){
        if(this.xPosition + this.radius >= canvas.width || this.xPosition <= this.radius){
            this.xSpeed = -this.xSpeed;
        };

        if(this.yPosition + this.radius >= canvas.height || this.yPosition <= this.radius){
            this.ySpeed = -this.ySpeed;
        };

        this.xPosition += this.xSpeed;
        this.yPosition += this.ySpeed;

        this.drawBalls();

        // effect;
        if(
            effect.x - this.xPosition < 20 &&
            effect.x - this.xPosition > -20 &&
            effect.y - this.yPosition < 20 &&
            effect.y - this.yPosition > -20
        ) {
            if(this.radius <= maxSize){
                this.radius += 1;
            }
        } else if (this.radius > normSize) {
            this.radius -= 1;
        }
    }
}

let balls = [];
for(let i = 0; i < 1000; i++){
    let radius = 5;
    let xP = Math.random() * (canvas.width - radius * 2) + radius; // xp-=xs
    let yP = Math.random() * (canvas.height - radius * 2) + radius;
    let xs = (Math.random() - 0.5) * 2; // 0.8
    let ys = (Math.random() - 0.5) * 2;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let ball = new Ball(xP, yP, xs, ys, radius, red, green, blue);
    balls.push(ball);
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let j = 0; j < balls.length; j++){
        balls[j].moveBalls();
    }
};

animate()