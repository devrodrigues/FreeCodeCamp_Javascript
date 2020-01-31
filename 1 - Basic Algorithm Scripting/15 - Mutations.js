// Algoritmo que retorna true se todas as letras da segunda string estão presentes na primeira string

function mutation(arr) {
    //Criamos dois arrays e colocamos cada palavra em um array com todas as letras em minúsculo.
    let arr1 = arr[0].toLowerCase().split('');
    let arr2 = arr[1].toLowerCase().split('');

    /*Depois fazemos a busca. Se alguma letra da segunda palavra não estiver presente na primeira
    palavra, já retornaremos false*/
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1) {
            return false;
        } 
    }

    //Se não retornou false, é porque todas as letras da segunda palavra estão presente na primeira palavra
    return true;
}
  
console.log(mutation(["heLlo", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Noel", "Ole"]));