var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "../api.js";
import { container } from "../dom-elements.js";
import { $ } from "./dom-elemets-selector.js";
export const createHomePage = () => __awaiter(void 0, void 0, void 0, function* () {
    const { info, results } = yield getCharacters();
    const cardTemplate = $("#card-template");
    const cardContainer = document.createDocumentFragment();
    const { content } = cardTemplate;
    container.innerHTML = "";
    results.forEach((character) => {
        const { id, name, image, species, status } = character;
        const card = content.cloneNode(true);
        const cardImage = card.querySelector(".card__image");
        const cardName = card.querySelector(".card__title");
        const cardSpecies = card.querySelector(".card__species");
        const cardStatus = card.querySelector(".card__status");
        cardImage.src = image;
        cardName.textContent = name;
        cardSpecies.textContent = species;
        cardStatus.textContent = status;
        cardContainer.appendChild(card);
    });
    container.appendChild(cardContainer);
    console.log("createHomePage");
});
