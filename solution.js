var isSolution = function (s) {
  let arr = s
    .trim()
    .split(" ")
    .filter((el) => el !== "");

  return arr[arr.length - 1].length;
};

console.log(isSolution("   fly me   to   the moon  "));
