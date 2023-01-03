const fs = require("fs");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const map = input.slice(1).map((v) => v.split("").map((k) => +k));

let visited = new Array(map.length);
for (let i = 0; i < Number(map.length); i++) {
  visited[i] = [];
  for (let j = 0; j < map.length; j++) {
    visited[i].push(false);
  }
}
let temp = [1];
const answer = [];

const dfs = (i, j, count) => {
  // i가 아래로 j가 왼쪽으로 이동합니다
  //console.log(i + " " + j + " " + count);
  //console.log(temp);
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  for (let k = 0; k < 4; k++) {
    const xx = i + dy[k];
    const yy = j + dx[k];

    if (0 <= yy && yy < map.length && 0 <= xx && xx < map.length) {
      // 범위만 확인
      if (map[xx][yy] > 0) {
        map[xx][yy] = 0;
        temp.push(temp[0] + 1);
        temp.sort((a, b) => b - a);
        dfs(xx, yy, count + 1);
      }
    }
  }
};

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map.length; j++) {
    if (!visited[i][j] && map[i][j] > 0) {
      dfs(i, j, 1);
      if (temp.length > 0) answer.push(temp.sort((a, b) => b - a)[0] - 1);
      temp = [1];
    }
  }
}

console.log(answer.length);
answer
  .sort((a, b) => a - b)
  .map((v) => {
    console.log(v);
  });
