import isPrime from './isPrime.js';

describe('isPrime', () => {
  test('1 is not prime', () => {
    expect(isPrime(1)).toBe(false);
  });
  test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });
  test('3 is prime', () => {
    expect(isPrime(3)).toBe(true);
  });
  test('4 is not prime', () => {
    expect(isPrime(4)).toBe(false);
  });
  test('4 is not prime', () => {
    expect(isPrime(4)).toBe(false);
  });
  test('11 is prime', () => {
    expect(isPrime(11)).toBe(true);
  });
  test('15 is not prime', () => {
    expect(isPrime(15)).toBe(false);
  });
  test('21 is not prime', () => {
    expect(isPrime(21)).toBe(false);
  });
  test('56 is not prime', () => {
    expect(isPrime(56)).toBe(false);
  });
  test('57 is not prime', () => {
    expect(isPrime(57)).toBe(false);
  });
  test('35 is not prime', () => {
    expect(isPrime(35)).toBe(false);
  });
  test('47 is prime', () => {
    expect(isPrime(47)).toBe(true);
  });
  test('55 is not prime', () => {
    expect(isPrime(55)).toBe(false);
  });
  test('60 is not prime', () => {
    expect(isPrime(60)).toBe(false);
  });
  test('87 is not prime', () => {
    expect(isPrime(87)).toBe(false);
  });
});
