var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    let newArr = nums.sort((a, b) => a - b);
    return newArr.indexOf(target);
  }
};
