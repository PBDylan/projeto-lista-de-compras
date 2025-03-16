document.querySelectorAll(".trash-icon").forEach((icon) => {
  icon.addEventListener("click", function (event) {
    event.stopPropagation();

    const box = icon.closest(".box");
    box.remove();

    const alertBox = document.querySelector(".alert");
    alertBox.style.display = "flex";
  });
});

const closeButton = document.querySelector(".alert button");

closeButton.addEventListener("click", function () {
  const alertBox = closeButton.closest(".alert");
  alertBox.style.display = "none";
});

document
  .getElementById("add-item-button")
  .addEventListener("click", function () {
    const inputValue = document.getElementById("item-form").value;

    if (inputValue.trim() !== "") {
      const newBox = document.createElement("label");
      newBox.classList.add("box");

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "opcao";
      radioInput.value = inputValue;

      const span = document.createElement("span");
      span.textContent = inputValue;

      const trashIcon = document.createElement("div");
      trashIcon.classList.add("trash-icon");

      newBox.appendChild(radioInput);
      newBox.appendChild(span);
      newBox.appendChild(trashIcon);

      document.getElementById("box-list").appendChild(newBox);

      document.getElementById("item-form").value = "";

      trashIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        newBox.remove();

        const alertBox = document.querySelector(".alert");
        alertBox.style.display = "flex";
      });
    } else {
      alert("Por favor, insira um item válido!");
    }
  });
