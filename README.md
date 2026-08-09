This project serves as an experiment with Spring boot (Kotlin) with gradle,
React (Typescript) .

## Status (2026)

- `marvel-bff` is a Spring Boot (Kotlin) backend-for-frontend exposing a single
  `GET /characters` endpoint, which calls the Marvel Comics API and returns a
  flat list of character `id`/`name` pairs.
- `marvel-app-ts` is a TypeScript React frontend that fetches `/characters`
  from the BFF (proxied to `localhost:8080` in dev) and renders the list.

**The Marvel Developer API (`developer.marvel.com`) has been retired.** The
portal now redirects to marvel.com, and `gateway.marvel.com` (still hardcoded
in `CharacterRepository.kt`) returns `HTTP 500` for all requests. There is no
way to get a working API key anymore, so `marvel-bff` can no longer fetch real
data — this repo is kept as a snapshot of the Spring Boot + Kotlin + React
plumbing, not a working app. To make it functional again, either point
`CharacterRepository` at a different comics API (e.g. Comic Vine) or stub it
to return mock data.