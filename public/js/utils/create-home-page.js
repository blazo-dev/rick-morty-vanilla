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
    const { results } = yield getCharacters();
    const cardTemplate = $("#card-template");
    const cardContainer = document.createDocumentFragment();
    const { content } = cardTemplate;
    container.innerHTML = "";
    results.forEach((character) => {
        const { name, image, species, status } = character;
        const card = content.cloneNode(true);
        const cardImage = card.querySelector("[data-image]");
        const cardName = card.querySelector("[data-name]");
        const cardSpecies = card.querySelector("[data-species]");
        const cardStatus = card.querySelector("[data-status]");
        cardImage.src = image;
        cardName.textContent = name;
        cardSpecies.textContent = species;
        cardStatus.textContent = status;
        cardContainer.appendChild(card);
    });
    container.appendChild(cardContainer);
});
