import getFactors from './getFactors.js';

function getPrimeFactorization(num: number): Array<number> {
  const factors = getFactors(num);

  return factors;
}

export default getPrimeFactorization;
