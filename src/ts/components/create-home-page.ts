import { getCharacters } from "../api.js";
import { createCharacterList } from "./create-character-list.js";
import { homeButton, mainContainer } from "../dom-elements.js";
import { createPagination } from "./create-pagination.js";
import { ApiResponse, Character } from "../interfaces/character.interface";

export const createHomePage = async (page = 1) => {
  const { info, results }: ApiResponse<Character> = await getCharacters(page);

  homeButton.addEventListener("click", () => {
    homeButton.disabled = true;
    createHomePage();
  });
  homeButton.disabled = true;

  mainContainer.innerHTML = "";

  mainContainer.appendChild(createPagination(page, info.pages));
  mainContainer.appendChild(createCharacterList(results));
};
