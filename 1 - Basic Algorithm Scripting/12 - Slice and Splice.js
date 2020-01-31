// Algoritmo que copia todos os elementos do segundo array no primeiro a partir do índice determinado

function frankenSplice(arr1, arr2, n) {
    /*Primeiro adicionamos o conteúdo do arr2 em uma variável para que possamos
    fazer alterações*/
    let a2 = arr2.slice();

    /*Depois usamos o método splice (que, diferente do slice, altera o array original) 
    com spread operator para adicionarmos arr1 em arr2 da forma desejada*/
    a2.splice(n, 0, ...arr1); //"a partir do índice n, inserimos o conteúdo desejado, deletando 0 valores"

    return a2;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
