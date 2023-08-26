//import the file system module
import fs from "fs";

//read the input file
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

// console.log(input);
function lettertoNumber(letter: string) {
  return letter.charCodeAt(0) - (/[a-z]/.test(letter) ? 96 : 38);
}

function part2() {
  let sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    const backpacks = [[...input[i]], [...input[i + 1]], [...input[i + 2]]];

    let set = new Set(backpacks[0]);
    let interserction = backpacks[1].filter((x) => set.has(x));
    set = new Set(interserction);
    interserction = backpacks[2].filter((x) => set.has(x));

    const duplicated = [...new Set(interserction)];

    sum += lettertoNumber(duplicated[0]);
  }
  console.log(sum);
}
part2();
