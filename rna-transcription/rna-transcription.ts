export default class Transcriptor {
  toRna(nucleotide: string) {
    var rnaStrand = '';
    for (var char of nucleotide) {
      switch(char) {
        case 'G': {
          rnaStrand = rnaStrand.concat('C');
          break;
        }
        case 'C': {
          rnaStrand = rnaStrand.concat('G');
          break;
        }
        case 'T': {
          rnaStrand = rnaStrand.concat('A');
          break;
        }
        case 'A': {
          rnaStrand = rnaStrand.concat('U');
          break;
        }
        default: {
          throw new Error('Invalid input DNA.');
        }
      }
    }
    return rnaStrand;
  }
}
