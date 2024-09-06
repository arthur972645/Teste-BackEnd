// Olá, turma!
// Façam os testes automatizados com Jest dos exercícios abaixo e disponibilizem nessa atividade o arquivo de funções e o arquivo de testes.
// 1 - Crie uma função que receba diferentes números em uma lista e retorne apenas os números pares dessa lista. Após realize o teste automatizado para essa função.
// 2 - Crie um função que receba uma lista de strings e ordene-as de ordem alfabética. Após, crie um teste que verifica o comportamento correto dessa função. 
// 3 - Crie uma função que receba uma string e conte quantas vogais ela possui. Após, crie um teste que verifica o comportamento correto dessa função.

function AcharNumeroPar(array){

    return array.filter(num => num % 2 === 0)

}
export default AcharNumeroPar