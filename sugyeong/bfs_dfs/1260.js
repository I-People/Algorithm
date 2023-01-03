const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : `1000 1 1000
999 1000`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const dfs = (startVertex) => {
  const visitedVertices = new Array(N + 1).fill(false);
  const stackNodeList = [startVertex];
  const dfsList = [];

  while (stackNodeList.length) {
    let vertex = stackNodeList.pop();

    if (visitedVertices[vertex]) continue;
    visitedVertices[vertex] = true;

    dfsList.push(vertex);

    let sortedGraph = graph[vertex].sort((a, b) => b - a);
    for (let nextVertex of sortedGraph) {
      stackNodeList.push(nextVertex);
    }
  }

  return dfsList;
};

const bfs = (startVertex) => {
  const visitedVertices = new Array(N + 1).fill(false);
  const queueNodeList = [startVertex];
  const bfsList = [];

  while (queueNodeList.length) {
    let vertex = queueNodeList.shift();

    if (visitedVertices[vertex]) continue;
    visitedVertices[vertex] = true;

    bfsList.push(vertex);

    let sortedGraph = graph[vertex].sort((a, b) => a - b);
    for (let nextVertex of sortedGraph) {
      queueNodeList.push(nextVertex);
    }
  }

  return bfsList;
};

const [N, M, V] = input().split(' ').map(Number);
const graph = Array.from(new Array(N + 1), () => new Array());
for (let i = 0; i < M; i++) {
  const [vertexA, vertexB] = input().split(' ').map(Number);

  graph[vertexA].push(vertexB);
  graph[vertexB].push(vertexA);
}

console.log(dfs(V).join(' '));
console.log(bfs(V).join(' '));
