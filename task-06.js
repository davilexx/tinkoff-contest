var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (data) => {
  const n = data;

  rl.on("line", (data) => {
    data = data.split(" ");
    let temp1 = 0;
    let temp2 = 0;

    // 2 1 3 6
    for (let i = 0; i < data.length; i++) {
      if (
        (data[i] % 2 === 0 && (i + 1) % 2 !== 0) ||
        (data[i] % 2 !== 0 && (i + 1) % 2 === 0)
      ) {
        if (temp1 === 0) {
          temp1 = data[i];
        }
        if (temp1 !== 0 && temp2 === 0) {
          temp2 = data[i];
        }
      }
    }
  });
  process.exit(0);
});
