import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

function isUnique(array: any[]) {
  return array.length === new Set(array).size;
}
let messageLength = 14;
let fourElements: string[] = [];
rl.on("line", (line) => {
  for (let i = 0; i < line.length; i++) {
    fourElements.push(line[i]);
    if (fourElements.length > messageLength) {
      fourElements.shift();
    }
    if (fourElements.length === messageLength && isUnique(fourElements)) {
      console.log(i + 1);
      break;
    }
  }
});

rl.on("close", () => {
  console.log("done");
});
