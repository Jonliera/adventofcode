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

  if (
    (gnome1Start >= gnome2Start && gnome1End <= gnome2End) ||
    (gnome1Start <= gnome2Start && gnome1End >= gnome2End)
  ) {
    count++;
  }

  // count how many of the pairs are fully contained in the other pair

  //both strings

  //need to have a starting number and ending number for both gnomes
  //at this point we only have 2 strings and we need to find the start
  //number and ending number for both gnomes

  // //if the first completely comes before the second
  // if (gnome1End < gnome2Start) {
  //   count++;
  //   return;
  // }

  console.log({ gnome1, gnome2 });
  console.log({ gnome1Start, gnome1End, gnome2Start, gnome2End });
  console.log(count);
});
