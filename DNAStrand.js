function DNAStrand(dna){
    var result = '';
    var str = dna.split('').filter((nucleotide) => {
      if(nucleotide == 'A') {
        result += 'T'
      } else if(nucleotide == 'T') {
        result += 'A'
      } else if(nucleotide == 'C') {
        result += 'G'
      } else if(nucleotide == 'G') {
        result += 'C'
      } 
    });
  
    return result;
  }