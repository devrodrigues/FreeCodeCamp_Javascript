function confirmEnding(str, target) {
    let char = target.length;

    if(str.substr(-char) === target) {
        return true;
    } else {
        return false;
    }
}
  
console.log(confirmEnding("Bastian", "n"));