function titleCase(str) {
    //Transformamos todos os caracteres em minúsculo primeiro
    let arrayS = str.toLowerCase().split(" ");
    console.log(arrayS);

    //Agora substituímos o primeiro caractere de minúsculo para letra maiúscula
    //O método map construirá um array de acordo com o que recebe como retorno
    let result = arrayS.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return result.join(" ");
}
  
console.log(titleCase("I'm a little tea pot"));