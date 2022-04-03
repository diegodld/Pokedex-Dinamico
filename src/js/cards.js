//Este array de objetos armazena as informações dos pokemons, inclusive as suas classes html.
export var arrayCartoes = [
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
