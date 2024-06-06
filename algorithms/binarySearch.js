function binarySearchIterative(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    do {
        var mid = left + Math.floor((right - left) / 2); // mid se declara con let
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    } while (left <= right);
    return -1; // target no encontrado
}
// Ejemplo de uso
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 5;
var result = binarySearchIterative(array, target);
console.log("El \u00EDndice del elemento ".concat(target, " es: ").concat(result));
