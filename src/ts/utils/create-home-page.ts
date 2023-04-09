import { getCharacters } from "../api.js";
import { container } from "../dom-elements.js";
import { Character, Characters } from "../interfaces/character.interface.js";
import { $ } from "./dom-elemets-selector.js";

export const createHomePage = async () => {
  const { results }: Characters = await getCharacters();
  const cardTemplate = $("#card-template") as HTMLTemplateElement;
  const cardContainer: DocumentFragment = document.createDocumentFragment();
  const { content } = cardTemplate;

  container.innerHTML = "";

  results.forEach((character: Character) => {
    const { name, image, species, status } = character;
    const card = content.cloneNode(true) as HTMLElement;
    const cardImage = card.querySelector("[data-image]") as HTMLImageElement;
    const cardName = card.querySelector("[data-name]") as HTMLHeadingElement;
    const cardSpecies = card.querySelector(
      "[data-species]"
    ) as HTMLParagraphElement;
    const cardStatus = card.querySelector(
      "[data-status]"
    ) as HTMLParagraphElement;

    cardImage.src = image;
    cardName.textContent = name;
    cardSpecies.textContent = species;
    cardStatus.textContent = status;

    cardContainer.appendChild(card);
  });

  container.appendChild(cardContainer);
};
