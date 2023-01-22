
function solution(ingredient) {
    var answer = 0;
    const order = [1, 2, 3, 1];
    let order_pointer = 0;
    let pointer = 0;
    let check = 0;
    let flag = false;
    while(pointer < ingredient.length){
        // 비교 시작하기 전
        if(ingredient[pointer] === order[order_pointer] && flag === false){
            flag = true;        // 비교 시작
            check = pointer;    // 시작 index 저장
            pointer += 1;
            order_pointer += 1;
        // 다르다면
        }else if(ingredient[pointer] === order[order_pointer] && flag === true){
            if(order_pointer === 3){
                ingredient.splice(check, 4);
                order_pointer = 0;
                answer += 1;
                if(check <= 2){
                    pointer = 0;
                }else{
                    pointer = check - 3
                }

            }else{
                order_pointer += 1;
                pointer += 1;
            }
            
        }else{
            if(ingredient[pointer] === order[0]){
                flag = true;
                check = pointer;
                pointer += 1;
                order_pointer = 1;
            }else{
                flag = false;
                pointer += 1;
                order_pointer = 0;
            }
        }
        
    }
    
    return answer;
}
