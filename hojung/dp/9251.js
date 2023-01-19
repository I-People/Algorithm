const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sub1 = "0" + input[0].trim(); //for문이 1부터 시작하므로 칸을 맞추기위해 앞에 의미없는 0을 붙임
const sub2 = "0" + input[1].trim();
let lcs = Array.from({ length: sub1.length }, () => Array(sub2.length).fill(0));

for (let i = 1; i < sub1.length; i++) {
  for (let j = 1; j < sub2.length; j++) {
    if (sub1[i] === sub2[j]) {
      lcs[i][j] = lcs[i - 1][j - 1] + 1;
    } else {
      lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
    }
  }
}

console.log(lcs[sub1.length - 1][sub2.length - 1]);
