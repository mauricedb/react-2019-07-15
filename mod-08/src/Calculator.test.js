import Calculator from "./Calculator";

test("A first test", () => {
  expect(1).toBe(1);
});

describe("The calulator", () => {
  let calc;

  beforeAll(() => {
    calc = new Calculator();
  });

  describe("addition", () => {
    test("1 + 1 === 2", () => {
      const sum = calc.add(1, 1);
      expect(sum).toBe(2);
    });

    test("0.1 + 0.2 === 0.3", () => {
      const sum = calc.add(0.1, 0.2);
      expect(sum).toBeCloseTo(0.3, 15);
    });
  });

  describe("subtraction", () => {
    test("1 - 1 === 0", () => {
      const diff = calc.subtract(1, 1);
      expect(diff).toBe(0);
    });
  });
});
