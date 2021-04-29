// Async JS

// Promise => ireeduid ymar ng ur dun zaaval butsaana

// Blocking
// Non-Blocking

// Synchronous
// function1
// function2 - API (5 - 10 seconds)
// function3
// function4



// Async => Non-Blocking
// function1
// function2 - API (callback)
// function3
// function4
// callback

const getData = () => {
    return new Promise((resolve, reject) => {
        const userData = fetch('https://api.covid19api.com/summary');
        userData.then(response => resolve(response.json()))
    })
}

getData()
    .then(res => {
        let stran = res.Countries.find(el => {
            return el.Country === 'United States of America';
        })

        console.log(stran)
    });