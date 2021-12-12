const fs = require('fs');

const file = fs.readFileSync("../input.txt", {encoding:'utf8', flag:'r'}).split("\n");

// Part 1

let x = 0, y = 0

for (let e of file) {
    e = e.split(" ")
    if (e[0] === "forward") {
        x = x + +e[1]
    } else if (e[0] === "up") {
        y = y - +e[1]
    } else if (e[0] === "down") {
        y = y + +e[1]
    }
}   
console.log(`Part 1: ${x*y}`)

// Part 2

let aim = 0
x = 0
y = 0

for (let e of file) {
    e = e.split(" ")
    if (e[0] === "forward") {
        x = x + +e[1]
        y = y + aim * +e[1]
    } else if (e[0] === "up") {
        aim = aim - +e[1]
    } else if (e[0] === "down") {
        aim = aim + +e[1]
    }
}   
console.log(`Part 2: ${x*y}`)
