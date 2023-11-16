import Calculator from 'app/calculator';
import { Add, Multiply, Substract, Division, Exponential } from './testDataTypes';

describe('Calculator unit tests', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Basic', () => {
    test('Constructor without parameters can be instantiated', () => {
      expect(calculator).toBeInstanceOf(Calculator);
    });
  });

  describe('Math functions', () => {
    describe('Add function', () => {
      const testDataAdd: Add[] = [
        {
          nums: [5],
          expected: 5,
        },
        {
          nums: [],
          expected: null,
        },
        {
          nums: [4, 6, -8],
          expected: 2,
        },
        {
          nums: [4.05, -6.077, 3],
          expected: 0.973,
        },
      ];

      test.each(testDataAdd)('.add($nums) returns $expected', ({ nums, expected }) => {
        const result: number = calculator.add(...nums);
        expect(result).toBe(expected);
      });
    });

    describe('Multiply function', () => {
      const testDataMultiplication: Multiply[] = [
        {
          nums: [5],
          expected: 5,
        },
        {
          nums: [1, -2, -3, 3],
          expected: 18,
        },
        {
          nums: [],
          expected: null,
        },
        {
          nums: [-4, 6, 0],
          expected: 0,
        },
        {
          nums: [4.05, -6.077, 3],
          expected: -73.83555,
        },
      ];

      test.each(testDataMultiplication)(
        '.multiply($nums) returns $expected',
        ({ nums, expected }) => {
          const result: number = calculator.multiply(...nums);
          expect(result).toBe(expected);
        },
      );
    });

    describe('Substraction function', () => {
      const testDataSubtraction: Substract[] = [
        {
          reduced: -5,
          subtrahend: -5,
          expected: 0,
        },
        {
          reduced: 55,
          subtrahend: 65,
          expected: -10,
        },
        {
          reduced: 4.39,
          subtrahend: 2.45,
          expected: 1.94,
        },
        {
          reduced: null,
          subtrahend: null,
          expected: null,
        },
      ];

      test.each(testDataSubtraction)(
        '.subtraction($reduced, $subtrahend) returns $expected',
        ({ reduced, subtrahend, expected }) => {
          const result: number = calculator.subtraction(reduced, subtrahend);
          expect(result).toBe(expected);
        },
      );
    });

    describe('Division function', () => {
      const testDataDivision: Division[] = [
        {
          reduced: -5,
          subtrahend: -5,
          expected: 1,
        },
        {
          reduced: -48,
          subtrahend: -8,
          expected: 6,
        },
        {
          reduced: 5,
          subtrahend: 2,
          expected: 2.5,
        },
        {
          reduced: 5,
          subtrahend: 0,
          expected: 'Cannot divide by zero',
        },
        {
          reduced: null,
          subtrahend: null,
          expected: null,
        },
      ];

      test.each(testDataDivision)(
        '.divide($reduced, $subtrahend) returns $expected',
        ({ reduced, subtrahend, expected }) => {
          const result: number | string = calculator.divide(reduced, subtrahend);
          expect(result).toBe(expected);
        },
      );
    });

    describe('Exponentiation function', () => {
      const testDataExponentiation: Exponential[] = [
        {
          num: -5,
          expected: 25,
        },
        {
          num: 0,
          expected: 0,
        },
        {
          num: null,
          expected: null,
        },
      ];

      test.each(testDataExponentiation)(
        '.exponentiation($num) returns $expected',
        ({ num, expected }) => {
          const result: number = calculator.exponentiation(num);
          expect(result).toBe(expected);
        },
      );
    });
  });
});
