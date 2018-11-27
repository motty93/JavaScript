const person = {
  name: 'max',
  age: 29
};

const secondPerson = person;

person.name = 'manu';

// 要素のコピーではなく、ポインターになる
console.log(secondPerson);

const thirdPerson = {
  ...person
};

person.age = 100;

// 変わらない
console.log(thirdPerson);
