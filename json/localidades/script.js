document.addEventListener("DOMContentLoaded", async function(){

    const listaMunicipio = document.getElementById("municipios-list");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');

    const dados = await resposta.json();

    dados.forEach(function(municipio) {

        const li = document.createElement('li');

        li.textContent = municipio.nome;

        listaMunicipio.appendChild(li);
        
    });
}


)