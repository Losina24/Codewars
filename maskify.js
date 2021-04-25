function maskify(cc) {
    if(cc.length > 4) {
      var len = cc.length - 4;
      var newSrt = cc.substring(0, len).replace(/./g, '#')+cc.substring(len);
      return newSrt;
    } else {
      return cc;
    }
  }