function compressString(s: string): string {
    if (s.length === 0) return "";

    let compressedString = "";
    let currentChar = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            count++;
        } else {
            compressedString += currentChar + count;
            currentChar = s[i];
            count = 1;
        }
    }

    
    compressedString += currentChar + count;

    return compressedString;
}

// Ejemplo de uso:
const input1 = "aaabcc";
const input2 = "abcd";
const input3 ="aaaaaaaaasaaaaa"

console.log(compressString(input1)); // Output: "a3b1c2"
console.log(compressString(input2)); // Output: "a1b1c1d1"
console.log(compressString(input3)); //Output: "a9s1a5"
