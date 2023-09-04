import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});
const stacks: string[][] = [];
const CHUNK_SIZE = 4;
rl.on("line", (line) => {
  //we know this is parsable data there is a square bracket in the lines
  if (line.includes("[")) {
    const length = line.length;
    let column = 0;
    for (let i = 0; i <= length; i += CHUNK_SIZE) {
      if (stacks[column] === undefined) {
        stacks[column] = [];
      }
      const chunk = line.slice(i, i + CHUNK_SIZE).trim();

      if (chunk !== "") {
        const cleanChunk = chunk.replace("[", "").replace("]", "");
        stacks[column].unshift(cleanChunk);
      }
      column = column + 1;
    }
  }
  if (line.startsWith("move")) {
    const moves = line.split(" ");
    const count = parseInt(moves[1]);
    const fromColumn = parseInt(moves[3]) - 1;
    const toColumn = parseInt(moves[5]) - 1;

    const crate: any = stacks[fromColumn].splice(-count, count);
    stacks[toColumn].push(...crate);
  }
}).on("close", () => {
  const top_crate = stacks.map((stack) => stack[stack.length - 1]).join("");
  console.log(top_crate);
});
