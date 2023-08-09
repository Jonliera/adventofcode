// //import the file system module
// import fs from "fs";
// import readline from "readline";

// let sum = 0;

// const rl = readline.createInterface({
//   input: fs.createReadStream("./input.txt"),
// });

// rl.on("line", (line) => {
//   console.log(line);
// });

// rl.on("close", () => {
//   const used = process.memoryUsage().heapUsed / 1024 / 1024;
//   console.log(
//     `The script uses approximately ${Math.round(used * 100) / 100} MB`
//   );
// });

const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

function groupLines(input: any) {
  const lines = input.trim().split("\n");
  const groupedLines = [];

  for (let i = 0; i < lines.length; i += 3) {
    const group = lines.slice(i, i + 3);
    groupedLines.push(group);
  }

  return groupedLines;
}

const grouped = groupLines(input);
console.log(grouped);
