# Mistral -> Groq Migration

Mistral has been replaced with Groq in this project.

## Install

From `Backend`:

```bash
npm install
```

This installs the new `@langchain/groq` dependency and generates a fresh `package-lock.json`.

## Environment variables

Create `Backend/.env`:

```env
GOOGLE_API_KEY=your_google_api_key
GROQ_API_KEY=your_groq_api_key
COHERE_API_KEY=your_cohere_api_key
```

## Groq model

The project uses:

```text
openai/gpt-oss-20b
```

Then run:

```bash
npm run dev
```
