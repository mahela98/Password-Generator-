const characterAmountNumber = document.getElementById('characterAmountNumber');
const characterAmountRange = document.getElementById('characterAmountRange');
const form = document.getElementById('passwordGenetatorForm');

const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const passworddisplay = document.getElementById('passwordDisplay');


// gets characters from ASCII Table and Cheat sheet
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
    e.preventDefault();

    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = genaratePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passworddisplay.innerText = password;
})


function genaratePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase){
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    }
    if(includeNumbers){
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    }
    if(includeSymbols){
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    }
// console.log(UPPERCASE_CHAR_CODES);
    const passwordCharacter =[];
    for (let index = 0; index < characterAmount; index++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacter.push(String.fromCharCode(characterCode));        
    }
    return passwordCharacter.join('');
}

function arrayFromLowToHigh(low,high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {

    const value = e.target.value;

    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}