// setTimeout, setInterval // Async JS

// setTimeout( callback(parameter), 2000 , parameter )   -  1s = 1000ms

// setInterval ( callback() , 2000 );

// call from hell

// const kinoniiNers = ['Avatar' , 'Titanic' , 'Avengers' , 'GOT' , 'Harry Potter'];

// setTimeout((kino) => {
//     const kino1 = {
//         ner: kino,
//         nairuulagch: 'James Cameron'
//     }

//     console.log(`${kino1.ner} киноны найруулагч бол ${kino1.nairuulagch}`);

//     setTimeout((writter) => {
//         const kino2 = {
//             ner: kinoniiNers[1],
//             nairuulagch: writter
//         }

//         console.log(`${kino2.nairuulagch} найруулагчын өөр нэг алдартай бүтээл бол ${kino2.ner}`);

//         setTimeout((writter) => {
//             const kino3 = {
//                 ner: kinoniiNers[2],
//                 nairuulagch: writter
//             }
//             console.log(`${kino3.ner} киноны найруулагч бол ${kino3.nairuulagch}`)
            
//         }, 1000, 'Kevin Feige');

//     }, 1000, kino1.nairuulagch);

// }, 1000, kinoniiNers[0]);


/// data = [{}, {}, {}, {}]

// API

// Async - Promise

// const userContainer = document.querySelector('.users')

// fetch('data/users.json')
//     .then(hariu => {
//         if(!hariu.ok) throw new Error(`Дата хүлээн авахад алдаа гарлаа (${hariu.status})`);
//         return hariu.json();
//     }) 
//     .then(data => {
//         for(let i = 0; i < data.length; i++){
//             userContainer.insertAdjacentHTML('beforeend' , `
//                 <h1>${data[i].name}</h1>
//             `)
//         }
//     })
//     .catch(err => console.log(err));


// 4.19 Promise - Amlalt (biylegdeh, biylegdehgui)
// Promise((resolve, reject))
// const testPromise = () => {
//     return new Promise((amjilttai, amjiltgui) => {

//         amjilttai('Баяр хүргэе...')

//         amjiltgui('Амжилтгүй боллоо дахин оролдоно уу...')

//     })
// }

// testPromise()
// .then(res => console.log(res))
// .catch(err => console.log(err))


// const kinoniiNers = ['Avatar' , 'Titanic' , 'Avengers' , 'GOT' , 'Harry Potter'];

// const kinoniiNer = kinoniiNer => {
//     return new Promise((resolve, reject) => {
//         setTimeout( ner => {
//             const kino = {
//                 ner: ner,
//                 nairuulagch: 'James Cameron'
//             }

//             console.log(`${kino.ner} киноны найруулагч бол ${kino.nairuulagch}`)

//             resolve(kino.nairuulagch);

//         }, 2000, kinoniiNer )
//     })
// }

// const jamesCameron = writter => {
//     return new Promise((resolve, reject) => {
//         setTimeout( zohiogch => {
//             const kino1 = {
//                 ner: kinoniiNers[1],
//                 nairuulagch: zohiogch
//             };

//             resolve(`${kino1.nairuulagch} найруулагчын өөр нэг алдартай бүтээл бол ${kino1.ner}`);
//         } , 2000, writter )
//     })
// }

// // kinoniiNer(kinoniiNers[0])
// // .then(res => {
// //     // console.log(res)
// //     return jamesCameron(res);
// // })
// // .then(another => console.log(another))
// // .catch(err => console.log(err));

// const result = async function(){
//     const firstFunction = await kinoniiNer(kinoniiNers[0]);
//     const secondFunction = await jamesCameron(firstFunction);
//     console.log(secondFunction);
// }

// result()

// 

// .finally()

// setTimeout((kino) => {
//     const kino1 = {
        // ner: kino,
        // nairuulagch: 'James Cameron'
//     }

//     console.log(`${kino1.ner} киноны найруулагч бол ${kino1.nairuulagch}`);

//     setTimeout((writter) => {
//         const kino2 = {
//             ner: kinoniiNers[1],
//             nairuulagch: writter
//         }

//         console.log(`${kino2.nairuulagch} найруулагчын өөр нэг алдартай бүтээл бол ${kino2.ner}`);

//         setTimeout((writter) => {
//             const kino3 = {
//                 ner: kinoniiNers[2],
//                 nairuulagch: writter
//             }
//             console.log(`${kino3.ner} киноны найруулагч бол ${kino3.nairuulagch}`)
            
//         }, 1000, 'Kevin Feige');

//     }, 1000, kino1.nairuulagch);

// }, 1000, kinoniiNers[0]);


// Try Catch

// try {
//     console.lg('bla bla');
// } catch(err) {
//     console.log(err.message)
// }


// Async Await

const userContainer = document.querySelector('.users');
const users = fetch(`https://jsonplaceholder.typicode.com/users`);
const posts = fetch(`https://jsonplaceholder.typicode.com/posts`).then(data => data.json());

users.then(result => result.json())
.then(data => {
    data.forEach(el => {
        const user = document.createElement('h1');
        user.className = `user user-${el.id}`;
        user.textContent = el.name;

        userContainer.appendChild(user);
    });
    return posts
})
.then(post => {
    document.addEventListener('click', e => {
        if(e.target.classList.contains('user')){
            userId = parseInt(e.target.classList[1].split('-')[1]);
            // console.log(userId);

            post.forEach(el => {
                if(el.userId === userId){
                    console.log(el);
                }
            })
        };
    })
})