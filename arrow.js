function printYourName(name) {
  console.log(name);
}

const printMyName = (name, age) => {
  console.log(name, age);
}

printMyName('takumi', 27);

let multiply = number => {
  return number * 2;
}

// multiplyメソッドの再定義（ワンラインで書ける）
multiply = number => number * 2;

console.log(multiply(4));
