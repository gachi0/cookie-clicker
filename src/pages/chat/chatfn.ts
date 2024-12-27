import { Content, GenerationConfig, GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { createStore } from "solid-js/store";

const genAI = new GoogleGenerativeAI('');

const model = genAI.getGenerativeModel({
  model: "gemini-exp-1206",
  systemInstruction: ``,
  safetySettings: [
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
  ],
});

export const chatSession = model.startChat({
  generationConfig: {
    temperature: 1.35,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 819,
    responseMimeType: "text/plain",
  },
});

export const [history, setHistory] = createStore<Content[]>([]);

export async function sendmsg(msg: string) {
  const result = await chatSession.sendMessage(msg);
  const history = await chatSession.getHistory();
  setHistory(history);
  return result.response.text();
}
