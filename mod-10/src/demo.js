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
var add = document.getElementById("add2");
var subtract = document.getElementById("subtract");
var result = document.getElementById("result");
var calculator = new Calculator();
if (add && result) {
    add.addEventListener("click", function () {
        result.textContent = calculator.add(+x.value, +y.value).toString();
    });
}
else {
    console.warn("Require an add and result");
}
subtract &&
    subtract.addEventListener("click", function () {
        if (result)
            result.textContent = calculator.subtract(+x.value, +y.value).toString();
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
    console.log(o.name);
}
printName(zorro);
var person = { name: "Maurice" };
printName(person);
var Values;
(function (Values) {
    Values[Values["one"] = 0] = "one";
    Values[Values["two"] = 1] = "two";
    // three
})(Values || (Values = {}));
function doStuff(value) {
    if (value === Values.one) {
        console.log("One");
    }
    else if (value === Values.two) {
        console.log("Two");
    }
    else {
        var x_1 = value;
        throw new Error("UNkown value" + value);
    }
}
doStuff(Values.two);
function doMore(option) {
    return "";
}
doMore({ x: 1 });
var o = { x: 1 };
doMore(o);
