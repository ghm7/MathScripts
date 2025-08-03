import getFactors from './getFactors.js';

function isPrime(n: number, factors: Array<number> = []): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;

  factors = getFactors(n);

  return factors.length === 2;
}

export default isPrime;
