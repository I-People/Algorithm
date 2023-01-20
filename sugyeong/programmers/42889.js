function solution(N, stages) {
  let clearStageUser = new Array(N + 1).fill(0);
  for (let i = 0; i < stages.length; i++) {
    for (let j = 0; j < stages[i]; j++) {
      clearStageUser[j] += 1;
    }
  }

  let failurePercent = new Array(N).fill([]);
  for (let i = 0; i < clearStageUser.length - 1; i++) {
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    // 현재 스테이지를 클리어한 사람 - 다음 스테이지를 클리어한 사람  = 현재 스테이지를 클리어하지 못한사람
    // 현재 스테이지를 클리어하지 못한사람 / 클리어한 유저
    failurePercent[i] = [
      (clearStageUser[i] - clearStageUser[i + 1]) / clearStageUser[i],
      i + 1,
    ];
  }
  failurePercent.sort((a, b) => b[0] - a[0]);
  return failurePercent.map(([_, stageNum]) => stageNum);
}
