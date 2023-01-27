function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  let min = 0;
  let max = people.length - 1;

  while (1) {
    if (people[min] + people[max] <= limit) {
      min++;
      max--;
      answer++;
    } else {
      max--;
      answer++;
    }

    if (max < min) break;
  }

  return answer;
}
