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
import { createCharacterList } from "./create-character-list.js";
import { homeButton, mainContainer } from "../dom-elements.js";
import { createPagination } from "./create-pagination.js";
export const createHomePage = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const { info, results } = yield getCharacters(page);
    homeButton.addEventListener("click", () => {
        homeButton.disabled = true;
        createHomePage();
    });
    homeButton.disabled = true;
    mainContainer.innerHTML = "";
    mainContainer.appendChild(createPagination(page, info.pages));
    mainContainer.appendChild(createCharacterList(results));
});
