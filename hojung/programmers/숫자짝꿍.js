function solution(X, Y) {
  let answer = "";
  let xArr = X.split("");
  let yArr = Y.split("");
  let result = "";

  for (let i = 0; i < 10; i++) {
    let crntX = 0;
    let crntY = 0;
    xArr.filter(v => {
      if (+v === i) crntX++;
    });
    yArr.filter(v => {
      if (+v === i) crntY++;
    });

    if (crntX > 0 && crntY > 0) {
      result += String(i).repeat(Math.min(crntX, crntY));
    }
  }
  result = result.split("").sort((a, b) => b - a);
  if (!result[0]) answer = "-1";
  else if (result[0] === "0") answer = "0";
  else answer = result.join("");

  return answer;
}
