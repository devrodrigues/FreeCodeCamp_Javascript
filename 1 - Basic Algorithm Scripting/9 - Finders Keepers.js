// Algoritmo que retorna o primeiro elemento do array que passa no teste fornecido

function findElement(arr, func) {
    return arr.find(func);
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9, 10], num => num -10 === 0));