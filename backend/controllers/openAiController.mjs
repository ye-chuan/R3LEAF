import vision from '../services/visionService.mjs';
import { generateIdentifierPrompt, formatIdentifierOutput } from '../models/prompts/identifierPrompt.mjs';
import { generateReccoPrompt, formatReccoOutput } from '../models/prompts/recommendationPrompt.mjs';

export async function identifyObject(caption, imageBase64) {
  try {
    const prompt = generateIdentifierPrompt(caption, imageBase64);
    const response = await vision(prompt, formatIdentifierOutput);
    return response;
  } catch (e) {
    throw new Error("Error at identifyingObject:\n", e);
  }
}

export async function reccomendVideos(itemToBeUpcycled) {
  try {
    const prompt = generateReccoPrompt(itemToBeUpcycled);
    const response = await vision(prompt, formatReccoOutput);
    return response;
  } catch (e) {
    throw new Error("Error at reccomendVideos:\n", e);
  }
}
