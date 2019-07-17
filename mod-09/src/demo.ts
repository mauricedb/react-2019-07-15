class Calculator {
  add(x: number, y: number) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator();

add.addEventListener("click", () => {
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator.subtract(x.value, y.value).toString();
});

// interface HasName {
//   name: string
// }

class Cat {
  // name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  constructor(public readonly name: string) {}

  eat() {
    console.log(this.name + " is eating");
  }
}

const zorro = new Cat("Zorro");
zorro.eat();

(zorro as any).name = "Foo";
zorro.eat();

const foo = {
  x: 1,
  n: ""
};

type Foo = typeof foo;

const bar: Foo = { x: 33, n: "ssss" };

type ReadonlyFoo = Readonly<Foo | Cat>;

function printName(o: { name?: string | number }) {
  if (o.name) {
    console.log(o.name);
  }
}

printName(zorro);

const person = { name: "Maurice" };
printName(person);

printName({ name: 42 });
// printName({name:true})
