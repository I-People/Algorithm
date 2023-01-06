
const solution = (n, computers) => {
    var answer = 0;
    let connect = Array.from({length:n}, () => []);
    let visit = Array.from({length:n}, () => false);
    
    const DFS = (node) => {
        if(visit[node] === true){
            return
        }
        visit[node] = true;
        
        for(let i=0; i<connect[node].length; i++){
            DFS(connect[node][i]);
        }
    }
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i >= j ){
                continue
            }
            if(computers[i][j] === 1){
                connect[i].push(j);
                connect[j].push(i);
            }
        }
    }

    for(let i=0; i<n; i++){
        if(visit[i] === false){
            answer += 1;
            DFS(i);
        }
    }
    
    return answer;
}

solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]);