function getFactors(n: number): Array<number> {
  const factors: Array<number> = [];
  factors.push(1, n);

  for (let i = 2; i <= n; i++) {
    if (i === n) continue;
    if (factors.includes(i)) continue;

    if (n % i === 0) {
      factors.push(i);
      factors.push(n / i);
    }
  }

  return [...new Set(factors.sort((a, b) => a - b))];
}

export default getFactors;
