//PREP
//P retorne um novo array onde o primeiro elemento é a soma dos positivos e o segundo elemento é a soma dos negativos, o zero não positivo nem negativo, se o input for um array vazio ou null return um um array vazio.

//R: return um novo array com dois elementos como resultado de soma um para os negativos e outro para positivos.
// E:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input){
    //VERIFICA SE O INPUT É VALIDO
    if(input == null || input.length == 0)
        return []
    //VARIAVEIS PARA ATRIBUIR A CONTAGEM DOS POSITIVOS E A SOMA DOS NEGATIVOS 
    let positive = 0
    let negative = 0
    //LOOP POR TODOS OS ELEMENTOS DO ARRAY
    for(let i = 0; i < input.length; i++){
        //SE POSITIVO
        if(input[i] > 0){
            positive ++
        //SE NEGATIVO ADICIONA A VALRIALVEL  
        }else{
            negative += input[i]
        }
    }
    //RETORNA UM ARRAY COM AS VARIAVEIS
    return [positive,negative]
}