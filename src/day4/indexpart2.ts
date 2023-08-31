//import the file system module
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});
let count = 0;
rl.on("line", (line) => {
  const [gnome1, gnome2] = line
    .split(",")
    .map((str) => str.split("-").map(Number));

  const gnome1Start = gnome1[0];
  const gnome1End = gnome1[1];
  const gnome2Start = gnome2[0];
  const gnome2End = gnome2[1];

  if (gnome1Start <= gnome2End && gnome2Start <= gnome1End) {
    count++;
  }

  console.log({ gnome1, gnome2 });
  console.log({ gnome1Start, gnome1End, gnome2Start, gnome2End });
  console.log(count);
});
