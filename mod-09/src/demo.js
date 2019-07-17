var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
var x = document.getElementById("x");
var y = document.getElementById("y");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var result = document.getElementById("result");
var calculator = new Calculator();
add.addEventListener("click", function () {
    result.textContent = calculator.add(+x.value, +y.value).toString();
});
subtract.addEventListener("click", function () {
    result.textContent = calculator.subtract(x.value, y.value).toString();
});
// interface HasName {
//   name: string
// }
var Cat = /** @class */ (function () {
    // name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    return Cat;
}());
var zorro = new Cat("Zorro");
zorro.eat();
zorro.name = "Foo";
zorro.eat();
var foo = {
    x: 1,
    n: ""
};
var bar = { x: 33, n: "ssss" };
function printName(o) {
    if (o.name) {
        console.log(o.name);
    }
}
printName(zorro);
var person = { name: "Maurice" };
printName(person);
printName({ name: 42 });
// printName({name:true})
