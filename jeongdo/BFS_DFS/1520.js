let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;

const [M, N] = input[count++].split(' ').map(Number);
let graph = [];

for(let i=0; i<M; i++){
    const element= input[count++].split(' ').map(Number);
    graph.push(element);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let dp = Array.from({length:M}, () => Array(N).fill(-1));

const DFS = (y, x) => {
    if(y === M-1 && x === N-1){ 
        return 1
    }

    if(dp[y][x] !== -1){    // 이미 방문한 경우
        return dp[y][x]
    }

    dp[y][x] = 0;   // 방문

    for(let i=0; i<4; i++){
        const next_y = y + dy[i];
        const next_x = x + dx[i]; 
        if(next_y >= 0 && next_y < M && next_x >= 0 && next_x < N){
            if(graph[next_y][next_x] < graph[y][x]){
                dp[y][x] += DFS(next_y, next_x);
            }
        }
    }

    return dp[y][x]
}

DFS(0, 0);
console.log(dp[0][0]);