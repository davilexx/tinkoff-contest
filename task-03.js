var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (data) => {
  data = data.split(" ");
  const n = parseInt(data[0]);
  const t = parseInt(data[1]);

  rl.on("line", (data) => {
    const floors = data.split(" ");

    rl.on("line", (data) => {
      const leavingEmployeeIndex = data - 1;

      let i = 0;
      let newArray = [];

      while (i !== leavingEmployeeIndex + 1) {
        newArray.push(floors[i]);
        i++;
      }

      let tempSum = 0;
      let sum1 = 0;
      let sum2 = 0;

      for (let i = 0; i < newArray.length; i++) {
        if (i === 0) {
          i++;
        }
        tempSum += Math.abs(newArray[i] - newArray[i - 1]);
      }

      const countFloorsWithLeavingEmployeeFirst = () => {
        const arrayWithEmployeeFirst = floors.slice();
        const leavingEmployee = arrayWithEmployeeFirst.splice(
          leavingEmployeeIndex,
          1
        );
        arrayWithEmployeeFirst.unshift(leavingEmployee[0]);

        for (let i = 0; i < arrayWithEmployeeFirst.length; i++) {
          if (i === 0) {
            i++;
          }
          sum2 += Math.abs(
            arrayWithEmployeeFirst[i] - arrayWithEmployeeFirst[i - 1]
          );
        }
      };

      if (tempSum > t) {
        countFloorsWithLeavingEmployeeFirst();
        console.log(sum2);
      } else {
        countFloorsWithLeavingEmployeeFirst();

        for (let i = 0; i < floors.length; i++) {
          if (i === 0) {
            i++;
          }
          sum1 += Math.abs(floors[i] - floors[i - 1]);
        }

        if (sum1 < sum2) {
          console.log(sum1);
        } else {
          console.log(sum2);
        }
      }

      process.exit(0);
    });
  });
});
