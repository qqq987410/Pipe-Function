// Example continued
const _pipe = (a, b) => (arg) => b(a(arg));
const pipe = (...ops) => ops.reduce(_pipe);

const calcTotalWithTax = (pizzaCost) => pizzaCost * 1.13;
const costForTwo = (itemCost) => Math.round((itemCost / 2) * 100) / 100;
const cadToUSD = (cad) => Math.round(cad * 0.753653 * 100) / 100;
const costPerPersonUsd = pipe(calcTotalWithTax, costForTwo, cadToUSD);

console.log(costPerPersonUsd(5)); // $2.13
