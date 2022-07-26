var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;

process.stdin.on("end", () => {
  console.log(total);
  process.exit(0);
});

rl.on("line", function (data) {
  data = data.split(" ");

  const A = parseInt(data[0]);
  const B = parseInt(data[1]);
  const C = parseInt(data[2]);
  const D = parseInt(data[3]);

  if (D > B) {
    total = A + C * (D - B);
  } else {
    total = A;
  }
});
