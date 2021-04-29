// Canvas 

const canvas = document.querySelector('#canvas');
const color = document.querySelector('#color');
const range = document.querySelector('#range');
const size = document.querySelector('#size');
const ctx = canvas.getContext('2d');

// ctx.fillRect(400, 400, 200, 200) // x, y, width, height

// ctx.fillStyle = 'red';

ctx.moveTo(0, 0);
ctx.lineTo(900, 900);
ctx.stroke();

ctx.moveTo(900, 0);
ctx.lineTo(0, 900);
ctx.stroke();

// ctx.beginPath();
// ctx.arc(450, 450, 200, 0, Math.PI/2);
// ctx.stroke();

canvas.addEventListener('mousedown', e => {
    if(e.target.id = 'canvas'){
        document.addEventListener('mousemove' , e => {
            ctx.fillRect(e.offsetX, e.offsetY, range.value, range.value);
            ctx.fillStyle = color.value;
        });
    }
});

range.addEventListener('change', () => {
    size.innerText = range.value;
})