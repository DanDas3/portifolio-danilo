const formulario = document.getElementById('formulario-contato')

formulario.addEventListener('submit',(e) => {
  e.preventDefault()

  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const conteudo = document.getElementById('conteudo').value

  const mensagem = {nome:nome,email:email,conteudo:conteudo}

  const mensagensLocalStorage = localStorage.getItem('mensagens')
  let mensagens = []

  if(mensagensLocalStorage !== null) {
    mensagens = JSON.parse(mensagensLocalStorage)
  }

  mensagens.push(mensagem)
  localStorage.setItem('mensagens',JSON.stringify(mensagens))
})