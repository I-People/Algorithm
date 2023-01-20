function solution(storey) {
  // 마법의 돌의 최솟값을 구해주세요
  // 0층으로 내려가는 것이 목표
  // 최대한 먼저 buttons에 있는 10의 제곱에 다가갈 것
  //// 0 ~ 4 -> -할 것
  //// 5 -> 5 ~ 9 -> + 할 것

  let result = 0;
  let len = storey.toString().split('').length;
  for (let i = 0; i < len; i++) {
    let digitsStorey = storey.toString().split('').map(Number);
    const digit = digitsStorey[len - i - 1];
    if (digit >= 0 && digit <= 4) {
      storey -= digit * 10 ** i;
      result += digit;
    }
    if (digit === 5) {
      const nextDigit = digitsStorey[len - i - 2];
      if (!nextDigit) {
        storey -= digit * 10 ** i;
        result += digit;
        continue;
      }

      if (nextDigit >= 5 && nextDigit <= 9) {
        storey += (10 - digit) * 10 ** i;
        result += 10 - digit;
      }
      if (nextDigit >= 0 && nextDigit <= 4) {
        storey -= digit * 10 ** i;
        result += digit;
      }
    }
    if (digit >= 6 && digit <= 9) {
      storey += (10 - digit) * 10 ** i;
      result += 10 - digit;
    }
    if (len < storey.toString().split('').length) {
      len = storey.toString().split('').length;
    }
  }

  return result;
}
