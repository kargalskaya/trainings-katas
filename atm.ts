const nominals: number[] = [10, 50, 100, 500, 1000, 5000];
const limits: number[] = [1, 6, 4, 3, 2, 5];

/**
 * ATM
 *
 * @param {number} amount
 * @param {number[]} nominals
 * @param {number[]} limits
 * @returns {string[]} Returns format ['Nx3', 'Nx4', 'Nx1']
 */
function atm(amount: number, nominals: number[], limits: number[]): string[] {
  const result: string[] = [];
  let balance = amount;

  nominals.reverse().forEach((nominal: number, i: number) => {
    const countsOfBanknotes = Math.floor(balance / nominal);
    const sumOfCoupure = countsOfBanknotes * nominal;

    if (countsOfBanknotes > 0 && limits[i] >= countsOfBanknotes) {
      balance = balance - sumOfCoupure;
      result.push(`${nominal}x${countsOfBanknotes}`);
      limits[i] = limits[i] - countsOfBanknotes;
    }
  });

  if (balance > 0) {
    console.log("Not enough banknotes");
    return [];
  }

  return result;
}

// ['1000x6', '500x1', '100x2', '50x1', '10x3']
console.log(atm(6780, nominals, limits));
