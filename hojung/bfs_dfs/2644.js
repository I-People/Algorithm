const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const [n1, n2] = input[1].split(" ").map(Number);
const m = +input[2];

let board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 3; i < 3 + m; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  board[x][y] = 1;
  board[y][x] = 1;
}
let visited = Array(n + 1).fill(0);
const bfs = (start, end) => {
  let queue = [];
  let isChon = false;
  visited[start] = 1;
  queue.push([start, 0]);

  while (queue.length > 0) {
    let [x, answer] = queue.shift();
    if (x === end) {
      console.log(answer);
      isChon = true;
      queue = [];
      break;
    }

    for (let i = 1; i <= n; i++) {
      if (board[x][i] === 1 && visited[i] === 0) {
        visited[i] = 1;
        queue.push([i, answer + 1]);
      }
    }
  }
  if (!isChon) {
    console.log(-1);
  }
};
bfs(n1, n2);
