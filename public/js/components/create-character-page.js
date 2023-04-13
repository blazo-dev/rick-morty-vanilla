var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getEpisode } from "../api.js";
import { homeButton } from "../dom-elements.js";
import { $ } from "../utils/dom-elemets-selector.js";
export const createCharacterPage = (character) => {
    homeButton.disabled = false;
    const characterPageTemplate = $("#character-page-template");
    const { content } = characterPageTemplate;
    const characterPage = content.cloneNode(true);
    const characterName = characterPage.querySelector("[data-name]");
    const characterImage = characterPage.querySelector("[data-image]");
    const characterStatus = characterPage.querySelector("[data-status]");
    const characterSpecies = characterPage.querySelector("[data-species]");
    const characterGender = characterPage.querySelector("[data-gender]");
    const characterOrigin = characterPage.querySelector("[data-origin]");
    const characterLocation = characterPage.querySelector("[data-location]");
    const characterEpisodesList = characterPage.querySelector("[data-episodes]");
    const characterEpisodeItem = characterPage.querySelector("[data-episode]");
    const characterStatusIndicator = characterPage.querySelector("[data-indicator]");
    characterName.textContent = character.name;
    characterImage.src = character.image;
    characterStatus.textContent = character.status;
    characterSpecies.textContent = character.species;
    characterGender.textContent = character.gender;
    characterOrigin.textContent = character.origin.name;
    characterLocation.textContent = character.location.name;
    characterEpisodesList.innerHTML = "";
    const statusClass = {
        Alive: "indicator--alive",
        Dead: "indicator--dead",
        unknown: "indicator--unknown",
    };
    characterStatusIndicator.classList.add(statusClass[character.status]);
    character.episode.forEach((episodeUrl) => __awaiter(void 0, void 0, void 0, function* () {
        const episode = yield getEpisode(episodeUrl);
        const episodeItem = characterEpisodeItem.cloneNode(true);
        episodeItem.textContent = episode.name;
        characterEpisodesList.appendChild(episodeItem);
    }));
    return characterPage;
};
