function solution(s, t) {
  let indexes = [];
  let i = -1;

  while ((i = s.indexOf(t, i + 1)) !== -1) {
    indexes.push(i);
  }

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      arr.push(0);
    } else {
      let diff = indexes.map((el) => Math.abs(el - i));
      arr.push(Math.min(...diff));
    }
  }
  return arr;
}

console.log(solution("teachermode", "e"));
