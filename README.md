# Funções no JavaScript e Document Object Model (DOM)

O Document Object Model (DOM) especifica como os navegadores devem criar um modelo de página HTML e como o JavaScript pode acessar e atualizar o conteúdo de uma página web enquanto ela está na janela do navegador.

O DOM não é parte do HTML e nem é parte do JavaScript; é um conjunto distinto de regras. Ele é implementado por todos os principais fabricantes de navegadores, e abrange duas áreas principais:

### Criação de um modelo da página HTML

Ao carregar uma página web, o navegador cria um modelo da página na memória.
O DOM especifica a maneira como o navegador deve estruturar esse modelo usando uma **árvore DOM**.
O DOM é chamado *modelo de objeto* porque o modelo (a árvore DOM) é feito de objetos.
Cada objeto representa uma parte diferente da página carregada na janela do navegador.

### Acesso e alteração da página HTML

O DOM também define métodos e propriedades para acessar e atualizar cada objeto nesse modelo o que, por sua vez, atualiza aquilo que o usuário vê no navegador.
