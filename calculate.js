const numbers = [1, 2, 3];

const doubleNumArray = numbers.map( num => num * 2 );

const tripleNumArray = numbers.map((num) => {
  return num * 3;
});

console.log(numbers);
console.log(doubleNumArray);
console.log(tripleNumArray);
