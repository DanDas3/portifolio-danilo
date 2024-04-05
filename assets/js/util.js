export const lerMensagensLocaStorage = () => {
    const mensagensLocalStorage= localStorage.getItem('mensagens')

    if(mensagensLocalStorage === null) {
        return []
    }
    return JSON.parse(mensagensLocalStorage)
}