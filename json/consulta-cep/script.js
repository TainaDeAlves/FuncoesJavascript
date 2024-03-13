// Adiciona a máscara ao campo CEP
document.getElementById('inputCep').addEventListener('input', function (event) {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, ''); 
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
    event.target.value = cep;
});

async function consultarCep() {

    var cep = document.getElementById('inputCep').value;
    cep = cep.replace(/\D/g, '');
    cep = cep.replace('-', '');
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
    // const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro === true) {
        alert('CEP não encontrado.');
    } else {
        document.getElementById('logradouro').textContent = dados.logradouro;
        document.getElementById('bairro').textContent = dados.bairro;
        document.getElementById('complemento').textContent = dados.complemento;
        document.getElementById('cidade').textContent = dados.localidade;
        document.getElementById('estado').textContent = dados.uf;
        document.getElementById('ddd').textContent = dados.ddd;
    }
}
