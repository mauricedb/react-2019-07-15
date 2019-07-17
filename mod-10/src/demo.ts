class Calculator {
  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = document.getElementById("y") as HTMLInputElement;
const add = document.getElementById("add2");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator();

if (add && result) {
  add.addEventListener("click", () => {
    result.textContent = calculator.add(+x.value, +y.value).toString();
  });
} else {
  console.warn("Require an add and result");
}

subtract &&
  subtract.addEventListener("click", () => {
    if (result)
      result.textContent = calculator.subtract(+x.value, +y.value).toString();
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

function printName(o: { name: string }) {
  console.log(o.name);
}

printName(zorro);

const person = { name: "Maurice" };
printName(person);

enum Values {
  one,
  two
  // three
}

function doStuff(value: Values) {
  if (value === Values.one) {
    console.log("One");
  } else if (value === Values.two) {
    console.log("Two");
  } else {
    const x: never = value;
    throw new Error("UNkown value" + value);
  }
}

doStuff(Values.two);

function doMore(option: { x: 1 | "yes" | true }) {
  return "";
}

doMore({ x: 1 });

type Option = Parameters<typeof doMore>[0];

const o: Option = { x: 1 };
doMore(o);
