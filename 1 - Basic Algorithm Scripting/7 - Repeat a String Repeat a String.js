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
