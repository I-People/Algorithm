const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `4 5
50 45 37 32 30
35 50 40 20 25
30 30 25 17 28
27 24 22 15 10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

const DFS = (x, y) => {
  const stack = [[x, y, map[x][y]]];

  visited[x][y] = 1;

  while (stack.length) {
    const [x, y] = stack.pop();
    const currentHeight = map[x][y];

    if (x === M - 1 && y === N - 1) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= M || nx < 0 || ny >= N || ny < 0) {
        continue;
      }
      if (currentHeight <= map[nx][ny]) {
        continue;
      }

      if (!visited[nx][ny]) {
        stack.push([nx, ny, map[nx][ny]]);
        stack.sort((a, b) => a[2] - b[2]);
      }
      visited[nx][ny] += visited[x][y];
    }
  }
};

const [M, N] = input().split(' ').map(Number);
const map = Array.from(Array(M), () => input().split(' ').map(Number));
const visited = Array.from(Array(M), () => Array(N).fill(0));

DFS(0, 0);
console.log(visited[M - 1][N - 1]);
