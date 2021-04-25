function rowSumOddNumbers(n) {
    var counter = 1;
    var aux = [];
    var result = 1;
    var secAux = 1;
    
    if(n == 1){
      return 1
    } else {
      for(var i = 0; i < n; i++){
        aux[0] = secAux;
        secAux += 2;
        for(var j = 1; j < counter; j++){
          aux[j] = aux[j-1] + 2;
          secAux += 2
          result = aux.reduce(function(a, b){ return a + b; });
        }
  
        counter++
      }
      return result
    }
  
  }