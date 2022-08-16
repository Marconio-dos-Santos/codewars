//PREP

//P input strings maiusculas ou minusculas de a..Z
//padronizar todas as letras em minusculo
//Tranformar a primeira letra de cada index em maiuscolo, Multiplicar cada sequencia de string pelo seu index usando o repeat(), separar cada sequencia por um dash

//R console.log() do parametro 

//E 
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
    return s.toLowerCase().split('').map((x,i) => x[0].toUpperCase() + x.repeat(i)).join('-')
}