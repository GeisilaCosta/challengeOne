//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista que armazenará os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Adiciona o nome à lista e limpa o campo de entrada
    listaAmigos.push(nome);
    input.value = '';
    atualizarLista();
}

// Função para atualizar a lista visível na página
function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    listaAmigos.forEach((nome, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = nome;
        listItem.className = 'list-item';

        // Botão para remover o nome da lista
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => removerAmigo(index);

        listItem.appendChild(deleteButton);
        listaElement.appendChild(listItem);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[randomIndex];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li class="result-item">🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}
