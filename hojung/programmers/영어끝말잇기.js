function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (j === i - 1 && words[i][0] !== words[j][words[j].length - 1]) {
        //끝말 확인
        let num = (i + 1) % n;
        let order = Math.ceil((i + 1) / n);
        if (num === 0) num = n;
        if (order === 0) order = 1;
        answer = [num, order];
        i = words.length;
        break;
      }
      if (words[i] === words[j]) {
        //중복 확인
        let num = (i + 1) % n;
        let order = Math.ceil((i + 1) / n);
        if (num === 0) num = n;
        if (order === 0) order = 1;
        answer = [num, order];
        i = words.length;
        break;
      }
    }
  }

  return answer;
}
