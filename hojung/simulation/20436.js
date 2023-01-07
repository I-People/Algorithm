const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [sl, sr] = input[0].trim().split(" ");
const str = input[1];

const left = [
  ["q", "w", "e", "r", "t"],
  ["a", "s", "d", "f", "g"],
  ["z", "x", "c", "v"],
];
const right = [
  ["", "y", "u", "i", "o", "p"],
  ["", "h", "j", "k", "l"],
  ["b", "n", "m"],
];

const lefthand = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "a",
  "s",
  "d",
  "f",
  "g",
  "z",
  "x",
  "c",
  "v",
];

let xl1,
  yl1 = 0;
let xl2,
  yl2 = 0;
let xr1,
  yr1 = 0;
let xr2,
  yr2 = 0;
let cnt = 0;

//초기 왼손 x1, y1 위치
left.map((v, i) => {
  if (v.includes(sl)) {
    yl1 = i;
    xl1 = v.indexOf(sl);
  }
});

//초기 오른손 x1, y1 위치
right.map((v, i) => {
  if (v.includes(sr)) {
    yr1 = i;
    xr1 = v.indexOf(sr);
  }
});

for (let j = 0; j < str.length; j++) {
  let distance = 0;
  if (lefthand.includes(str[j])) {
    //왼손에 있는 문자인 경우
    left.map((v, i) => {
      //왼손 x2, y2값 위치
      if (v.includes(str[j])) {
        yl2 = i;
        xl2 = v.indexOf(str[j]);
      }
    });
    distance = Math.abs(xl1 - xl2) + Math.abs(yl1 - yl2); //왼손 거리 구하고
    cnt += distance + 1; //거리만큼 + 누르는 시간 1
    xl1 = xl2; //초기 x1,y1값 갱신
    yl1 = yl2;
  } else {
    //오른손에 있는 문자인 경우
    right.map((v, i) => {
      if (v.includes(str[j])) {
        yr2 = i;
        xr2 = v.indexOf(str[j]);
      }
    });
    distance = Math.abs(xr1 - xr2) + Math.abs(yr1 - yr2);
    cnt += distance + 1;
    xr1 = xr2;
    yr1 = yr2;
  }
}

console.log(cnt);
