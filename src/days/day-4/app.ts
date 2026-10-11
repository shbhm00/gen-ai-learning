import {model} from "../../llm/model.js";

import { ragPrompt } from "../../prompts/rag.prompt.js";
import { retrieveContext } from "../../rag/retriever.js";

async function main() {
  const question = "What is reranking in RAG?";

  const context = retrieveContext(question);

  if (!context) {
    console.log("No relevant information found.");
    return;
  }

  const chain = ragPrompt.pipe(model);

  const response = await chain.invoke({
    context,
    question,
  });

  console.log("\nQuestion:");
  console.log(question);

  console.log("\nAnswer:");
  console.log(response.content);
}

main().catch((error) => {
  console.error("Application failed:", error);
  process.exit(1);
});