import getPrimeFactorization from './getPrimeFactorization.js';

describe('getPrimeFactorization', () => {
  test('Prime factor of 1', () => {
    expect(() => getPrimeFactorization(1)).toThrow(
      'Input must be a positive integer greater than 1.'
    );
  });
  test('Prime factor of 36', () => {
    expect(getPrimeFactorization(36)).toEqual([2, 2, 3, 3]);
  });
  test('Prime factor of 30', () => {
    expect(getPrimeFactorization(30)).toEqual([2, 3, 5]);
  });
  test('Prime factor of 73', () => {
    expect(getPrimeFactorization(73)).toEqual([73]);
  });
  test('Prime factor of 37', () => {
    expect(getPrimeFactorization(37)).toEqual([37]);
  });
  test('Prime factor of 87', () => {
    expect(getPrimeFactorization(87)).toEqual([3, 29]);
  });
  test('Prime factor of 31', () => {
    expect(getPrimeFactorization(31)).toEqual([31]);
  });
  test('Prime factor of 81', () => {
    expect(getPrimeFactorization(81)).toEqual([3, 3, 3, 3]);
  });
  test('Prime factor of 7', () => {
    expect(getPrimeFactorization(7)).toEqual([7]);
  });
  test('Prime factor of 92', () => {
    expect(getPrimeFactorization(92)).toEqual([2, 2, 23]);
  });
  test('Prime factor of 43', () => {
    expect(getPrimeFactorization(43)).toEqual([43]);
  });
});
