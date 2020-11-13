import { DPFibonacci } from "./index";

describe("My fibonacci program", () => {
  describe("Calling function with valid inputs", () => {
    it("should not throw any kind of errors", async function () {
      expect(await DPFibonacci(1)).toBe(1);
      expect(await DPFibonacci(2)).toBe(1);
      expect(await DPFibonacci(3)).toBe(2);
      expect(await DPFibonacci(5)).toBe(5);
      expect(await DPFibonacci(10)).toBe(55);
    });
  });

  describe("calling functions with invalid inputs", () => {
    it("should return invalid input", async function () {
      expect(await DPFibonacci(-1)).toBe("invalid input");
    });
  });
});
