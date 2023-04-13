import { createCharacterCard } from "./create-character-card.js";
export const createCharacterList = (characters) => {
    const cardContainer = document.createDocumentFragment();
    characters.forEach((character) => {
        cardContainer.appendChild(createCharacterCard(character));
    });
    return cardContainer;
};
