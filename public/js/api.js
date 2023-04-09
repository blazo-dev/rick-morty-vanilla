var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { env } from "./env.js";
export function getCharacter(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${env.API_URL}/character/${id}`);
        const character = yield response.json();
        return character;
    });
}
export function getCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${env.API_URL}/character`);
        const characters = yield response.json();
        return characters;
    });
}
