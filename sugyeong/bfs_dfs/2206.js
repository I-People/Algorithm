const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `6 4
0100
1110
1000
0000
0111
0000`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const solve = (startX, startY, isBroke) => {
  const visited = Array.from(new Array(N), () => new Array());
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = new Array(2).fill(0);
    }
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const queue = [[startX, startY, isBroke]];
  let queueCursor = 0;

  visited[startX][startY][isBroke] = 1;

  while (queue.length > queueCursor) {
    const [x, y, isBroke] = queue[queueCursor++];

    if (x === N - 1 && y === M - 1) return visited[x][y][isBroke];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (!map[nx][ny] && !visited[nx][ny][isBroke]) {
        queue.push([nx, ny, isBroke]);
        visited[nx][ny][isBroke] = visited[x][y][isBroke] + 1;
      }

      if (map[nx][ny] && !isBroke) {
        queue.push([nx, ny, isBroke + 1]);
        visited[nx][ny][isBroke + 1] = visited[x][y][isBroke] + 1;
      }
    }
  }

  return -1;
};

const [N, M] = input().split(' ').map(Number);
const map = Array.from(new Array(N), () => input().split('').map(Number));

console.log(solve(0, 0, 0));
