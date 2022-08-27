// return masked string
function maskify(cc) {
    const last4Digits = cc.slice(-4);
    const maskedNumber = last4Digits.padStart(cc.length, '#');
    return maskedNumber
  }
  
//O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.