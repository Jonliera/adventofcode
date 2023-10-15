import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
});
const fileSystem = {};

type OurRecord = {
  [x: string]: OurRecord | string;
};
const temp: OurRecord = {
  herp: {
    blerp: {
      derp: "hello",
    },
  },
};

const getValueUsingPath = (record: OurRecord, path: string[]) =>
  path.reduce((acc: OurRecord | string, item) => {
    if (typeof acc === "string") return acc;

    const returnVal = acc[item];
    return returnVal;
  }, record);

const currentLocation = ["herp", "blerp", "derp"];

const results = getValueUsingPath(temp, currentLocation);
console.log(results);

const fileLocation: string[] = [];

rl.on("line", (line) => {
  if (line.startsWith("$")) {
    const [_, command, commandArg] = line.split(" ");
    if (command === "cd" && commandArg !== "..") {
      fileLocation.push(commandArg);
    } else if (command === "cd" && commandArg === "..") {
      fileLocation.pop();
    }
    console.log(fileLocation);
  }
});

rl.on("close", () => {
  console.log("done");
});
