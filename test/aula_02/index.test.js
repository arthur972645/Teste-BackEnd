import {divisao ,influencer, maxAlunos } from './index.js'

// test("Verifica se o segundo argumento é zero", () => {
//     expect(() => divisao(10, 0)).toThrow(Error)
//     expect(() => divisao(10, 0)).toThrow("Não pode divisão por zero!")
// })

//matcher responsável por verificar as propriedades de um objeto
// test('verifica se a propriedade tigrinho existe no objeto influencer', () => {
//     expect(influencer).toHaveProperty('tigrinho')
//     expect(influencer).not.toHaveProperty('BET')
//     expect(influencer).toHaveProperty('endereco.cidade', 'recife')
// })

// Matcher responsavel por verificar valor maior e monor
test("Verificar numero maximo e minimos", () => {
    //Maior que 25
    expect(maxAlunos).toBeGreaterThan(25)
    //Menor que 40
    expect(maxAlunos).toBeLessThan(40)
})