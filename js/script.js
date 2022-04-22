// Questão 1: Na div "questao-1", há uma lista não ordenada com quatro items <li>. Insira mais um elemento <li> via manipulação do DOM.

//Pai
const elementoPai1 = document.getElementById('pai');

// Novo filho
const novoLi = document.createElement('li');
const novoTextoLi = document.createTextNode('Quinto elemento, adicionado via DOM');

novoLi.appendChild(novoTextoLi)

// relacionar pai e filho
elementoPai1.appendChild(novoTextoLi)

// Questão 2: Acesse o último filho da div "questão-2", percorrendo o DOM. Confira o resultado no console.log.

const elementoPai2 = document.getElementById('pai2');
const ultimoFilho = elementoPai2.lastElementChild;
console.log(ultimoFilho);
ultimoFilho.innerHTML = "Estou alterando o último filho";

// Questão 3: Por meio do método innerHTML, insira um novo parágrafo na div "questao-3".

// 1. Indicar quem é o elemento pai
const elementoPai3 = document.getElementById('questao-3');

// 2. Criar o elemento filho
const novoParagrafo = document.createElement('p');

// 3. Adicionar um texto a esse novo filho

novoParagrafo.innerHTML = 'Oi! Eu sou o novo parágrafo';

// 4. Relacionar pai e filho, nessa ordem

elementoPai3.appendChild(novoParagrafo);


// Questão 4: Vamos rever eventos? A div "questao-4" contém um formulário. Crie uma função que receba um nome digitado no campo "Digite seu nome", gere uma saudação e mostre na página, no momento em que o botão "Clique aqui!" for acionado.

const botao = document.getElementById('boasVindas');
const inputNome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

const saudacao = () => {
    let textoDaMensagem = `Olá, ${inputNome.value}!`;
    mensagem.innerHTML = textoDaMensagem;
}

botao.addEventListener('click', saudacao);


//Pegando o target de um elemento

