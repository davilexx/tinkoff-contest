var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (data) => {
  data = data.split(" ");
  const l = parseInt(data[0]);
  const r = parseInt(data[1]);

  let arrayOfNumbers = [];
  for (let i = l; i <= r; i++) {
    arrayOfNumbers.push(i);
  }

  let resultArray = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let divider = "1";
    let number = arrayOfNumbers[i];
    number = number + "";

    if (number.length !== divider.length) {
      for (let i = divider.length; i < number.length; i++) {
        divider = divider.concat("1");
      }
    }

    divider = parseInt(divider);
    if (arrayOfNumbers[i] % divider === 0) {
      resultArray.push(arrayOfNumbers[i]);
    }
  }

  console.log(resultArray.length);
  process.exit(0);
});
