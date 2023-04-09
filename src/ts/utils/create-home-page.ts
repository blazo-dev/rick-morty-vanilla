import { getCharacters } from "../api.js";
import { container } from "../dom-elements.js";
import { Character, Characters } from "../interfaces/character.interface.js";
import { $ } from "./dom-elemets-selector.js";

export const createHomePage = async () => {
  const { info, results }: Characters = await getCharacters();
  const cardTemplate = $("#card-template") as HTMLTemplateElement;
  const cardContainer: DocumentFragment = document.createDocumentFragment();
  const { content } = cardTemplate;

  container.innerHTML = "";

  results.forEach((character: Character) => {
    const { id, name, image, species, status } = character;
    const card = content.cloneNode(true) as HTMLElement;
    const cardImage = card.querySelector(".card__image") as HTMLImageElement;
    const cardName = card.querySelector(".card__title") as HTMLHeadingElement;
    const cardSpecies = card.querySelector(
      ".card__species"
    ) as HTMLParagraphElement;
    const cardStatus = card.querySelector(
      ".card__status"
    ) as HTMLParagraphElement;

    cardImage.src = image;
    cardName.textContent = name;
    cardSpecies.textContent = species;
    cardStatus.textContent = status;

    cardContainer.appendChild(card);
  });

  container.appendChild(cardContainer);
  console.log("createHomePage");
};
