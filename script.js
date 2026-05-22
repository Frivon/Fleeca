const slider = document.getElementById("sliderQuantidade");
const valorSelecionado = document.getElementById("valorSelecionado");
const precoSelecionado = document.getElementById("precoSelecionado");
const botaoPagamento = document.getElementById("botaoPagamento");

const valores = [
  "1.500.000",
  "3.000.000",
  "6.000.000"
];

const precos = [
  "R$ 7,00",
  "R$ 14,00",
  "R$ 28,00"
];

const linksPagamento = [
  "https://seulink.com/pagamento7",
  "https://seulink.com/pagamento14",
  "https://seulink.com/pagamento28"
];

slider.addEventListener("input", () => {

  valorSelecionado.textContent = valores[slider.value];

  precoSelecionado.textContent = precos[slider.value];

  botaoPagamento.href = linksPagamento[slider.value];

});
