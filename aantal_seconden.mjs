
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let day = parseFloat(await userInput.question('Geef het aantal dagen:  '));
let hour = parseFloat(await userInput.question('Geef het aantal uuren:  '));
let minute = parseFloat(await userInput.question('Geef het aantal minuten:  '));
let second = parseFloat(await userInput.question('Geef het aantal seconden:  '));

console.log('Aantal seconden: ' + ((day*24*60*60) + (hour*60*60) + (minute*60) + second))
process.exit()