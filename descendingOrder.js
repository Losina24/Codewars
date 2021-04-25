function descendingOrder(n){
    var output = '';
    var str = n.toString().split('');
    
    for(var i = 0; i < str.length; i++){
      for(var j = 0; j < str.length-i; j++){
        if(j < str.length && str[j] < str[j+1]){
          var aux = [];
          aux[0] = str[j+1];
          str.splice(j+1, 1);
          let auxList = aux.concat(str);
          str = auxList
        }
      }
    }
    return parseInt(str.join(''))
  }