// Algoritmo que retorna uma parte de uma string

function truncateString(str, num) {
    let truncateString = str.substring(0, num);

    if (str.length > num) {
        //Se a string for maior que num oferecido, concatetaremos reticências ao final da parte cortada
        return truncateString+"...";
    } else {
        return truncateString;
    }
    
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
