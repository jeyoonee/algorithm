var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry) {
    let digitA = i >= 0 ? parseInt(a[i]) : 0;
    let digitB = j >= 0 ? parseInt(b[i]) : 0;

    let sum = digitA + digitB + carry;
    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result.join("");
};

console.log(addBinary("1010", "1011"));
