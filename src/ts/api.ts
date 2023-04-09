import { env } from "./env.js";
import { Character, Characters } from "./interfaces/character.interface";

export async function getCharacter(id: number): Promise<Character> {
  const response: Response = await fetch(`${env.API_URL}/character/${id}`);
  const character: Character = await response.json();
  return character;
}

export async function getCharacters(): Promise<Characters> {
  const response: Response = await fetch(`${env.API_URL}/character`);
  const characters: Characters = await response.json();
  return characters;
}
