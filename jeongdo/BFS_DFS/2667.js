let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
const N = Number(input[count++]);

let graph = [];
let answer = [];
let total = 0;
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

for(let i=0; i<N; i++){
    const element = Array.from(input[count++]);
    graph.push(element);
}

const BFS = (y, x) => {
    let count = 0;
    let queue = [];
    queue.push([y, x]);
    graph[y][x] = '0';
    while(queue.length > 0){
        let [crnt_y, crnt_x] = queue.shift();
        count += 1;
        for(let i=0; i<4; i++){
            const [next_y, next_x] = [dy[i] + crnt_y, dx[i] + crnt_x];
            if(next_y >= 0 && next_y < N && next_x >= 0 && next_x < N){
                if(graph[next_y][next_x] === '1'){
                    queue.push([next_y, next_x]);
                    graph[next_y][next_x] = '0';
                }
            }
        }
    }
    answer.push(count);
}

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(graph[i][j] === "1"){
            BFS(i, j);
            total += 1;
        }
    }
}


console.log(total);
console.log(answer.sort((a, b) => a-b).join('\n'));