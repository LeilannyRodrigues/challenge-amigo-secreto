// Mantemos uma lista global para armazenar os nomes dos amigos.
 let amigos = [];
// Adicionamos uma variável para controlar o estado do sorteio.
 let sorteioRealizado = false;

// Função para adicionar um novo amigo.
 function adicionarAmigo() {
     let nomeInput = document.getElementById('amigo');
     let listaDeAmigosElemento = document.getElementById('listaAmigos');
    

     let nome = nomeInput.value.trim();

    // Validação: Verifica se o campo não está vazio.
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return; // Encerra a função se for inválido.
    }

    // Validação: Verifica se o nome já foi adicionado (ignorando maiúsculas/minúsculas).
    if (amigos.map(a => a.toLowerCase()).includes(nome.toLowerCase())) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        nomeInput.value = ''; // Limpa o campo para facilitar a correção.
        nomeInput.focus();
        return; // Encerra a função.
    }

    // Adiciona o nome à nossa lista (array 'amigos').
    amigos.push(nome);


    // Atualiza a exibição na tela com um laço 'for'.
    // 1. Cria uma string vazia para armazenar o HTML.
    let listaHtml = '';
    // 2. Percorre cada amigo na lista e adiciona um <li> à string.
    for (let amigo of amigos) {
        listaHtml += `<li>${amigo}</li>`;
    }
    // 3. Atualiza o HTML da página de uma só vez com a string completa.
    listaDeAmigosElemento.innerHTML = listaHtml;

    // Limpa o campo de input e coloca o foco nele novamente.
    nomeInput.value = '';
    nomeInput.focus();
}

function sortearAmigo() {
    // Validação: Verifica se a lista de amigos não está vazia.
    // Alterado para verificar se há pelo menos 2 amigos para um sorteio fazer sentido.
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio!');
        return;
    }

    // Gera um índice aleatório baseado no tamanho da lista de amigos.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];
 
    // Exibe o único nome sorteado no elemento 'resultado'.
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<p class="result-list">O amigo secreto sorteado é: ${nomeSorteado}</p>`;

    // Marca que o sorteio foi realizado.
    sorteioRealizado = true;
}

// Função para reiniciar o jogo.
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    sorteioRealizado = false; // Reseta o estado do sorteio.
}

// Adiciona um ouvinte de evento ao campo de entrada de nome.
// Quando o usuário clica (foca) no campo após um sorteio, o jogo é reiniciado.
document.getElementById('amigo').addEventListener('focus', () => {
    if (sorteioRealizado) {
        reiniciar();
    }
}); 
