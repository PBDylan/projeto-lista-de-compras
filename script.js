document.querySelectorAll(".trash-icon").forEach((icon) => {
  icon.addEventListener("click", function (event) {
    // Impede que o clique na lixeira seja propagado para a .box
    event.stopPropagation();

    // Remove a caixa que contém a lixeira
    const box = icon.closest(".box"); // Encontra a .box mais próxima da lixeira
    box.remove(); // Remove a .box da página
  });
});
