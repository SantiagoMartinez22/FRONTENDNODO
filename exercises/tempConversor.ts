import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Seleccione la opción de conversión:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n", function(opcionInput) {
    const opcion: number = parseInt(opcionInput);

    switch (opcion) {
        case 1:
            rl.question("Ingrese la temperatura en grados Celsius: ", function(celsiusInput) {
                const temperaturaCelsius: number = parseFloat(celsiusInput);
                const temperaturaFahrenheit: number = temperaturaCelsius * 9/5 + 32;
                console.log("Temperatura en grados Fahrenheit:", temperaturaFahrenheit);
                rl.close();
            });
            break;
        case 2:
            rl.question("Ingrese la temperatura en grados Fahrenheit: ", function(fahrenheitInput) {
                const temperaturaFahrenheit: number = parseFloat(fahrenheitInput);
                const temperaturaCelsius: number = (temperaturaFahrenheit - 32) * 5/9;
                console.log("Temperatura en grados Celsius:", temperaturaCelsius);
                rl.close();
            });
            break;
        default:
            console.log("Opción no válida. Por favor seleccione 1 o 2.");
            rl.close();
            break;
    }
});
