function bouncer(arr) {
    let arrTrue = [];

    for(let i = 0; i < arr.length; i++){
        if(Boolean(arr[i])) {
            arrTrue.push(arr[i]);
        } 
    }

    return arrTrue;
  }
  
console.log(bouncer([7, "ate", "", false, 9]));