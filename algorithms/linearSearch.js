function search(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
var pos = search([23, 78, 45, 1337, 89, 14], 89);
console.log(pos);
