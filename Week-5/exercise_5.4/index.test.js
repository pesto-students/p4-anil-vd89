// test the app 

const MathOperations = require('./MathOperations');

describe("Math operations testing", () => {
    test("Should Pass Addition test a = 20, b = 13 returns 33", () => {
      let res = MathOperations.sum(20, 13);
      expect(res).toBe(33);
    });
  
    test("Should Pass Subtraction test a = 20, b = 13 returns 7", () => {
      let res = MathOperations.diff(20, 13);
      expect(res).toBe(7);
    });
    test("Should Pass Subtraction test a = 13, b = 20 returns -7", () => {
      let res = MathOperations.diff(13, 20);
      expect(res).toBe(-7);
    });
    test("Should Pass Addition test a = 20, b = 13 returns 260", () => {
      let res = MathOperations.product(20, 13);
      expect(res).toBe(260);
    });
  });