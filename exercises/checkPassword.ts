import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function checkPassword(password: string): string[] {
    const errors: string[] = [];

    
    if (password.length < 8) {
        errors.push("Debe tener al menos 8 caracteres.");
    }

  
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (!hasUppercase) {
        errors.push("Debe contener al menos una letra mayúscula.");
    }
    if (!hasLowercase) {
        errors.push("Debe contener al menos una letra minúscula.");
    }
    if (!hasNumber) {
        errors.push("Debe contener al menos un número.");
    }

    return errors;
}


rl.question('Ingrese una contraseña: ', (password) => {
    const errors = checkPassword(password);

    if (errors.length === 0) {
        console.log("Contraseña válida");
    } else {
        console.log("Contraseña no válida:");
        errors.forEach(error => console.log(error));
    }

    rl.close();
});
