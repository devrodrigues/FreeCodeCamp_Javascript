function truncateString(str, num) {
    let truncateString = str.substring(0, num);

    if (str.length > num) {
        return truncateString+"...";
    } else {
        return truncateString;
    }
    
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
