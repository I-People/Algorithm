const fs = require('fs');
let stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString().trim()
    : ``
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
