# Back-End Quiz API (BE)

## Overview

This back-end project is an Express.js server that serves as a proxy to the OpenAI API, providing quiz questions based on user-specified topics.

## Prerequisites

- Node.js v14+
- npm (or yarn)
- OpenAI API key

## Installation

1. Navigate into the BE folder:
   ```bash
   cd BE
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Configure environment variables:
   - Create a `.env` file with:
   - OPENAI_API_KEY= <YOUR KEY>
   - OPENAI_MODEL= gpt-4o-mini / gpt-3.5-turbo (default)
   - USE_MOCK=true
   - PORT=<DESIRED PORT IF YOU HAVE - default 3001>

## Running Locally

- Start development server (with hot reload):
  ```bash
  npm run dev
  ```
- Start production server:
  ```bash
  npm start
  ```

## API Endpoints

- **POST** `/api/questions`
  - **Body**: `{ "topic": string, "level": string }`
  - **Response**: `[{ id, text, options[], correctIndex }]`

## Architecture & Key Decisions

- **Express.js**: Lightweight web framework for REST endpoints.
- **OpenAI Proxy**: The server injects the API key and forwards requests to OpenAI, keeping the key secure.
- **Single Route Handler**:  All business logic is implemented directly in the route definition; no separate controller layer.
- **Error Handling**: Basic try/catch with status codes for failures.
- **ESLint + Prettier**: Ensures code consistency and quality.

## Limitations & Trade-offs

- **No Database**: Questions are generated on demand; no persistence.
- **Rate Limits**: Relies on OpenAI quotas; needs better throttling.
- **Minimal Validation**: Only basic payload validation; could be improved.
- **No Tests**: Lacks unit tests for controllers and integration tests for routes.
- **Single Instance**: Not designed for horizontal scaling without adaptation.

## Future Improvements

- Add caching layer (e.g., Redis) to reduce repeated API calls.
- Implement request validation with `Joi` or similar.
- Add Jest/Supertest for automated tests.
- Dockerize service for easier deployment.
- Add rate-limiting middleware (e.g., `express-rate-limit`).

