import { mainContainer } from "../dom-elements.js";
import { $ } from "../utils/dom-elemets-selector.js";
import { createCharacterPage } from "./create-character-page.js";
export const createCharacterCard = (character) => {
    const cardTemplate = $("#card-template");
    const { content } = cardTemplate;
    const { name, image, species, status, location, origin, url, gender } = character;
    const card = content.cloneNode(true);
    const cardGender = card.querySelector("[data-gender]");
    const cardImage = card.querySelector("[data-image]");
    const cardLocation = card.querySelector("[data-location]");
    const cardName = card.querySelector("[data-name]");
    const cardOrigin = card.querySelector("[data-origin]");
    const cardSpecies = card.querySelector("[data-species]");
    const cardStatus = card.querySelector("[data-status]");
    const cardIndicator = card.querySelector("[data-indicator]");
    cardGender.textContent = gender;
    cardImage.src = image;
    cardLocation.textContent = location.name;
    cardName.textContent = name;
    cardOrigin.textContent = origin.name;
    cardSpecies.textContent = species;
    cardStatus.textContent = status;
    const statusClass = {
        Alive: "indicator--alive",
        Dead: "indicator--dead",
        unknown: "indicator--unknown",
    };
    cardIndicator.classList.add(statusClass[status]);
    cardName.addEventListener("click", (e) => {
        e.preventDefault();
        const characterPage = createCharacterPage(character);
        mainContainer.innerHTML = "";
        mainContainer.appendChild(characterPage);
    });
    return card;
};
