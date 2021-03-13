// 'use strict';
// const miat = {
//     companyName: "МИАТ",
//     price: '350$',
//     bookings: [],
//     booking(flightNumber, customerName){
//         console.log(`${this.companyName} компанийн 
//         ${flightNumber} дугаартай нислэгийн тасалбарыг 
//         ${customerName} үйлчлүүлэгч ${this.price}-р худалдаж авлаа.`
//         );
//         this.bookings.push({
//             flightNumber: `${flightNumber}`,
//             customerName: `${customerName}`
//         });
//     }
// }

// const hunnuAir = {
//     companyName: "Hunnu Air",
//     price: '400$',
//     bookings: [],
// }

// const turkishAirLine = {
//     companyName: 'Turkish Airline',
//     price: '800$',
//     bookings: [],
// }

// const book = miat.booking;

// const bookMIAT = book.bind(miat);
// const bookHunnu = book.bind(hunnuAir);
// const bookTurkey = book.bind(turkishAirLine);

// bookMIAT(45, 'Narada');
// bookHunnu(369, 'John');
// bookTurkey(521, 'Sara');

// const zahialga = [963, 'Narada'];

// book.call(miat, ...zahialga); // es6 spread operator


// // book.call(turkishAirLine, 241, 'Narada');

// IIFE - Immediately Invoked Function Expressions

// ()()