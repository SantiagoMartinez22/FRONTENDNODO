let kg: number
let height:number

function bmi(kg:number,height:number):void{

    let bmi:number=kg/(height*height)
    console.log("el BMI calculado es de ",bmi)
    let  clasification:String
    if(bmi<18.5) clasification="bajo"
    else if(bmi>=18.5 && bmi<=24.9) clasification="normal"
    else if(bmi>=25 && bmi <=29.9) clasification="Sobrepeso"
    else clasification="Obesidad"

    console.log("Tu clasificacion es de: ",clasification," y tu bmi es de: ", bmi)

}

bmi(40,1.90)

bmi(70,1.70)
bmi(140,1.77)

