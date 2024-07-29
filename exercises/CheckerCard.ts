function validateCreditCard(cardNumber: string): boolean {
    
    const digits = cardNumber.split('').map(Number);

    let sum = 0;
    let shouldDouble = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; 
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    
    return sum % 10 === 0;
}

// Pruebas de la función con números de tarjetas de crédito de ejemplo
const testCards = [
    '4532015112830366', 
    '6011514433546201', 
    '6011514433546202', 
    '1234567812345670', 
    '4111111111111111', 
    '4012888888881881'  
];

testCards.forEach(card => {
    console.log(`Número de tarjeta: ${card}, válido: ${validateCreditCard(card)}`);
});
