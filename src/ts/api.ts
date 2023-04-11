import { env } from "./env.js";
import {
  ApiResponse,
  Character,
  Episode,
} from "./interfaces/character.interface";

export async function getCharacter(id: number): Promise<Character> {
  const response: Response = await fetch(`${env.API_URL}/character/${id}`);
  const character: Character = await response.json();
  return character;
}

export async function getCharacters(
  page?: number
): Promise<ApiResponse<Character>> {
  const response: Response = await fetch(
    `${env.API_URL}/character?page=${
      page ?? Math.floor(Math.random() * 42) + 1
    }`
  );
  const characters: ApiResponse<Character> = await response.json();
  return characters;
}

export async function getEpisode(url: string): Promise<Episode> {
  const response: Response = await fetch(url);
  const episode: Episode = await response.json();
  return episode;
}
