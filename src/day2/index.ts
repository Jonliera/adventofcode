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
  const [opponent, me] = line.split(" ");

  const opponentRealMove = move.get(opponent);
  const myRealMove = move.get(me);

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

rl.on("close", () => {
  console.log(score);
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(
    `The script uses approximately ${Math.round(used * 100) / 100} MB`
  );
});

//read the input file
// const input = fs
//   .readFileSync("./input.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" "))
//   .forEach(([opponent, me]) => {
//     const opponentRealMove = opponentMove.get(opponent);
//     const myRealMove = meMove.get(me);

//     if (!opponentRealMove || !myRealMove) throw new Error("kaboom");

//     score += pointsLookup.get(myRealMove) || 0;

//     if (opponentRealMove === myRealMove) {
//       score += 3;
//     }
//     // opponents beats us
//     else if (winLookUp.get(opponentRealMove) === myRealMove) {
//       score += 0;
//     } else if (winLookUp.get(myRealMove) === opponentRealMove) {
//       score += 6;
//     }
//   });
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// console.log(score);
// console.log(input);

/*
rock - 1 
A
X

paper - 2
B
Y

scissors - 3
C
Z

result
o - lose
3 - draw
6 - win
*/

// new function less code :

// const gameScore = (op: string, me: string) => {
//   const scores: Record<string, Record<string, number>> = {
//     A: { X: 3, Y: 6, Z: 0 },
//     B: { X: 0, Y: 3, Z: 6 },
//     C: { X: 6, Y: 0, Z: 3 },
//   };

//   return scores[op]?.[me] ?? 0;
// };

// const moveScores: Record<string, number> = {
//   X: 1, // rock
//   Y: 2, // paper
//   Z: 3, // scissors
// };

// const moveScore = (me: string) => moveScores[me] || 0;

// //get the scores of all games

// const playGame = (op: string, me: string) => {
//   const game = gameScore(op, me) || 0; // Use default value 0 if gameScore returns undefined
//   const move = moveScore(me);
//   return game + move;
// };

// const newGame = () => {
//   const totalScore = input.reduce(
//     (acc, game) => acc + playGame(game[0], game[1]),
//     0
//   );
//   console.log(totalScore);
// };

// newGame();

// Part 2

/*
x is lose
y is draw
z is win
*/

// type solutionLookup = Record<string, Record<string, string>>;
// const outCome: solutionLookup = {
//   A: {
//     //ROCK
//     X: "SCISSORS", // lose
//     Y: "ROCK", // draw
//     Z: "PAPER", // win
//   },
//   B: {
//     //PAPER
//     X: "ROCK", // win
//     Y: "PAPER", // draw
//     Z: "SCISSORS", // lose
//   },
//   C: {
//     //SCISSORS
//     X: "PAPER", // win
//     Y: "SCISSORS", // draw
//     Z: "ROCK", // lose
//   },
// };

// const input2 = fs
//   .readFileSync("./input.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" "))
//   .forEach(([opponent, me]) => {
//     const opponentRealMove = opponentMove[opponent];
//     const myRealMove = meMove[me]; // this should be the outcome variable

//     score += pointsLookup[myRealMove];

//     if (opponentRealMove === myRealMove) {
//       score += 3;
//     }
//     // opponents beats us
//     else if (winLookUp[opponentRealMove] === myRealMove) {
//       score += 0;
//     } else if (winLookUp[myRealMove] === opponentRealMove) {
//       score += 6;
//     }
//   });
// console.log(score);
