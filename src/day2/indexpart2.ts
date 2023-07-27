//import the file system module
import fs from "fs";
import readline from "readline";

type solutionLookup = Record<string, Record<string, number>>;
const outCome: solutionLookup = {
  A: {
    //ROCK
    X: 3, // lose 3
    Y: 4, // draw 4
    Z: 8, // win 8
  },
  B: {
    //PAPER
    X: 1, // lose 1
    Y: 5, // draw 5
    Z: 9, // win 9
  },
  C: {
    //SCISSORS
    X: 2, // lose 2
    Y: 6, // draw 6
    Z: 7, // win 7
  },
};

let score = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

rl.on("line", (line) => {
  const [opponent, me] = line.split(" ");

  const moveScore = outCome[opponent][me];
  score += moveScore;
});

rl.on("close", () => {
  console.log(score);
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
});
