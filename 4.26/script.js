const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let zurag = new Image();
ctx.drawImage(zurag, 100, 100)
zurag.src = './images/img.png';

// let rectangle = [
//     {
//         x: canvas.width - 200,
//         y: canvas.height/2
//     }
// ];

// let img = new Image();
// img.src = './images/img.png';

// let width = 40;
// let height = canvas.height/2;

// canvas.addEventListener('click', e => {
//     console.log(e.offsetX, e.offsetY);
// });

// canvas.addEventListener('load', () => {
//     ctx.drawImage(img, 100, 100);
// })

// let x = canvas.width;
// function moveRect(){
//     ctx.beginPath();
//     ctx.drawImage(img, 100, 100);
//     // let random = Math.random() * rectangle[0].y;
    
//     // ctx.fillRect(x, random , width, height);
//     // ctx.clearRect(x + width, random, width, height);

//     // if(x === -width) return false
    
//     // x--
//     // requestAnimationFrame(moveRect)
//     // console.log(x);

// }

// moveRect()

// function recv(){

// }

