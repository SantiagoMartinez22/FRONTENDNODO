import * as readline from 'readline';


function generateAcronym(phrase: string): string {
    return phrase
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase()) 
        .join(''); 
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (input: string) => {
    const acronym = generateAcronym(input);
    console.log(`El acrónimo es: ${acronym}`);
    rl.close();
});
