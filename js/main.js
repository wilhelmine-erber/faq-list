"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const helpElements = document.querySelectorAll("[data-help]");

  for (const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault();

      const helpText = helpElement.attributes["data-help"].value;
      alert(helpText);
    });
  }

  const cardHeaderAll = document.getElementsByClassName("card-header");

  for (const cardHeader of cardHeaderAll) {
    cardHeader.style.cursor = "pointer";

    const cardBody = cardHeader.nextElementSibling;
    const cardIcon = cardHeader.querySelector(".card-toggle-icon");

    cardBody.classList.add("d-none");
    cardIcon.classList.remove("fa-angle-double-down");
    cardIcon.classList.add("fa-angle-double-right");

    cardHeader.addEventListener("click", () => {
      cardBody.classList.toggle("d-none");

      if (cardBody.classList.contains("d-none")) {
        cardIcon.classList.remove("fa-angle-double-down");
        cardIcon.classList.add("fa-angle-double-right");
      } else {
        cardIcon.classList.remove("fa-angle-double-right");
        cardIcon.classList.add("fa-angle-double-down");
      }
      console.log(cardIcon);
    });
  }
});
