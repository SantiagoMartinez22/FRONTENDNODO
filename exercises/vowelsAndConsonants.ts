import * as readline from 'readline';

function countVowelsAndConsonants(text: string): { vowels: number, consonants: number } {
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    
    const lowerText = text.toLowerCase();

    for (let char of lowerText) {
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una cadena de texto: ', (input: string) => {
    const result = countVowelsAndConsonants(input);
    console.log(`Número de vocales: ${result.vowels}`);
    console.log(`Número de consonantes: ${result.consonants}`);
    rl.close();
});
