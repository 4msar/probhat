const en2bn = {
    'a': `া`,
    'b': `ব`,
    'c': `চ`,
    'd': `ড`,
    'e': `ী`,
    'f': `ত`,
    'g': `গ`,
    'h': `হ`,
    'i': `ি`,
    'j': `জ`,
    'k': `ক`,
    'l': `ল`,
    'm': `ম`,
    'n': `ন`,
    'o': `ও`,
    'p': `প`,
    'q': `দ`,
    'r': `র`,
    's': `স`,
    't': `ট`,
    'u': `ু`,
    'v': `আ`,
    'w': `ূ`,
    'x': `শ`,
    'y': `এ`,
    'z': `য়`,
    'A': `অ`,
    'B': `ভ`,
    'C': `ছ`,
    'D': `ঢ`,
    'E': `ঈ`,
    'F': `থ`,
    'G': `ঘ`,
    'H': `ঃ`,
    'I': `ই`,
    'J': `ঝ`,
    'K': `খ`,
    'L': `ং`,
    'M': `ঙ`,
    'N': `ণ`,
    'O': `ঔ`,
    'P': `ফ`,
    'Q': `ধ`,
    'R': `ড়`,
    'S': `ষ`,
    'T': `ঠ`,
    'U': `উ`,
    'V': `ঋ`,
    'W': `ঊ`,
    'X': `ঢ়`,
    'Y': `ঐ`,
    'Z': `য`,
    '[': `ে`,
    '{': `ৈ`,
    '}': `ৌ`,
    ']': `ো`,
    '&': `ঞ`,
    '*': `ৎ`,
    '<': ` ৃ`,
    '>': `ঁ`,
    '.': `।`,
    '/': `্`,

    '1': `১`,
    '2': `২`,
    '3': `৩`,
    '4': `৪`,
    '5': `৫`,
    '6': `৬`,
    '7': `৭`,
    '8': `৮`,
    '9': `৯`,
    '0': `০`,
}

let writeInEnglish = false;
const __save_key = "__last_input_data__";
const __input = document.getElementById('input');
window.onload = () => {
    const data = localStorage.getItem(__save_key);
    if (data) {
        __input.value = data;
        __input.focus()
    }
}

const checkIsSelection = (key, event) => {
    const pressedFunctionalKey = event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.key === 'Control' || event.key === 'Meta' || event.key === 'Alt' || event.key === 'Shift' || event.key === 'Backspace' || event.key === 'Delete';
    
    if ( pressedFunctionalKey ) return false;

    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown') {
        return false;
    }
    return true;
};

const keyupEventListener = event => {
    const value = event.target.value;
    const convertedValue = `${value}`.split('').map(item => en2bn[item] ?? item).join('');
    
    const pressedFunctionalKey = event.ctrlKey || event.metaKey || event.altKey || event.key === 'Control' || event.key === 'Meta' || event.key === 'Alt' || event.key === 'Backspace' || event.key === 'Delete';
    if (pressedFunctionalKey ) {
        if(event.key === 'Backspace'){
            localStorage.setItem(__save_key, convertedValue);
        }
        return;
    }
    const currentPosition = __input.selectionStart;

    __input.value = convertedValue.slice(0, currentPosition) + convertedValue.slice(currentPosition);

    __input.selectionStart = currentPosition;
    __input.selectionEnd = currentPosition;

    localStorage.setItem(__save_key, convertedValue);
};

// document.addEventListener('keydown', (event) => {
//     const pressedCtrl = event.ctrlKey || event.metaKey;
//     if (pressedCtrl && event.key === '.') {
//         console.log(`Change to ${writeInEnglish ? 'bangla' : 'english'}`);
//         writeInEnglish = !writeInEnglish;
//         if (writeInEnglish === true) {
//             __input.removeEventListener('keyup', keyupEventListener);
//         } else {
//             __input.addEventListener('keyup', keyupEventListener);
//         }
//     }
// });

__input.addEventListener('keyup', keyupEventListener);