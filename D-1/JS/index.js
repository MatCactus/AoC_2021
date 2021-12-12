const fs = require('fs');

const file = fs.readFileSync("../input.txt", {encoding:'utf8', flag:'r'}).split("\n");

// Part 1

let counter = 0;
for (let i in file) {
    if (i > 0 && +file[i] > +file[i-1]) counter++;
}

console.log(`Part 1: ${counter}`);

// Part 2

counter = 0;
for (let i in file) {
    if (i > 0 && i < file.length-2 && +file[i] + +file[+i+1] + +file[+i+2] > +file[+i-1] + +file[i]+ +file[+i+1]) counter++
}

console.log(`Part 2: ${counter}`)