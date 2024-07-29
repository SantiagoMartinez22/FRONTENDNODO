import * as readline from 'readline';
const rl =readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

function normalize(input:string):string{
    let normalized:string="";
    for(let i=0; i<input.length;i++){
        const char=input[i].toLowerCase();
        if((char>='a' && char<='z') || (char>='0' && char<='9')){
            normalized +=char;
        }
    }
    return normalized;
}

function checkpalindrome(string:string):boolean{
    const normalized=normalize(string);
    let left=0;
    let right=string.length-1;
    while(left<right){
        if(normalized[left]!=normalized[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

rl.question('introduce lo que deseas checkear si es palindromo o no',(input)=>{
    if(checkpalindrome(input)){
        console.log("Lo ingresado si es palindromo")
    }else{
        console.log("lo ingresado no es palindromo")
    }
    rl.close();
});