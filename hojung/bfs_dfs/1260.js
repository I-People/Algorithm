const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, v] = input[0].split(" ").map(Number);

let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

let visitedD = Array(n + 1).fill(0);
let visitedB = Array(n + 1).fill(0);
let resultD = [];
let resultB = [];

visitedD[v] = 1;
resultD.push(v);

const dfs = v => {
  for (let i = 1; i <= n; i++) {
    if (graph[v][i] === 1 && visitedD[i] === 0) {
      visitedD[i] = 1;
      resultD.push(i);
      dfs(i);
    }
  }
};

dfs(v);
console.log(resultD.join(" "));

const bfs = v => {
  let queue = [];
  queue.push(v);
  resultB.push(v);
  visitedB[v] = 1;

  while (queue.length > 0) {
    let x = queue.shift();
    for (let i = 1; i <= n; i++) {
      if (graph[x][i] === 1 && visitedB[i] === 0) {
        queue.push(i);
        visitedB[i] = 1;
        resultB.push(i);
      }
    }
  }
};

bfs(v);
console.log(resultB.join(" "));
