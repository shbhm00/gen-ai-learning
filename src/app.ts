import { ChatGoogle } from "@langchain/google";
import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// import { ragPrompt } from "./prompts/rag.prompt.js";
// import { retrieveContext } from "./rag/retriever.js";

const model = new ChatGoogle({
  apiKey: process.env.API_KEY,
  model: process.env.MODEL,
});

async function main() {
  const rl = readline.createInterface({
    input,
    output,
  });

  const messages = [
    new SystemMessage(
      `You are an AI Learning Coach helping a JavaScript/TypeScript developer learn AI application development.

Keep explanations practical and concise.`,
    ),
  ];

  console.log("AI Learning Coach");
  console.log('Type "exit" to quit.\n');

  while (true) {
    const question = await rl.question("You: ");

    if (question.toLowerCase() === "exit") {
      break;
    }

    messages.push(new HumanMessage(question));

   let fullResponse = "";

process.stdout.write("\nCoach: ");

for await (const chunk of await model.stream(messages)) {
  const content = chunk.content;

  if (typeof content === "string") {
    process.stdout.write(content);
    fullResponse += content;
  }
}

process.stdout.write("\n\n");

messages.push(new AIMessage(fullResponse));
  }

  rl.close();
}

main().catch((error) => {
  console.error("Application failed:", error);
  process.exit(1);
});