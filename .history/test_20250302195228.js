const checkDog = (dogsJuliya, dogsKate) => {
  const dogsJuliyaCorrected = dogsJuliya.slice();
  dogsJuliyaCorrected.splice(0, 1);
  dogsJuliyaCorrected.splice(-2);
  console.log(dogsJuliyaCorrected);

  const dogs = dogsJuliyaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      
    }
  })
};

checkDog([1, 2, 5, 8, 6], [9, 8, 2, 4, 6]);
