---
title: Pong Game
description:
  Backend for a multiplayer tournament game with real-time gameplay and secure
  authentication.
demoUrl: null
githubUrl: null
---

## Overview

A multiplayer Pong tournament system with a robust backend built in a modern
TypeScript monorepo. Players can compete in real-time matches and participate in
organized tournaments with persistent rankings.

## Architecture

Built as part of a monorepo architecture separating concerns cleanly across
backend, frontend, and shared utilities.

## Features

- **Real-time gameplay** via WebSockets using tRPC subscriptions
- **Tournament system** with bracket management and match history
- **Secure authentication** with JWT-based access and refresh token flows
- **Scalable API** design using Fastify and tRPC for end-to-end type safety
- **Persistent storage** with SQLite via Drizzle ORM

## Technical Highlights

- **Fastify** for high-performance HTTP and WebSocket handling
- **tRPC** for fully type-safe API contracts between client and server
- **Drizzle ORM** with **SQLite** for lightweight but powerful relational
  storage
- **JWT** authentication with secure token management
- Monorepo structure enabling shared types across frontend and backend
