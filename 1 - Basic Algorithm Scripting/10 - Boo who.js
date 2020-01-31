// Algoritmo que checa se um valor é um booleano

function booWho(bool) {
    return typeof bool === 'boolean';
}
  
console.log(booWho(false));
console.log(booWho([].slice));
console.log(booWho(1));
console.log(booWho("true"));
console.log(booWho(Object));

