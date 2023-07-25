//import the file system module
import fs from "fs";
import readline from "readline";

type Moves = "ROCK" | "PAPER" | "SCISSORS";

const winLookUp = new Map<Moves, Moves>();
winLookUp.set("ROCK", "SCISSORS");
winLookUp.set("SCISSORS", "PAPER");
winLookUp.set("PAPER", "ROCK");

const move = new Map<string, Moves>();
move.set("A", "ROCK");
move.set("B", "PAPER");
move.set("C", "SCISSORS");
move.set("X", "ROCK");
move.set("Y", "PAPER");
move.set("Z", "SCISSORS");

const pointsLookup = new Map<Moves, number>();
pointsLookup.set("ROCK", 1);
pointsLookup.set("PAPER", 2);
pointsLookup.set("SCISSORS", 3);

let score = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

rl.on("line", (line) => {
  const [opponent, outCome] = line.split(" ");
  console.log(opponent, outCome);
  const opponentRealMove = move.get(opponent);
  const myRealMove = move.get(outCome);

  if (!opponentRealMove || !myRealMove) throw new Error("kaboom");

  score += pointsLookup.get(myRealMove) || 0;

  if (opponentRealMove === myRealMove) {
    score += 3;
  }
  // Opponents beats us
  else if (winLookUp.get(opponentRealMove) === myRealMove) {
    score += 0;
  }
  // We beat opponent
  else if (winLookUp.get(myRealMove) === opponentRealMove) {
    score += 6;
  }
});

// rl.on("close", () => {
//   console.log(score);
//   const used = process.memoryUsage().heapUsed / 1024 / 1024;
//   console.log(
//     `The script uses approximately ${Math.round(used * 100) / 100} MB`
//   );
// });
