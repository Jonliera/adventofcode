import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

function isUnique(array: string[]) {
  return array.length === new Set(array).size;
}
let fourElements: string[] = [];
// let count: number | undefined = undefined;
rl.on("line", (line) => {
  line.split("").every((char, i) => {
    fourElements.push(char);
    if (fourElements.length > 4) {
      fourElements.shift();
    }
    if (fourElements.length === 4 && isUnique(fourElements)) {
      console.log(i + 1);
      return false;
    }
    return true;
  });

  // for (let i = 0; i < line.length; i++) {
  //   fourElements.push(line[i]);
  //   if (fourElements.length > 4) {
  //     fourElements.shift();
  //   }
  //   if (fourElements.length === 4 && isUnique(fourElements)) {
  //     console.log(i + 1);
  //     break;
  //   }
  // }
});

rl.on("close", () => {
  console.log("done");
});
