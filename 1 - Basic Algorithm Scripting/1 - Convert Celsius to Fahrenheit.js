//Algoritmo simples que converte uma temperatura dada em Celsius para Fahrenheit

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
console.log(convertToF(30));
console.log(convertToF(-10));
console.log(convertToF(0));