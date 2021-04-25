function getSum( a,b ){
    var res = 0;
    if(a >= b){
      for(var i = b; i <= a; i++){
        res += i;
      }
    } else {
       for(var i = a; i <= b; i++){
        res += i;
      }
    }
    return res
  }