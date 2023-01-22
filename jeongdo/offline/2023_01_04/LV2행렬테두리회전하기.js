const target_numbers = (graph, x1, y1, x2, y2) => {
    let target = [];
    
    for(let k=x1-1; k<x2; k++){
        target.push(graph[y1-1][k]);
    }

    for(let k=y1; k<y2-1; k++){
        target.push(graph[k][x2-1]);
    }

    for(let k=x2-1; k>=x1-1; k--){
        target.push(graph[y2-1][k]);
    }

    for(let k=y2-2; k>=y1; k--){
        target.push(graph[k][x1-1]);
    }

    return target;
}

const solution = (columns, rows, queries) => {
    // row columns -> graph , queries 회전들의 목록
    var answer = [];

    let graph = Array.from({length:columns}, (_, idx) => Array(rows).fill(0));
    
    let count = 1;
    for(let i=0; i<columns; i++){
        for(let k=0; k<rows; k++){
            graph[i][k] = count++;
            if(graph[i][k] === 0){
                console.log(i, k);
            }
        }
    }
    console.log(graph);
    for(let i=0; i<queries.length; i++){
        let [y1, x1, y2, x2] = queries[i];
        let target_square = target_numbers(graph, x1, y1, x2, y2);
        answer.push(Math.min(...target_square));
        target_square.unshift(target_square.pop());
        
        let pointer = 0;
        for(let k=x1-1; k<x2; k++){
            graph[y1-1][k] = target_square[pointer++];
        }
    
        for(let k=y1; k<y2-1; k++){
            graph[k][x2-1] = target_square[pointer++];
        }
    
        for(let k=x2-1; k>=x1-1; k--){
            graph[y2-1][k] = target_square[pointer++];
        }
    
        for(let k=y2-2; k>=y1; k--){
            graph[k][x1-1] = target_square[pointer++];
        }
    }

    return answer;
}

solution(100, 97 , [[1,1,100,97]]);
