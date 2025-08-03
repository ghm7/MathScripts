import getFactors from './getFactors.js';

describe('getFactors', () => {
  test('factors of 32', () => {
    expect(getFactors(32)).toEqual([1, 2, 4, 8, 16, 32]);
  });
  test('factors of 78', () => {
    expect(getFactors(78)).toEqual([1, 2, 3, 6, 13, 26, 39, 78]);
  });
  test('factors of 36', () => {
    expect(getFactors(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
  });
  test('factors of 45', () => {
    expect(getFactors(45)).toEqual([1, 3, 5, 9, 15, 45]);
  });
  test('factors of 49', () => {
    expect(getFactors(49)).toEqual([1, 7, 49]);
  });
  test('factors of 48', () => {
    expect(getFactors(48)).toEqual([1, 2, 3, 4, 6, 8, 12, 16, 24, 48]);
  });
  test('factors of 18', () => {
    expect(getFactors(18)).toEqual([1, 2, 3, 6, 9, 18]);
  });
});
