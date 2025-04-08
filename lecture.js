function solution(str) {
  let regex = /[^0-9]/g;
  return parseInt(str.replace(regex, ""));
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
