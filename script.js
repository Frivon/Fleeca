const slider = document.getElementById("sliderQuantidade");
const valorSelecionado = document.getElementById("valorSelecionado");

const valores = ["1.500.000", "3.000.000", "6.000.000"];

slider.addEventListener("input", () => {
  valorSelecionado.textContent = valores[slider.value];
});
