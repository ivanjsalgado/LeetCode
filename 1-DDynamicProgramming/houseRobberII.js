const rob = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const calculateMoney = (start, end, moneyArr) => {
    moneyArr[0] = nums[start];
    moneyArr[1] = Math.max(nums[start], nums[start + 1]);
    let p = 2;
    for (let i = start + 2; i <= end; i++) {
      moneyArr[p] = Math.max(moneyArr[p - 1], nums[i] + moneyArr[p - 2]);
      p++;
    }
    return Math.max(
      moneyArr[moneyArr.length - 1],
      moneyArr[moneyArr.length - 2]
    );
  };
  let pathOne = calculateMoney(0, nums.length - 2, []);
  let pathTwo = calculateMoney(1, nums.length - 1, []);
  return Math.max(pathOne, pathTwo);
};

// console.log(rob([1, 2, 3, 1]));
console.log(rob([200, 3, 140, 20, 10])); // 340
