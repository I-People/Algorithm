function solution(answers) {
  let answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < 10; i++) {
    console.log(i % 5);
    if (answers[i] === one[i % 5]) {
      a++;
    }
    if (answers[i] === two[i % 8]) {
      b++;
    }
    if (answers[i] === three[i % 10]) {
      c++;
    }
  }
  let max = Math.max(a, b, c);
  if (max === a) answer.push(1);
  if (max === b) answer.push(2);
  if (max === c) answer.push(3);
  console.log(a, b, c);
  return answer;
}
