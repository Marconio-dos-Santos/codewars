function findShort(s){
    let wordsLength = s.split(' ').map(x => x.length)
    return Math.min(...wordsLength)
  }