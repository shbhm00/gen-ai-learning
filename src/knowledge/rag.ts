export const ragKnowledge = `
RAG stands for Retrieval-Augmented Generation.

RAG combines information retrieval with language generation.
Instead of relying only on the knowledge stored inside an LLM,
the application first retrieves relevant information from an
external knowledge source.

A typical RAG pipeline has three major stages:

1. Retrieve relevant documents.
2. Add the retrieved documents to the prompt.
3. Ask the LLM to generate an answer using that context.

RAG is useful when an application needs to answer questions
using private, domain-specific, or frequently changing information.

Reranking is a second-stage retrieval technique.
An initial retriever retrieves a set of potentially relevant
documents. A reranker then evaluates those documents in more
detail and reorders them based on their relevance to the query.

Reranking can improve the quality of the context provided to
the LLM because the most relevant documents can be placed first.
`;