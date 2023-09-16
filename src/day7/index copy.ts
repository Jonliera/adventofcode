import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});

rl.on("line", (line) => {});

rl.on("close", () => {
  console.log("done");
});
