import { ChatGoogle } from "@langchain/google";
import { z } from "zod";

const learningResponseSchema = z.object({
  concept: z.string(),
  simpleExplanation: z.string(),
  whyItMatters: z.string(),
  practicalExample: z.string(),
  commonMistake: z.string(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
});

export const model = new ChatGoogle({
  apiKey: "AQ.Ab8RN6JN8HR_enrt7NBNk2odqdd_LuFWhJlNAny-Vh_oJVFjVg",
  model: "gemini-flash-latest",
  temperature: 0,
});

export const structuredModel = model.withStructuredOutput(
  learningResponseSchema,
);