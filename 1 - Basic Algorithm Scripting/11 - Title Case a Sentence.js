// Algoritmo que retorna a primeira letra de cada palavra fornecida em maiúscula e todas as outras
//letras em mínuscula

function titleCase(str) {
    //Transformamos todos os caracteres em minúsculo primeiro e guardamos separadamente as palavras
    let arrayS = str.toLowerCase().split(" ");

    //Agora substituímos o primeiro caractere para maiúsculo
    //O método map construirá um array de acordo com o que recebe como retorno
    let result = arrayS.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    //Retornamos a string completa
    return result.join(" ");
}
  
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));