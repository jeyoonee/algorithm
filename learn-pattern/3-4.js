function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(0);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;

  // let indexes = [];
  // let i = -1;

  // while ((i = s.indexOf(t, i + 1)) !== -1) {
  //   indexes.push(i);
  // }

  // let arr = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === t) {
  //     arr.push(0);
  //   } else {
  //     let diff = indexes.map((el) => Math.abs(el - i));
  //     arr.push(Math.min(...diff));
  //   }
  // }
  // return arr;
}

console.log(solution("teachermode", "e"));
