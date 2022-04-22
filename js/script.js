// Questão 1: Na div "questao-1", há uma lista não ordenada com quatro items <li>. Insira mais um elemento via manipulação do DOM.

const elementoPai1 = document.getElementById('pai');
const novoLi = document.createElement('li');
const novoTextoParaLi = document.createTextNode('Quinto elemento, adicionado via DOM');

novoLi.appendChild(novoTextoParaLi);

elementoPai1.appendChild(novoTextoParaLi);

// Questão 2: Acesse o último filho da div "questão-2", percorrendo o DOM. Confira o resultado no console.log.

const elementoPai2 = document.getElementById('pai2');
console.log(elementoPai2);
const ultimoFilho = elementoPai2.lastChild;
ultimoFilho.innerHTML = 'To alteando o texto...'

// Questão 3: Por meio do método innerHTML, insira um novo parágrafo na div "questao-3".

const elementoPai3 = document.getElementById('questao-3');
const novoParagrafo = document.createElement('p');

novoParagrafo.innerHTML = 'Oi! Eu sou o novo parágrafo';

elementoPai3.appendChild(novoParagrafo);



