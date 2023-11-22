import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function repeat_key(key, amount) {
    let line = "";
    for (let i = 0; i < amount; i++) {
        line += key;
    }
    return line;
}

function horizontal_line(side) {
    return repeat_key("*", side);
}

function sides(size) {
    size -= 2;
    let line = "*";
    for (let j = 0; j < size; j++) {
        line += " ";
    }
    line += "*";
    return line;
}
function add_spaces(text, limit) {
    let amount = limit - text.length;
    text += repeat_key(" ", amount);
    return text;
}
function diagonals_top(side) {
    let line = ""
    side -= 2;
    let distance = side;
    line = repeat_key(" ", distance);
    line += horizontal_line(side + 2);
    const last_char_place = line.length - 1;
    console.log(last_char_place);
    console.log(line);
    distance -= 1;
    for (let i = 0; i < side; i++) {
        line = "";
        line += repeat_key(" ", distance);
        line += sides(side + 2); 
        line = add_spaces(line, last_char_place);
        line += "*"
        console.log(line);
        distance -= 1;
    }
}

function bottom_part(side) {
    let line = "";
    let distance = side - 3;
    for (let i = 0; i < (height - 2); i++) {
        line = ""
        line += sides(side);
        line += repeat_key(" ", distance);
        line += "*";
        console.log(line);
        distance -= 1;
    }
    console.log(horizontal_line(side));
}

let side = parseInt(await userInput.question("Give the lenght of a side"));
let height = side - 2;

diagonals_top(side);
console.log(horizontal_line(side) + repeat_key(" ", side - 3) + "*");
bottom_part(side);
process.exit();