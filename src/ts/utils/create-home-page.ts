import { getCharacters } from "../api.js";
import { createCharacterList } from "../components/create-character-list.js";
import { mainContainer } from "../dom-elements.js";
import { Characters } from "../interfaces/character.interface.js";
import { createPagination } from "../components/create-pagination.js";

export const createHomePage = async (page = 1) => {
  const { info, results }: Characters = await getCharacters(page);

  mainContainer.innerHTML = "";

  mainContainer.appendChild(createPagination(page, info.pages));
  mainContainer.appendChild(createCharacterList(results));
};
