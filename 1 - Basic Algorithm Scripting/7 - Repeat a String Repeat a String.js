// Algoritmo que retorna a string oferecida repetida n vezes

function repeatStringNumTimes(str, num) {
    let s = "";

    if(num < 1) {
        return "";
    } else {    
        while(num > 0) {
            s += str;
            num--;
        }
    }

    return s;
}
  
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));
console.log(repeatStringNumTimes("abc", 4));