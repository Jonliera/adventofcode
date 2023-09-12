import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

function isUnique(array: any[]) {
  return array.length === new Set(array).size;
}

let fourElements: string[] = [];
rl.on("line", (line) => {
  for (let i = 0; i < line.length; i++) {
    fourElements.push(line[i]);
    if (fourElements.length > 4) {
      fourElements.shift();
    }
    if (fourElements.length === 4 && isUnique(fourElements)) {
      console.log(i + 1);
      break;
    }
  }
});

rl.on("close", () => {
  console.log("done");
});
