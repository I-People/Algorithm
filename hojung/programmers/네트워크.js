function solution(n, computers) {
  let visited = Array(n).fill(0);
  let result = [];

  const dfs = v => {
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0 && computers[v][i] === 1) {
        visited[i] = 1;
        result.push(i);
        dfs(i);
      }
    }
  };
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      dfs(i);
      visited[i] = 1;
      result.push(i);
      answer++;
    }
  }

  return answer;
}
