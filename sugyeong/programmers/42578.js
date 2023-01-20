function solution(clothes) {
  // [의상의 이름, 의상의 종류]

  let clothesObj = {};
  for (let i = 0; i < clothes.length; i++) {
    const numOfClothes = clothesObj[clothes[i][1]] || 1;
    clothesObj[clothes[i][1]] = numOfClothes + 1;
  }

  let result = 1;
  for (const key in clothesObj) {
    result *= clothesObj[key];
  }
  return result - 1;
}
