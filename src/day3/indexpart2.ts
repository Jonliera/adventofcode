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
    groupedLines.push(lines.slice(i, i + 3));
  }

  return groupedLines;
}

function findSameLetterInAllLines(groupedLines: any) {
  const sameLetters = [];

  for (const group of groupedLines) {
    const [firstLine, ...remainingLines] = group;
    const commonChars = [...firstLine].filter((char) =>
      remainingLines.every((line: any) => line.includes(char))
    );

    sameLetters.push(commonChars);
  }

  return sameLetters;
}

const grouped = groupLines(input);
const sameLetters = findSameLetterInAllLines(grouped);
console.log(sameLetters);
