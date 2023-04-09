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
import { createCharacterList } from "../components/create-character-list.js";
import { mainContainer } from "../dom-elements.js";
import { createPagination } from "../components/create-pagination.js";
export const createHomePage = (page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const { info, results } = yield getCharacters(page);
    mainContainer.innerHTML = "";
    mainContainer.appendChild(createPagination(page, info.pages));
    mainContainer.appendChild(createCharacterList(results));
});
