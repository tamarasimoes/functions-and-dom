# Funções no JavaScript e Document Object Model (DOM)

### Conteúdos
 - <a href="https://github.com/tamaratryber/functions-and-dom/blob/main/README.md#introdução">Introdução</a>
 - <a href="https://github.com/tamaratryber/functions-and-dom/blob/main/README.md#introdução">Acessando elementos</a>
 - <a href="https://github.com/tamaratryber/functions-and-dom/blob/main/README.md#introdução">Métodos que selecionam elementos individuais</a>
 - <a href="https://github.com/tamaratryber/functions-and-dom/blob/main/README.md#introdução">NodeLists: _Consultas DOM que retornam mais de um elemento_</a>



## Introdução

O Document Object Model (DOM) especifica como os navegadores devem criar um modelo de página HTML e como o JavaScript pode acessar e atualizar o conteúdo de uma página web enquanto ela está na janela do navegador.

O DOM não é parte do HTML e nem é parte do JavaScript; é um conjunto distinto de regras. Ele é implementado por todos os principais fabricantes de navegadores, e abrange duas áreas principais:

### Criação de um modelo da página HTML

Ao carregar uma página web, o navegador cria um modelo da página na memória.
O DOM especifica a maneira como o navegador deve estruturar esse modelo usando uma **árvore DOM**.
O DOM é chamado *modelo de objeto* porque o modelo (a árvore DOM) é feito de objetos.
Cada objeto representa uma parte diferente da página carregada na janela do navegador.

### Acesso e alteração da página HTML

O DOM também define métodos e propriedades para acessar e atualizar cada objeto nesse modelo o que, por sua vez, atualiza aquilo que o usuário vê no navegador.


 Nó Document  | Nós de Elemento   | Nós de atributo | Nós de texto
 ------------ | ----------------- | --------------- | ------------
Acima, você pode ver o código HTML para uma lista de compras, e logo após está a **árvore DOM**. Cada elemento, atributo e fragmento de texto na HTML é represemtado por um **nó DOM** próprio. No topo da árvore, está o **nó document**; ele representa toda a página. Ao acessar qualquer elemento, atributo ou nó do texto, você pode navegar por ele via _nó document_. Ele é o ponto de partida para todas as visitas à árvore DOM. | Elementos HTML descrevem a estrutura de uma página HTML. Exemplo: os elementos **h1** a **h6** descrevem quais partes são títulos; as tags **p** indicam onde parágrafos de texto começam e terminam, etc. Para acessar a árvore DOM, você começa procurando os elementos. Depois de encontrar o elemento desejado, você pode acessar os nós de texto e de atributo que quiser. É por isso que você começa aprendendo métodos que permitem acessar nós de elemento, antes de aprender a acessar e alterar o texto ou atributos. | As tags de abertura dos elementos HTML podem conter atributos e esses são representados por nós de atributo na árvore DOM. Nós de atributo não são filhos do elemento que os contém; são parte desse elemento. Depois de acessar um elemento, há métodos e propriedades JavaScript específicos para ler ou modificar os atributos desse elemento. Por exemplo, é comum alterar os valores dos atributos _class_ para disparar novas regras CSS que afetam sua apresentação. | Depois de ter acessado um nó de elemento, você pode então buscar o texto dentro desse elemento. Isso é armazenado em nó de texto próprio. Nós de texto não podem ter filhos. Se um elemento contiver texto e outro elemento filho, o elemento filho não é um filho do nó de texto, mas sim, apenas um filho do elemento que o contém. _Exemplo: Veja na imagem acima que o elemento **em** está no primeiro item **li**. Isso ilustra como o nó de texto sempre é um novo ramo da árvore DOM, mas nenhum outro ramo sai dele._

## Acessando elementos


- **getElementById('id'):** Seleciona um elemento individual dado o valor de seu atributo _id_. A HTML deve ter um atributo id para que ela possa ser selecionável dessa forma.


- **querySelector('seletor css'):** Usa a sintaxe do seletor CSS que selecionaria um ou mais elementos. Esse método só retorna _o primeiro_ dos elementos correspondentes.


- **getElementsByClassName('classe'):** Seleciona um ou mais elementos dado o valor de seu atributo _class_. A HTML deve ter um atributo class para que ela seja selecionável. Esse método é mais rápido do que _querySelectorAll_.


- **getElementsByTagName('nome da tag'):** Seleciona todos os elementos na página com o nome de tag especificado. Esse método é mais rápido do que _querySelectorAll_.


- **querySelectorAll('seletor css'):** Usa a sintaxe do seletor CSS para selecionar um ou mais elementos e retorna todos aqueles que correspondem. 

## Métodos que selecionam elementos individuais

Veja o exemplo:

<img src="https://github.com/tamaratryber/functions-and-dom/blob/main/dom.png">

## NodeLists: _Consultas DOM que retornam mais de um elemento_

Quando um método DOM pode retornar mais de um elemento, ele retorna uma NodeList (mesmo se encontrar somente um elemento que corresponde.

Um NodeList é uma coleção de nós de elemento. Cada nó recebe um número de índice (um número que começa em zero, como um array).
A ordem em que os nós de elemento são armazenados em uma NodeList é a mesma ordem que apareceu na página HTML.

Quando uma consulta DOM retorna uma NodeList, talvez você queira:
- Selecionar um elemento a partir do NodeList.
- Fazer um loop em cada item do NodeList e executar as mesmas instruções em cada um dos nós de elemento.

NodeLists se parecem com arrays e são numerados como arrays, mas na verdade não são arrays; são um tipo de objeto chamado *coleção*.

Como qualquer outro objeto, uma NodeList tem propriedades e métodos, nomeadamente:

- A propriedade **lenght** informa quandos itens estão no NodeList.
- O método **item()** retorna um nó específico do NodeList quando você informa o número de índice do item que você quer (entre parênteses). Mas é mais comum usar a sintaxe de array (com colchetes) para recuperar o item de uma NodeList.

<img src="https://github.com/tamaratryber/functions-and-dom/blob/main/nodelists.png">

_Aqui você pode ver quatro diferentes consultas DOM que retornam uma NodeList. Para cada consulta, você pode ver os elementos e seus números de índice no NodeList que é retornado._

####getElementsbyTagName('h1'):
Embora essa consulta retorne um único elemento, o método ainda retorna uma NodeList por causa do potencial de retornar mais de um elemento.

| Número de Índice | Elemento |
|---|---|
| 0 | `<h1>`| 
 

