// Array 중복 아이템 삭제

// 1. Set()

const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);

// console.log(mySet);

// const uniqueNums = [...new Set(nums)];
// console.log(uniqueNums);

// 2. indexOf()

const uniqueNums = nums.filter((item, position) => {
  return nums.indexOf(item) === position;
});

console.log(uniqueNums);
