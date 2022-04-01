const listaSelecaoPokemons = document.querySelectorAll(".pokemon");
const pokemonsCard = document.querySelectorAll(".cartao-pokemon");

listaSelecaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    const idPokemonSelecionado = pokemon.attributes.id.value;

    const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado;

    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    const PokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    PokemonSelecionadoNaListagem.classList.add("ativo");
  });
});

//Este array de objetos armazena as informações dos pokemons, inclusive as suas classes html.
var arrayCartoes = [
  {
    DivClass: "cartao-pokemon aberto tipo-eletrico",
    DivId: "cartao-pikachu",
    img: { src: "./src/images/pikachu.png", alt: "Imagem do Pikachu" },
    nome: "Pikachu",
    tipo: "elétrico",
    id: "#025",
    status: {
      hp: 300,
      ataque: 600,
      defesa: 500,
      velocidade: 300,
      total: function () {
        return this.hp + this.ataque + this.defesa + this.velocidade;
      },
    },
    habilidades: {
      habilidade1: "Choque do trovão",
      habilidade2: "Cabeçada",
    },
  },
  {
    DivClass: "cartao-pokemon tipo-grama",
    DivId: "cartao-bulbasaur",
    img: { src: "./src/images/bulbasaur.png", alt: "Imagem do Bulbasaur" },
    nome: "Bulbasaur",
    tipo: "grama",
    id: "#001",
    status: {
      hp: 320,
      ataque: 510,
      defesa: 400,
      velocidade: 200,
      total: function () {
        return this.hp + this.ataque + this.defesa + this.velocidade;
      },
    },
    habilidades: {
      habilidade1: "Folhas navalha",
      habilidade2: "Raio solar",
    },
  },

  {
    DivClass: "cartao-pokemon tipo-fogo",
    DivId: "cartao-charmander",
    img: { src: "./src/images/charmander.png", alt: "Imagem do Charmander" },
    nome: "Charmander",
    tipo: "fogo",
    id: "#004",
    status: {
      hp: 200,
      ataque: 300,
      defesa: 400,
      velocidade: 320,
      total: function () {
        return this.hp + this.ataque + this.defesa + this.velocidade;
      },
    },
    habilidades: {
      habilidade1: "Lança-chamas",
      habilidade2: "Ataque rápido",
    },
  },
  {
    DivClass: "cartao-pokemon tipo-agua",
    DivId: "cartao-gyarados",
    img: { src: "./src/images/gyarados.png", alt: "Imagem do Gyarados" },
    nome: "Gyarados",
    tipo: "água",
    id: "#130",
    status: {
      hp: 300,
      ataque: 600,
      defesa: 500,
      velocidade: 300,
      total: function () {
        return this.hp + this.ataque + this.defesa + this.velocidade;
      },
    },
    habilidades: {
      habilidade1: "Jato d'agua",
      habilidade2: "Hidro bomba",
    },
  },
  {
    DivClass: "cartao-pokemon tipo-trevas",
    DivId: "cartao-gengar",
    img: { src: "./src/images/gengar.png", alt: "Imagem do Gengar" },
    nome: "Gengar",
    tipo: "trevas",
    id: "#094",
    status: {
      hp: 100,
      ataque: 200,
      defesa: 300,
      velocidade: 400,
      total: function () {
        return this.hp + this.ataque + this.defesa + this.velocidade;
      },
    },
    habilidades: {
      habilidade1: "Bola sombria",
      habilidade2: "Lambida",
    },
  },
  {
    DivClass: "cartao-pokemon tipo-dragao",
    DivId: "cartao-dragonite",
    img: { src: "./src/images/dragonite.png", alt: "Imagem do Dragonite" },
    nome: "Dragonite",
    tipo: "dragão",
    id: "#149",
    status: {
      hp: 500,
      ataque: 600,
      defesa: 400,
      velocidade: 400,
      total: function () {
        return this.hp + this.ataque + this.defesa + this.velocidade;
      },
    },
    habilidades: {
      habilidade1: "Dança do dragão",
      habilidade2: "Velocidade extrema",
    },
  },
];

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
