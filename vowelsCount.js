function vowelsCount(str) {
    var vowelsCounter = 0;
    
    var text = str.toLowerCase().replace(/\s/g,'').split('');
    var res = text.filter((letter) => {
      if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        vowelsCount++
      }
    })
    
    return vowelsCounter;
  }