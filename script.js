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

const inp = document.getElementById('input');
const bn_res = document.getElementById('bn-result');

inp.addEventListener('keyup', event => {
    const value = event.target.value;

    const convertedValue = `${value}`.split('').map(item => en2bn[item] ?? item).join('');

    bn_res.innerHTML = convertedValue;
    inp.value = convertedValue;
})