

import { model } from "../../llm/model.js";
import { learningPrompt } from "../../prompts/learning.prompt.js";

async function main() {
  const chain = learningPrompt.pipe(model);

  const response = await chain.invoke({
    topic: "LLM fundamentals",
      question: "What is an LLM and how is it different from a normal API?",
  });

  console.log("\nAI Learning Coach:\n");
  console.log(response.content);
}

main().catch((error) => {
  console.error("Application failed:", error);
  process.exit(1);
});