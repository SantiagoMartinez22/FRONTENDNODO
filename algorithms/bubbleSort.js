var myarray = [1, 9, 6, 3, 19, 45, 2, 4];
function bubbleSort(array) {
    /*Este bucle se encarga de iterar sobre el array desde el primer elemento hasta el penúltimo elemento (i < array.length - 1).
     La razón por la que llega hasta el penúltimo elemento es que cuando solo queda un elemento por revisar, 
     ya no es necesario realizar más comparaciones.*/ 
    for (var i = 0; i < array.length - 1; i++) {
/* Itera desde el primer elemento hasta el elemento que está a una posición antes del último elemento ya ordenado (j < array.length - i - 1). 
La razón por la que se resta i es porque en cada iteración del primer bucle,
 el último elemento ya está ordenado, por lo que no es necesario volver a compararlo.*/ 
        for (var j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
bubbleSort(myarray);
console.log(myarray);
