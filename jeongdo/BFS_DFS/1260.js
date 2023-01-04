let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;

const [N, M, V] = input[count++].split(' ').map(Number);
let vertex = Array.from({length:N+1}, () => []);

for(let i=0; i<M; i++){
    let [a, b] = input[count++].split(' ').map(Number);
    vertex[a].push(b);
    vertex[b].push(a);
}

for(let i=1; i<vertex.length; i++){
    vertex[i].sort((a, b) => a-b);
}



let visit = new Array(N+1).fill(false);
let DFS_ANSWER = [];

const DFS = (node) => {
    if(visit[node] === true){
        return
    }
    DFS_ANSWER.push(node);
    visit[node] = true
    for(let i=0; i<vertex[node].length; i++){
        DFS(vertex[node][i])
    }    
}

DFS(V);
console.log(DFS_ANSWER.join(' '));

let BFS_ANSWER = [];

const BFS = (node) => {
    let queue = [];
    queue.push(node);
    visit[node] = false;

    while(queue.length > 0){
        
        let crnt_node = queue.shift();
        BFS_ANSWER.push(crnt_node)

        for(let i=0; i<vertex[crnt_node].length; i++){
            if(visit[vertex[crnt_node][i]] === true){ 
                queue.push(vertex[crnt_node][i]);
                visit[vertex[crnt_node][i]] = false;
            }
        }
    }
}

BFS(V);
console.log(BFS_ANSWER.join(' '));
