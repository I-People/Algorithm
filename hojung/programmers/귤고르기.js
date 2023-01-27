function solution(k, tangerine) {
  let answer = 0;

  let hash = {};
  for (let i in tangerine) {
    if (!hash[tangerine[i]]) {
      hash[tangerine[i]] = 1;
    } else {
      hash[tangerine[i]]++;
    }
  }
  const values = Object.values(hash).sort((a, b) => b - a);
  for (let val of values) {
    k -= val;
    answer++;
    if (k <= 0) break;
  }
  return answer;
}
