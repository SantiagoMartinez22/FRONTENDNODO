function countdown(start: number, intervalSeconds: number): void {
    if (!Number.isInteger(start) || start < 0 || !Number.isInteger(intervalSeconds) || intervalSeconds <= 0) {
        throw new Error("Los parámetros deben ser números enteros positivos.");
    }

    function count(current: number): void {
        if (current >= 0) {
            console.log(current);
            if (current > 0) {
                setTimeout(() => count(current - 1), intervalSeconds * 1000);
            }
        }
    }

    count(start);
}

// valores para probar:
const startNumber = 10;
const interval = 1;
countdown(startNumber, interval);
