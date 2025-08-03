function getFactors(n: number): Array<number> {
  const factors: Array<number> = [];
  factors.push(1, n);

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

export default getFactors;
