function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      //맨 처음 글자 무조건 -1
      answer.push(-1);
      continue;
    }
    let tmp = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer.push(tmp);
        break;
      }
      tmp++;
      if (j === 0) {
        answer.push(-1);
      }
    }
  }
  return answer;
}
