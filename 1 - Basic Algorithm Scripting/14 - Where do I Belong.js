// Algoritmo que retorna qual é o menor índice que um determinado valor deve ser inserido em 
//um array organizado de forma crescente

function getIndexToIns(arr, num) {
    //Coloque o array em ordem crescente
    arr.sort(function(a, b){
      return a - b;  
    });

    /*Percorremos cada valor de arr para verificar qual é maior que o
    num inserido*/
    for(let i = 0; i < arr.length; i++){
      if(arr[i] >= num) {
        return i;
      }
    }

    //Para quando o valor arr for vazio ou o último valor for o maior
    return arr.length;
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));