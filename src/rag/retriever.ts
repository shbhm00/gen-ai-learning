import { ragKnowledge } from "../knowledge/rag.js";

export function retrieveContext(question: string): string {
  const normalizedQuestion = question.toLowerCase();

  const keywords = [
    "rag",
    "retrieval",
    "reranking",
    "rerank",
    "document",
    "llm",
  ];

  const isRelevant = keywords.some((keyword) =>
    normalizedQuestion.includes(keyword),
  );

  if (isRelevant) {
    return ragKnowledge;
  }

  return "";
}