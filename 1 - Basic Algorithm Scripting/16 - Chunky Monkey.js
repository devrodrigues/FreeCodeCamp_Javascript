function chunkArrayInGroups(arr, size) {
    //Definimos um array para receber as partes do array original
    let arrayN = [];
    let i = 0;
  
    while(i < arr.length) {
        //Usamos o método slice para retornar as partes de acordo com o parâmetro "size"
        arrayN.push(arr.slice(i, i + size)); //Início da fatia, fim da fatia
        i += size;
    }

    return arrayN;
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));