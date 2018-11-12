class Human {
  constructor() {
    this.gendor = 'male';
  }

  printGendor() {
    console.log(this.gendor);
  }
}

// Humanを継承
class Person extends Human {
  // 親クラスで初期化処理をしている場合はsuperメソッドが必要
  constructor() {
    super();
    this.name = 'takumi';
    this.gendor = 'female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGendor();
