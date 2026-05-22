const slider = document.getElementById("sliderQuantidade");
const valorGTA = document.getElementById("valorGTA");
const preco = document.getElementById("precoSelecionado");
const botao = document.getElementById("botaoPagamento");

const dados = [
  {
    gta: "1.500.000",
    preco: "R$ 7,00"
  },
  {
    gta: "3.000.000",
    preco: "R$ 14,00"
  },
  {
    gta: "6.000.000",
    preco: "R$ 28,00"
  }
];

function atualizar() {
  const item = dados[slider.value];

  valorGTA.innerText = item.gta;
  preco.innerText = item.preco;

  botao.href =
    "https://wa.me/5541992878220?text=Olá,%20quero%20comprar%20" +
    item.gta +
    "%20por%20" +
    item.preco;
}

slider.addEventListener("input", atualizar);

atualizar();
