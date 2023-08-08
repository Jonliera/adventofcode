//import the file system module
import fs from "fs";
import readline from "readline";

let sum = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

function lettertoNumber(letter: string) {
  return letter.charCodeAt(0) - (/[a-z]/.test(letter) ? 96 : 38);
}

rl.on("line", (line) => {
  const halfIndex = line.length / 2;
  const [part1, part2] = [line.slice(0, halfIndex), line.slice(halfIndex)];
  // console.log({ part1, part2 });

  let part1Set = new Set(part1);
  const filteredPart2 = part2.split("").filter((x) => part1Set.has(x));
  const notDuplicate = [...new Set(filteredPart2)];
  const result = lettertoNumber(notDuplicate[0]);
  sum += result;
  console.log(sum);
});

rl.on("close", () => {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
});
