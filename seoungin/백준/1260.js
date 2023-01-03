const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ");

const edge = input.map((v) => v.split(" "));

const visited = new Array(N).fill(false);

const dfs = (curNode, curArray) => {
  //종료 조건
  if (curArray.length == N) {
    console.log(curArray.join(" "));
    return;
  }
  //다음으로 넘어갈 조건
  for (let i = 0; i < edge.length; i++) {
    if (edge[i][0] === curNode && !visited[i]) {
      visited[i] = true;
      if (!curArray.includes(edge[i][1]))
        dfs(edge[i][1], [...curArray, edge[i][1]]);
    } else if (edge[i][1] === curNode && !visited[i]) {
      visited[i] = true;
      if (!curArray.includes(edge[i][0]))
        dfs(edge[i][0], [...curArray, edge[i][0]]);
    }
  }
};

const bfs = (curNode) => {
  const queue = [curNode]; // curNode와 현재 노드를 포함한 배열을 반환
  const curArray = [curNode];
  while (queue.length > 0) {
    const curNode = queue.shift();

    if (curArray.length == N) {
      // 종료 조건
      break;
    }
    // 다음 조건

    for (let i = 0; i < edge.length; i++) {
      if (edge[i][0] === curNode) {
        if (!curArray.includes(edge[i][1])) {
          queue.push(edge[i][1]);
          curArray.push(edge[i][1]);
        }
      } else if (edge[i][1] === curNode) {
        if (!curArray.includes(edge[i][0])) {
          queue.push(edge[i][0]);
          curArray.push(edge[i][0]);
        }
      }
    }
  }
  console.log(curArray.join(" "));
};

dfs(V, [V]);
bfs(V);
