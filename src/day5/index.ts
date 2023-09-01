//import the file system module
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});
let count = 0;
rl.on("line", (line) => {
  const [stacks, moves] = line.split("\n\n");

  console.log({ stacks, moves });
});

rl.on("close", () => {
  console.log();
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
});
