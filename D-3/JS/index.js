const fs = require('fs');
const { REPL_MODE_STRICT } = require('repl');

const file = fs.readFileSync("../input.txt", {encoding:'utf8', flag:'r'}).split("\n");

// PART 1:

const mostRec = (column, file) => {
    let one = 0;
    let zero = 0;
    for (let line of file) {
        if (line[column] === "0") zero++
        if (line[column] === "1") one++
    }
    if (one === zero) return "2"

    return one <= zero ? "1" : "0"
}

let gamma = ""
for (let i in file[0]) {
    gamma += mostRec(i, file) === "0" ? "0" : "1"
}

let epsilon = ""
for (let i in file[0]) {
    epsilon += mostRec(i, file) === "1" ? "0" : "1"
}

console.log(`Part 1: ${parseInt(epsilon, 2) * parseInt(gamma, 2)}`)


// PART 2:

const oxy = (file) => {
    let i = 0
    while (file.length !== 1) {
        let mostRecNum = mostRec(i, file) === "1" ? "0" : "1"
        
        file = file.filter(e => e[i] === mostRecNum)
        i++
    }
    return file
}

const co2 = (file) => {
    let i = 0
    while (file.length !== 1) {
        let mostRecNum = mostRec(i, file) === "1" ? "1" : "0"
        
        file = file.filter(e => e[i] === mostRecNum)
        i++
    }
    return file
}

console.log(`Part 2: ${parseInt(oxy(file), 2) * parseInt(co2(file), 2)}`)