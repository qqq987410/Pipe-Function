// Accepting More Than Two Functions
const _pipe = (a, b) => (arg) => b(a(arg));

const pipe = (...ops) => {
  let bundle = ops.reduce((prevOp, nextOp) => {
    return _pipe(prevOp, nextOp);
  });
  return bundle;
};
