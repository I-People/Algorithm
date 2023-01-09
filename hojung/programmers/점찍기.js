function solution(k, d) {
  const distance = d * d;
  let cnt = 0;
  for (let i = 0; i <= d; i++) {
    if (i % k === 0) {
      let y = Math.sqrt(d * d - i * i);
      cnt += Math.floor(Math.floor(y) / k) + 1;
    }
  }

  return cnt;
}
