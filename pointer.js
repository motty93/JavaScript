const person = {
  name: 'max',
  age: 29
};

// ポインターをコピーしている
const secondPerson = person;

person.name = 'manu';

console.log(secondPerson);

const thirdPerson = {
  ...person
};

person.age = 100;

// 変わらない
console.log(thirdPerson);
