function solution(n) {
  let str = '';

  for (let i = 0; i < n; i++) {
    if (i % 2) {
      str += '박';
      continue;
    }
    str += '수';
  }

  return str;
}
