// Algoritmo que retorna o fatorial de um inteiro

function factorialize(num) {
    if (num < 0) {
        return "Insira um número maior ou igual a 0!";
    } else {
        let f = 1;
        for(let i = num; i > 1; i--) {
            f = f * i;
        }
        return f;
    }
}

console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(-1));