import { arrayCartoes } from "./cards.js";
//Esta função gera todos os cards dinamicamente de acordo com os dados obtidos do array de pokemons
function createCards() {
  arrayCartoes.forEach((card) => {
    const cartoesPokemon = document.querySelector(".cartoes-pokemon");
    const divCartao = document.createElement("div");
    divCartao.setAttribute("class", card.DivClass);
    divCartao.setAttribute("id", card.DivId);
    cartoesPokemon.appendChild(divCartao);

    const divCartaoTopo = document.createElement("div");
    divCartaoTopo.setAttribute("class", "cartao-topo");
    divCartao.appendChild(divCartaoTopo);

    const divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("class", "detalhes");
    divCartaoTopo.appendChild(divDetalhes);

    const nome = document.createElement("h2");
    nome.setAttribute("class", "nome");
    nome.textContent = card.nome;

    const span = document.createElement("span");
    span.textContent = card.id;

    const spanTipo = document.createElement("span");
    spanTipo.setAttribute("class", "tipo");
    spanTipo.textContent = card.tipo;

    divDetalhes.appendChild(nome);
    divDetalhes.appendChild(span);
    divCartaoTopo.appendChild(spanTipo);

    const divImg = document.createElement("div");
    divImg.setAttribute("class", "cartao-imagem");

    const img = document.createElement("img");
    img.src = card.img.src;
    img.alt = card.img.alt;

    divImg.appendChild(img);

    divCartaoTopo.appendChild(divImg);

    const divInfo = document.createElement("div");
    divInfo.setAttribute("class", "cartao-informacoes");
    divCartao.appendChild(divInfo);

    const divStatus = document.createElement("div");
    divStatus.setAttribute("class", "status");
    divInfo.appendChild(divStatus);

    const hstatus = document.createElement("h3");
    hstatus.textContent = "Status";
    divStatus.appendChild(hstatus);

    const ul = document.createElement("ul");

    divStatus.appendChild(ul);

    let status = [
      `HP: ${card.status.hp}`,
      `Ataque: ${card.status.ataque}`,
      `Defesa: ${card.status.defesa}`,
      `Velocidade: ${card.status.velocidade} `,
      `Total: ${card.status.total()}`,
    ];

    status.forEach((stts) => {
      const li = document.createElement("li");
      li.textContent = stts;
      ul.appendChild(li);
    });

    const divHabilidade = document.createElement("div");
    divHabilidade.setAttribute("class", "habilidades");
    divInfo.appendChild(divHabilidade);

    const tituloHb = document.createElement("h3");
    tituloHb.textContent = "Habilidades";

    divHabilidade.appendChild(tituloHb);

    const ulHb = document.createElement("ul");
    divHabilidade.appendChild(ulHb);

    const habilidade = [
      `${card.habilidades.habilidade1}`,
      `${card.habilidades.habilidade2}`,
    ];

    habilidade.forEach((hb) => {
      const lihb = document.createElement("li");
      lihb.textContent = hb;

      ulHb.appendChild(lihb);
    });
  });
}

export default createCards();
