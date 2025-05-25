document.getElementById('form-contato').addEventListener('submit', function(e){
    
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value

    console.log(nome)

    if(nome === '') {
        alert('kjdans')

    }

    if (email === ''){
        alert('foi')
    }

    if (nome !== '' && email !== '') {
        alert('Formulário enviado com sucesso!')
        document.getElementById('form')
}
    

})