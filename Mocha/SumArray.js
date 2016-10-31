function sum(arr) {
  let sum = 0;
  for (num of arr)
    sum += Number(num);
  return sum;
}

console.log('2')
module.exports = {sum}