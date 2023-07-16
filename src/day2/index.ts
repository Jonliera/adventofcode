//import the file system module
import fs from "fs";

//read the input file
const input = fs
  .readFileSync("src/day2/input.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" "));
console.log(input);

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

const score = 0;

// write a function to get the game score and move score

// const gameScore = (op: string, me: string) => {
//   //oppoent chooses rock
//   if (op === "A") {
//     if (me === "X") {
//       //me chooses rock
//       return 3;
//     } else if (me === "Y") {
//       //me chooses paper
//       return 6;
//     } else {
//       //me chooses scissors
//       return 0;
//     }
//   }
//   //opponent chooses paper
//   if (op === "B") {
//     if (me === "X") {
//       //me chooses rock
//       return 0;
//     } else if (me === "Y") {
//       //me chooses paper
//       return 3;
//     } else {
//       //me chooses scissors
//       return 6;
//     }
//   }
//   //opponent chooses scissors
//   if (op === "C") {
//     if (me === "X") {
//       //me chooses rock
//       return 6;
//     } else if (me === "Y") {
//       //me chooses paper
//       return 0;
//     } else {
//       //me chooses scissors
//       return 3;
//     }
//   }
// };

// new function less code :

const gameScore = (op: string, me: string) => {
  const scores: Record<string, Record<string, number>> = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 },
  };

  return scores[op]?.[me] ?? 0;
};

//get the score of each move
// const moveScore = (me: string) => {
//   if (me === "X") return 1; //me chooses rock
//   if (me === "Y") return 2; //me chooses paper
//   if (me === "Z") return 3; //me chooses scissors
//   return 0;
// };

const moveScores: Record<string, number> = {
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
};

const moveScore = (me: string) => moveScores[me] || 0;

//get the scores of all games

const playGame = (op: string, me: string) => {
  const game = gameScore(op, me);
  const move = moveScore(me);

  if (game === undefined) {
    // Handle the case when gameScore returns undefined
    // You can either return a default value or throw an error, depending on your requirements
    throw new Error("gameScore returned undefined");
  }

  return game + move;
};

const newGame = () => {
  //loop through the input
  let score = 0;
  for (const game of input) {
    score += playGame(game[0], game[1]);
  }
  console.log(score);
};

newGame();
