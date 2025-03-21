// const checkDog = (dogsJuliya, dogsKate) => {
//   const dogsJuliyaCorrected = dogsJuliya.slice();
//   dogsJuliyaCorrected.splice(0, 1);
//   dogsJuliyaCorrected.splice(-2);
//   console.log(dogsJuliyaCorrected);

//   const dogs = dogsJuliyaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDog([1, 2, 5, 8, 6], [9, 8, 2, 4, 6]);

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

// const movements = [1, 200, 450, -400, 3000, -650, -130, 70, 1300];

// const usdToInr = 80;
// const final = movements.map(mov => {
//   return mov * usdToInr;
// });

// console.log(final);

// const move = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(move);

const calAverageHumanAge = () => {
  
}