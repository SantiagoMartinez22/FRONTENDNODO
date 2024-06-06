function search(array: number[], value: number):number{
    for(let i=0;i<array.length;i++){
        if(array[i]===value){
            return i
        }
    }
    return -1
}

let pos :number =search([23,78,45,1337,89,14],89)
console.log(pos)