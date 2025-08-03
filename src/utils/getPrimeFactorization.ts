import getFactors from './getFactors.js';

function getPrimeFactorization(n: number): Array<number> {
  if (n <= 1) {
    throw new Error('Input must be a positive integer greater than 1.');
  }

  const primeFactors: Array<number> = [];
  const cleanedPrimeFactors: Array<number> = [];
  const firstPrimeFactor: number | undefined = getFactors(n).find((f) => f > 1);

  if (firstPrimeFactor === n) {
    return [n];
  }

  if (!firstPrimeFactor) {
    return [-1];
  }

  let quotient: number = 0;
  let divisor: number | undefined = firstPrimeFactor;
  let dividend: number = n;

  primeFactors.push(divisor);

  while (divisor) {
    quotient = dividend / divisor!;
    dividend = quotient;
    divisor = getFactors(quotient).find((f) => f > 1);

    primeFactors.push(divisor!);
  }

  cleanedPrimeFactors.push(...primeFactors.filter((f) => f > 1));

  return cleanedPrimeFactors;
}

export default getPrimeFactorization;
