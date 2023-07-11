// console.log("Hello World!");

// const animals = ["dog", "cat", "bird"];
// animals.map((animal) => console.log(animal));

//import the file system module
import fs from "fs";

//read the input file
const input = fs.readFileSync("input.txt", "utf8");

const getSumOfGroup = (group: string) =>
  group
    .split("\n")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);

const numberOfGroups = input.split("\n\n");

const groupSums = numberOfGroups.map(getSumOfGroup);

const maxSum = Math.max(...groupSums);

console.log(maxSum);
