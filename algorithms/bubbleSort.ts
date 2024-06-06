let myarray: number[]=[1,9,6,3,19,45,2,4]

function bubbleSort(array:number[]):void{
    for(let i=0; i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp:number=array[j]
                array[j]=array[j+1]
                array[j+1]=temp

            }

        }
    }
}

bubbleSort(myarray)
console.log(myarray)