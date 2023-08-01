//import the file system module
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

rl.on("line", (line) => {
  const halfIndex = line.length / 2;
  const [part1, part2] = [line.slice(0, halfIndex), line.slice(halfIndex)];
  // console.log({ part1, part2 });

  let part1Set = new Set(part1);
  const filteredPart2 = part2.split("").filter((x) => part1Set.has(x));
  console.log(filteredPart2);
});

rl.on("close", () => {
  console.log("done");
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
});
