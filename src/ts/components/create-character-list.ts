import { Character } from "../interfaces/character.interface";
import { createCharacterCard } from "./create-character-card.js";

export const createCharacterList = (
  characters: Character[]
): DocumentFragment => {
  const cardContainer: DocumentFragment = document.createDocumentFragment();

  characters.forEach((character: Character) => {
    cardContainer.appendChild(createCharacterCard(character));
  });

  return cardContainer;
};
