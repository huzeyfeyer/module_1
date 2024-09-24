
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let geboorteJaar = parseFloat(await userInput.question('Wat is je geboortejaar?  '));
let toekomstJaar = parseFloat(await userInput.question('In welk jaar vraag je je af hoe oud je bent? '));

console.log('In ' + toekomstJaar + ' zal ik ' + (toekomstJaar - geboorteJaar - 1) + ' of ' + (toekomstJaar - geboorteJaar) + ' jaar oud zijn.')

process.exit()

