document.addEventListener("DOMContentLoaded", async function () {
    const conteudo = document.getElementById("conteudo");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR');

    const dados = await resposta.json();

    dados.forEach(function (inflacao) {

        const divBlocoInflacao = document.createElement("div"); //criando a div

        divBlocoInflacao.classList.add("bloco-inflacao"); //atribuindo o nome de class

        const ulsubtitulo = document.createElement("ul");
        ulsubtitulo.setAttribute("id", "subtitulo") // setAttribute("id" "nome do id") =>adiciona um id.

        const liSubtitulo = document.createElement("li")
        liSubtitulo.textContent = `${inflacao.medida} -(${inflacao.unidade})`;

        ulsubtitulo.appendChild(liSubtitulo);

        divBlocoInflacao.appendChild(ulsubtitulo);

        const resultados = inflacao.resultados;

        resultados.forEach(function (resultado) {
            const olresultados = document.createElement("ol");

            const series = resultado.series;

            series.forEach(function (serieGeral) {

                const serieData = serieGeral.serie;
                for (const anoMes in serieData) {

                    const liSerie = document.createElement("li");
                    liSerie.textContent = `${anoMes} - ${serieData[anoMes]}`;

                    olresultados.appendChild(liSerie);

                }


            });

            ulsubtitulo.appendChild(olresultados)
        });


        conteudo.appendChild(divBlocoInflacao);



    });
}
)
