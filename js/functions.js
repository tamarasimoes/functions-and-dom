//Escreva uma função:
// Essa função deverá receber 2 parametros.
// a função deverá retornar a soma de 2 números.

function somaValores(primeiroNumero, segundoNumero) {
  return primeiroNumero + segundoNumero;
};

//console.log(somaValores(5, 8));

//Escreva uma função que retorne se a pessoa paga meia ou inteira no cinema.
// a função deve receber um parametro, a idade da pessoa
// a função deve fazer duas verificações, se a idade da pessoa for igual ou maior a 18 anos 
//ela paga inteira 
// se não ela pega meia
// se não existir idade disparar um erro "insira uma idade"

function verificaIdade(idade) {
  if (!idade) {
    return 'insira uma idade'
  }
  if (idade >= 18) {
    return 'inteira'
  }
  return 'meia'
}

//console.log(verificaIdade(8))


// Escreva uma função que receba um objeto e retorne o valor da propriedade cidade desse objeto
// usar typeof para verificar se é um objeto

function retornaValorObjeto(obj) {
  if (typeof obj === 'object') {
    return obj.cidade;
  };
  return 'passe objeto'
};

//console.log(retornaValorObjeto())


//Adicionando propriedades em um objeto
//Escreva uma função que receba uma chave e um valor e adicione ao nosso objeto abaixo
const objeto = {
  nome: 'ana',
}

function retornaChaveObjeto(chave, valor) {
  objeto[chave] = valor
  return objeto;
}

//console.log(retornaChaveObjeto('idade', 24));

//Escreva uma função que receba um array e um numero e retorne
// o indice referente ao numero que foi passado

function retornaArrayIndice(array, numero) {
  return array[numero - 1];
}

console.log(retornaArrayIndice([1, 2, 5, 6], 3))




