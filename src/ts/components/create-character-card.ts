import { mainContainer } from "../dom-elements.js";
import { Character } from "../interfaces/character.interface";
import { $ } from "../utils/dom-elemets-selector.js";
import { createCharacterPage } from "./create-character-page.js";

export const createCharacterCard = (character: Character): HTMLElement => {
  const cardTemplate = $("#card-template") as HTMLTemplateElement;
  const { content } = cardTemplate;

  const { name, image, species, status, location, origin, url, gender } =
    character;
  const card = content.cloneNode(true) as HTMLElement;

  const cardGender = card.querySelector("[data-gender]") as HTMLSpanElement;
  const cardImage = card.querySelector("[data-image]") as HTMLImageElement;
  const cardLocation = card.querySelector(
    "[data-location]"
  ) as HTMLParagraphElement;
  const cardName = card.querySelector("[data-name]") as HTMLAnchorElement;
  const cardOrigin = card.querySelector(
    "[data-origin]"
  ) as HTMLParagraphElement;
  const cardSpecies = card.querySelector("[data-species]") as HTMLSpanElement;
  const cardStatus = card.querySelector("[data-status]") as HTMLSpanElement;
  const cardIndicator = card.querySelector(
    "[data-indicator]"
  ) as HTMLSpanElement;

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
