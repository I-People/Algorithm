function solution(N, stages) {
  let result = [];
  let answer = [];

  for (let i = 1; i <= N; i++) {
    let people = 0; //스테이지에 도달한 플레이어 수
    let fail = 0; //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
    stages.map((v, idx) => {
      if (v >= i) {
        people++;
        if (v === i) {
          fail++;
        }
      }
    });
    result.push([fail / people, i]);
  }
  result
    .sort((a, b) => {
      return b[0] - a[0]; //실패율 기준으로 내림차순 정렬
    })
    .map((v, i) => {
      answer.push(v[1]);
    });

  return answer;
}
