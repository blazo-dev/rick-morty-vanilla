import { getEpisode } from "../api.js";
import { homeButton } from "../dom-elements.js";
import { Character, Episode } from "../interfaces/character.interface";
import { $ } from "../utils/dom-elemets-selector.js";

export const createCharacterPage = (character: Character): HTMLElement => {
  homeButton.disabled = false;

  const characterPageTemplate = $(
    "#character-page-template"
  ) as HTMLTemplateElement;
  const { content } = characterPageTemplate;
  const characterPage = content.cloneNode(true) as HTMLElement;
  const characterName = characterPage.querySelector(
    "[data-name]"
  ) as HTMLHeadingElement;
  const characterImage = characterPage.querySelector(
    "[data-image]"
  ) as HTMLImageElement;
  const characterStatus = characterPage.querySelector(
    "[data-status]"
  ) as HTMLSpanElement;
  const characterSpecies = characterPage.querySelector(
    "[data-species]"
  ) as HTMLSpanElement;
  const characterGender = characterPage.querySelector(
    "[data-gender]"
  ) as HTMLSpanElement;
  const characterOrigin = characterPage.querySelector(
    "[data-origin]"
  ) as HTMLSpanElement;
  const characterLocation = characterPage.querySelector(
    "[data-location]"
  ) as HTMLSpanElement;
  const characterEpisodesList = characterPage.querySelector(
    "[data-episodes]"
  ) as HTMLOListElement;
  const characterEpisodeItem = characterPage.querySelector(
    "[data-episode]"
  ) as HTMLLIElement;
  const characterStatusIndicator = characterPage.querySelector(
    "[data-indicator]"
  ) as HTMLSpanElement;

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

  character.episode.forEach(async (episodeUrl) => {
    const episode = await getEpisode(episodeUrl);
    const episodeItem = characterEpisodeItem.cloneNode(true) as HTMLLIElement;

    episodeItem.textContent = episode.name;
    characterEpisodesList.appendChild(episodeItem);
  });

  return characterPage;
};
