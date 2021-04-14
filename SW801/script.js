'use strict';
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const number = document.querySelector('#number');
// const password = document.querySelector('#password');
// const register = document.querySelector('#register');
// const update = document.querySelector('#update');

// const users = document.querySelector('.users');

// let data = []; // push hiine

// class User {
//     constructor(username, email, number, password){
//         this.username = username;
//         this.email = email;
//         this.number = number;
//         this.password = password;
//     }

// }

// register.onclick = () => {
    
//     let user = new User(username.value, email.value, number.value, password.value);
//     let existingEmail = data.find(e => e.email === email.value);
//     let existingPhone = data.find(e => e.number === number.value);

//     if(existingEmail){
//         alert('Email burtgeltei bn...');
//         return false;
//     } else if (existingPhone) {
//         alert('Dugaar burtgeltei bn...');
//         return false;
//     };

//     data.push(user);
//     console.log(data);

//     users.innerHTML = '';
//     reset()
//     displayUsers();
//     res();
//     return data;
    
// }

// function displayUsers(){
//     data.forEach((e, indx) => {
//         let userTag = document.createElement('div');
//         userTag.className = `usr usr-${indx}`;
//         userTag.innerHTML = e.username;
//         users.append(userTag);
//     })
// }
// function res(){
//     let userDB = document.querySelectorAll('.usr');
//     console.log(userDB)
//     userDB.forEach(el => {
//         el.onclick = function(){
//             let userIndex = parseInt(el.classList[1].split('-')[1]);
//             // console.log(userIndex)
//             username.value = data[userIndex].username;
//             number.value = data[userIndex].number;
//             email.value = data[userIndex].email;
//             password.value = data[userIndex].password;

            
//         }
//     })
// }


// function reset(){
//     username.value = '';
//     number.value = null;
//     email.value = '';
//     password.value = ''
// }



// // // for()



// // // let obj = {
// // //     name: 'Narada',
// // //     utas: 95959595
// // // }

// // // let {name: myVar, utas} = obj


// // // const users = document.querySelector('.users');

// // // user.insertAdjacentHTML('afterbegin', `
// // //     <div class='user'>

// // //     </div>
// // // `)update.onclick = () => {
//                 let dataIndex = data.findIndex((e, ind) => ind === userIndex);
//                 let newDB = [...data];
//                 newDB[dataIndex] = {
//                     ...newDB[dataIndex],
//                     username: username.value,
//                     number: number.value,
//                     email: email.value,
//                     password: password.value
//                 }

//                 data = newDB;
//                 reset();
                
//                 users.innerHTML = '';
                
//                 displayUsers();
//                 res();
//             }

// /**

// // // find
// // // rest operator 


// // // let db = [
// // //     {
// // //         ner: 'James',
// // //         nas: 25,
// // //         mergejil: 'Designer'
// // //     },
// // //     {
// // //         ner: 'Thomas',
// // //         nas: 30,
// // //         mergejil: 'Engineer'
// // //     },
// // //     {
// // //         ner: 'Liza',
// // //         nas:44,
// // //         mergejil: 'Actress'
// // //     }
// // // ];

// // // let index = 5;

// // // // let hh = [3,4,5] forEach((e, indx))

// // // const userIndex = db.findIndex((el, indx) => indx === index);
// // // let newDB = [...db];
// // // // if(!userIndex) return false
// // // newDB[userIndex] = {
// // //     ...newDB[userIndex],
// // //     nas: 40,
// // //     mergejil: 'Teacher'
// // // }

// // // db = newDB;


// // // let hj = [6,34,23,2,5,7]

// // // let numIndex = hj.findIndex(el => el === 7);

// // console.log(5 > 6) 


// Loop, DOM, Algorithm, Functions, RegEX


// Portfolio - HTML, CSS, JS

// ToDo, Banker, Calculator, Togloom
// Canvas - JS => Togloom

// for , forEach , for of , for in
// while, do while

// loop ehleh tseg; nuhtsul; i++ (0-100)


// for(let i = 0; i < 100; i++){ // i = i + 1
//     console.log(i);
// }

// let arr = [
//     {
//         ner: 'Zaya',
//         nas: 13,
//         hobby: 'Nom unshih',
//         amBul: 4,
//         huis: 'em'
//     },

//     {
//         ner: 'Enh-Mandakh',
//         nas: 12,
//         hobby: 'Togloom togloh',
//         amBul: 3,
//         huis: 'er'
//     },

//     {
//         ner: 'Oyu',
//         nas: 13,
//         hobby: 'Kino uzeh',
//         amBul: 5,
//         huis: 'em'
//     },

//     {
//         ner: 'Zorig',
//         nas: 12,
//         hobby: 'Nom unshih',
//         amBul: 3,
//         huis: 'er'
//     }
// ]; // 7а ангид сурж буй хүүхдүүд...

// arr.forEach(function(el, arg2){ // тус бүрд нь
//     if(el.huis === 'em'){
//         console.log(el);
//     }
// })

// DOM - elements

// create, remove
// createElement, insertAdjacentHTML


// appendChild, append - child element uusgene;
// remove () - tuhain elementiig ustgana

const addBtn = document.querySelector('#add');
const modal = document.querySelector('.modal');
const container = document.createElement('div');
container.className = "container";

document.body.appendChild(container);

addBtn.onclick = () => {

    let random1 = Math.trunc(Math.random() * 256);
    let random2 = Math.trunc(Math.random() * 256);
    let random3 = Math.trunc(Math.random() * 256);

    let newBox = document.createElement('div');
    let delBtn = document.createElement('button');

    delBtn.className = 'deleteBtn';
    delBtn.textContent = "x";
    newBox.appendChild(delBtn);

    newBox.className = "box";

    newBox.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;

    container.appendChild(newBox);

    delBtn.addEventListener('click', e => {
        e.target.parentNode.remove();
    });

    newBox.addEventListener('click', e => {

        modal.children[0].style.backgroundColor = e.target.style.backgroundColor;
        modal.classList.add('open');
    })

}


document.addEventListener('click', e => {
    if(e.target.classList.contains('open')){
        e.target.classList.remove('open');
    }
})