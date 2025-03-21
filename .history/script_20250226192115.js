'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

Data;
const account1 = {
  owner: 'Vyom Gor',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'John Doe',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  movements.forEach(function (val, index) {

    const type = val > 0 ? "deposit"

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--deposit">${i + 1}</div>
        <div class="movements__value">${val}</div>
    </div>`;
  });
};

displayMovements(account1.movements);

// to convert the username to first letter

const usr = 'Vyom Gor'; // vg
const createUsername = usr => {
  usr.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(m => m[0])
      .join('');
  });
};
createUsername(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// Splice
// let arr2 = ['a', 'b', 'c', 'd', 'e'];
// arr2.splice(1, 3);
// console.log(arr2);

//reverse
// let arr3 = ['a', 'b', 'c', 'd', 'e'];
// arr3.reverse();
// console.log(arr3);

// const arr4 = [23, 11, 65];
// console.log(arr4[0]);
// console.log(arr4.at(0));

// console.log(arr4[arr4.length - 1]);
// console.log(arr4.slice(-1)[0]);
// console.log(arr4.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('----FOREACH----');
// movements.forEach(movement => {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['INR', 'Indian Rupees'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(value, key, map => {
//   console.log(`${key}: ${value}`);
// });

// const check = function (dogs, cats) {
//   const dogsCorected = dogs.slice();
//   dogsCorected.splice(0, 1);
//   dogsCorected.splice(-2);

//   const dog = dogsCorected.concat(cats);
//   dog.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// check([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;
// const movementsUSD = movements.map(mov => {
//   return mov * euroToUsd;
// });
// console.log(movements);
// movementsUSD.fixed(2);
// console.log(movementsUSD);

// movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}:  You  ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movements);
