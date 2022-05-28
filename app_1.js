// Implementing a Pipe Function
const calcTotalWithTax = (pizzaCost) => pizzaCost * 1.13; // tax is 13%
const costForTwo = (itemCost) => Math.round((itemCost / 2) * 100) / 100;
const pipe = (op1, op2) => {
  return (arg) => {
    const result1 = op1(arg);
    return op2(result1);
  };
};
const splitTotalCost = pipe(calcTotalWithTax, costForTwo);

console.log(splitTotalCost(5)); // 2.83
