function solution(ingredient) {
  let burger = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.slice(-4).join("") == "1231") {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      burger++;
    }
  }
  return burger;
}
