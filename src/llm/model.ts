import "dotenv/config"; 

// import { ChatGoogle } from "@langchain/google";
import {ChatOllama} from "@langchain/ollama";
import { z } from "zod";

const learningResponseSchema = z.object({
  concept: z.string(),
  simpleExplanation: z.string(),
  whyItMatters: z.string(),
  practicalExample: z.string(),
  commonMistake: z.string(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
});

// export const model = new ChatGoogle({
//   apiKey: process.env.API_KEY,
//   model: process.env.MODEL,
//   temperature: 0,
// });

export const model = new ChatOllama({
  // baseUrl: process.env.LLAMA_SERVER_URL,
  model: process.env.LLAMA_MODEL,
  temperature: 0,
});

export const structuredModel = model.withStructuredOutput(
  learningResponseSchema,
);