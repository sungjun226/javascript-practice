let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers);