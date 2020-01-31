// Algoritmo que verifica se uma letra é a última letra de uma palavra dada

function confirmEnding(str, target) {
    let char = target.length;

    if(str.substr(-char) === target) {
        return true;
    } else {
        return false;
    }
}
  
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("Abstraction", "action"));