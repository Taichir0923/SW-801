let list = document.querySelector('#list');
let input = document.querySelector('#insertTask');


function insertTask(){
    if(!input.value) return false; // input.value.length, input.value == ''
    list.innerHTML += '<li>' + '<p>' + input.value + '</p>' + '</li>';
    input.value = '';
    let lists = document.querySelectorAll('#list li');

    lists.forEach(e => {
        e.onclick = () => {
            e.childNodes[0].classList.toggle('done');
        }

        if(e.childNodes.length < 2){
            e.insertAdjacentHTML('beforeend' , '<button>&times</button>');
        }

        e.childNodes[1].onclick = () => {
            e.remove();
        }
    })
}

document.addEventListener('keydown', (event) => {
    if(event.keyCode === 13){
        insertTask();
    }
})



// ES6 -> forEach => Loop;

// loop, insertAdjacentHTML, remove(), event

// let headingTag = document.querySelector('#testHTML');
// headingTag.onclick = () => {
//     headingTag.insertAdjacentHTML('afterend', '<p>hi</p>');
// }

// arr.pop

