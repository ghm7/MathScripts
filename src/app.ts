import { argv } from 'node:process';

import getFactors from './utils/getFactors.js';
import isPrime from './utils/isPrime.js';
import getPrimeFactorization from './utils/getPrimeFactorization.js';

const num: number = argv[2] ? parseInt(argv[2]) : -1;

console.log(`Factors of ${num}:`, getFactors(num));
console.log(`${num} is prime:`, isPrime(num));
console.log(
  `The prime factorization of ${num} is ${getPrimeFactorization(num)}`
);
