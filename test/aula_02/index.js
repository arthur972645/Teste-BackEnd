const divisao = (a, b) => {

    if(b === 0){
        throw new Error("Não pode divisão por zero!")
    }

    return a / b
}
export default divisao

export const influencer = {
    nome: 'Doutora Deolane',
    idade: 36,
    endereco: {
        cidade: 'recife',
        estado: 'pernambuco',

    },
    enderecoprovisorio: "Colônia Penal Feminina Bom Pastor",
    seguidores: 20000000,
    tigrinho: true
}

export const maxAlunos = 30