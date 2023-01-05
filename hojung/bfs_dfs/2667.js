const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let board = [];
let result = [];
let visited = Array.from({ length: n }, () => Array(n).fill(0));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
let queue = [];

for (let i = 1; i <= n; i++) {
  board.push(input[i].trim().split("").map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let cnt = 0;
    if (board[i][j] === 1 && visited[i][j] === 0) {
      visited[i][j] = 1;
      queue.push([j, i]);
      cnt++;

      while (queue.length > 0) {
        let [x, y] = queue.shift();

        for (let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
            if (board[ny][nx] === 1 && visited[ny][nx] === 0) {
              visited[ny][nx] = 1;
              queue.push([nx, ny]);
              cnt++;
            }
          }
        }
      }
      result.push(cnt);
    }
  }
}
console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));
