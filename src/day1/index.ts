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

// console.log(maxSum);

// Part 2 Find the 3 groups that hold the highest sum and add them up

const sortedGroupSums = [...groupSums].sort((a, b) => b - a);
// console.log(sortedGroupSums);

const topThreeSums = sortedGroupSums.slice(0, 3);
console.log(topThreeSums);

const sumOfTopThree = topThreeSums.reduce((sum, num) => sum + num, 0);
console.log(sumOfTopThree);
