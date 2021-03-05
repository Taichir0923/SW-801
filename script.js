var list = document.querySelector('#list');
var input = document.querySelector('#insertTask');


function insertTask(){
    if(!input.value) return false; // input.value.length, input.value == ''
    list.innerHTML += '<li>' + '<p>' + input.value + '</p>' + '</li>';
    input.value = '';
    var lists = document.querySelectorAll('li');
    lists.forEach(e => {
        if(e.childNodes.length < 2) {
            e.insertAdjacentHTML('beforeend', '<button>&times</button>');
        }
        e.onclick = () => {
            e.childNodes[0].classList.toggle('done');
        }
        e.childNodes[1].onclick = () => {
            e.remove();
        }
    })
}