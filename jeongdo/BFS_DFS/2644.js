let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;

const n = Number(input[count++]);
const [A, B] = input[count++].split(' ').map(Number);
const m = Number(input[count++]);

let graph = Array.from({length:n+1}, () => []);

for(let i=0; i<m; i++){
    const [t1, t2] = input[count++].split(' ').map(Number);
    graph[t1].push(t2);
    graph[t2].push(t1)
}

let visit = new Array(n+1).fill(false);
let answer = 0;
let check = false;

const DFS = (node, depth) => {
    if(visit[node] === true || check === true) return;
    if(node === B){ 
        answer = depth;
        check = true;
        return
    }

    visit[node] = true;
    for(let i=0; i<graph[node].length; i++){
        DFS(graph[node][i], depth+1)
    }
}

DFS(A, 0);
console.log(answer === 0 ? -1 : answer);