function solution(storey) {
  let answer = 0;
  let arr = storey.toString().split("").map(Number);
  arr.unshift(0); //맨 앞자리 9일경우 대비해 맨 앞에 0 추가

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) continue;
    else if (arr[i] < 5) {
      //5보다 작은 경우 그 수만큼 더해주고 0으로 만듬
      answer += arr[i];
      arr[i] = 0;
    } else if (arr[i] > 5) {
      //5보다 큰 경우 (10-그 수) 만큼 더해주고 앞자리 +1 해줌
      answer += 10 - arr[i];
      arr[i] = 0;
      arr[i - 1] += 1;
    } else {
      //5인 경우
      if (arr[i - 1] < 5) {
        //그 앞자리 수가 5보다 작은 경우는 -5해줌
        answer += 5;
        arr[i] = 0;
      } else {
        // 그 앞자리수가 5보다 크거나 같은 경우는 +5해줌
        answer += 5;
        arr[i] = 0;
        arr[i - 1] += 1;
      }
    }
  }

  return answer;
}
