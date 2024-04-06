import {lerMensagensLocaStorage} from "./util.js";

const mensagens = lerMensagensLocaStorage()

const table = document.getElementById('lista-mensagens')

export const exibirLista = (lista, tabela) => {
    tabela.innerHTML = '';
    var cabecalho = tabela.createTHead();
    var linhaCabecalho = cabecalho.insertRow();
    var headers = ['Nome', 'Email', 'Conteúdo'];
    headers.forEach(function(header) {
        var th = document.createElement('th');
        th.textContent = header;
        linhaCabecalho.appendChild(th);
    });

    var corpoTabela = document.createElement('tbody');
    tabela.appendChild(corpoTabela);

    if (lista.length === 0) {
        var linha = corpoTabela.insertRow();
        linha.className="text-center"
        var celula = linha.insertCell();
        celula.colSpan = 3; // Colspan 3 para ocupar todas as colunas
        celula.textContent = "Nada a ser exibido";
    } else {
        lista.forEach(function(objeto) {
            var linha = corpoTabela.insertRow();
            linha.insertCell().textContent = objeto.nome;
            linha.insertCell().textContent = objeto.email;
            linha.insertCell().textContent = objeto.conteudo;
        });
    }
}

var limparMensagensBtn = document.getElementById('limpar-mensagens');
limparMensagensBtn.addEventListener('click', function() {
    limparTabela();
    limparMensagensLocalStorage();
    exibirLista([],table);
});

const limparTabela = () => {
    table.innerHTML = '';
}

const limparMensagensLocalStorage = () => {
    localStorage.removeItem('mensagens');
}