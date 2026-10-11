import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { model } from "../../llm/model.js";

import {
  HumanMessage,
  AIMessage,
  SystemMessage,
} from "@langchain/core/messages";


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
      
      /**
       * streaming response from the model
       */

      let fullResponse = "";

      process.stdout.write("\nCoach: ");
      
      const stream = await model.stream(messages); 

for await (const chunk of stream)  {
  const content = chunk.content;

  if (typeof content === "string") {
    process.stdout.write(content);
    fullResponse += content;
  }
}

process.stdout.write("\n\n");

messages.push(new AIMessage(fullResponse));


    // const response = await model.invoke(messages);

    // console.log("\nCoach:", response.content);

    // messages.push(new AIMessage(response.content.toString()));
  }

  rl.close();
}

main().catch((error) => {
  console.error("Application failed:", error);
  process.exit(1);
});