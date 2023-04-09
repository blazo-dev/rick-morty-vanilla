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
    const { name, image, species, status, location, origin, url, gender } =
      character;
    const card = content.cloneNode(true) as HTMLElement;
    const cardImage = card.querySelector("[data-image]") as HTMLImageElement;
    const cardName = card.querySelector("[data-name]") as HTMLAnchorElement;
    const cardSpecies = card.querySelector("[data-species]") as HTMLSpanElement;
    const cardStatus = card.querySelector("[data-status]") as HTMLSpanElement;
    const cardGender = card.querySelector("[data-gender]") as HTMLSpanElement;
    const cardLocation = card.querySelector(
      "[data-location]"
    ) as HTMLParagraphElement;
    const cardOrigin = card.querySelector(
      "[data-origin]"
    ) as HTMLParagraphElement;
    const cardIndicator = card.querySelector(
      "[data-indicator]"
    ) as HTMLSpanElement;

    cardImage.src = image;
    cardName.textContent = name;
    cardName.href = url;
    cardSpecies.textContent = species;
    cardGender.textContent = gender;
    cardStatus.textContent = status;
    cardLocation.textContent = location.name;
    cardOrigin.textContent = origin.name;

    const statusColor = {
      Alive: "card__indicator--alive",
      Dead: "card__indicator--dead",
      unknown: "card__indicator--unknown",
    };

    cardIndicator.classList.add(statusColor[status]);

    cardContainer.appendChild(card);
  });

  container.appendChild(cardContainer);
};
