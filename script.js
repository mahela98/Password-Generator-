const characterAmountNumber = document.getElementById('characterAmountNumber');
const characterAmountRange = document.getElementById('characterAmountRange');
const form = document.getElementById('passwordGenetatorForm');

const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

characterAmountNumber.addEventListener('input',syncCharacterAmount);
characterAmountRange.addEventListener('input',syncCharacterAmount);

form.addEventListener('submit',e => {
    e.preventDefault();

const characterAmount = characterAmountNumber.value;

    const password = genaratePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols);
})

function syncCharacterAmount(e){

    const value = e.target.value;

    characterAmountNumber.value= value;
    characterAmountRange.value= value;
}