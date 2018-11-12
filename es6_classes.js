class Human {
  gendor = 'male';

  printGendor = () => console.log(this.gendor);
}

class Person extends Human {
  name = 'takumi';
  gendor = 'female';

  printMyName = () => console.log(this.name);
}

const person = new Person();
person.printMyName();
person.printGendor();
