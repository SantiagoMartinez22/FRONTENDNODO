function binarySearchIterative(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    do {
        let mid = left + Math.floor((right - left) / 2); // mid se declara con let

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    } while (left <= right);

    return -1; // target no encontrado
}

// Ejemplo de uso
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearchIterative(array, target);
console.log(`El índice del elemento ${target} es: ${result}`);
