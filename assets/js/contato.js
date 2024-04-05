import {lerMensagensLocaStorage} from "./util.js";
import {exibirLista} from "./mensagens.js";

const formulario = document.getElementById('formulario-contato')

formulario.addEventListener('submit',(e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const conteudo = document.getElementById('conteudo').value;

  const mensagem = {nome:nome,email:email,conteudo:conteudo};
  
  const mensagens = lerMensagensLocaStorage();

  mensagens.push(mensagem);
  localStorage.setItem('mensagens',JSON.stringify(mensagens));
  limparFormulario();
})

const limparFormulario = () => {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('conteudo').value = '';
}

const modalMensagens = document.getElementById('modal-mensagens');

modalMensagens.addEventListener('shown.bs.modal', () => {
  const mensagens = lerMensagensLocaStorage();
  const table = document.getElementById('lista-mensagens');
  exibirLista(mensagens,table);
})
