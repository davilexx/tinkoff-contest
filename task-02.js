var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

process.stdin.on("end", () => {
  console.log(total);
  process.exit(0);
});

rl.on("line", function (data) {
  for (let i = data; i >= 1; i -= 2) {
    count++;
  }
  if (data === 1) {
    count = 0;
  }
});
