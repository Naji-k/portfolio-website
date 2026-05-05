---
title: Pong Game
description:
  "A real-time 3D multiplayer Pong game with tournament management and
  backend-authoritative gameplay."
demoUrl: null
githubUrl: https://github.com/Naji-k/ft_transcendence-pong
---

## Overview

ft_transcendence(Pong) is a real-time 3D multiplayer Pong game with tournament
management, player profiles, authentication, and live gameplay synchronization.

The project was built as a full-stack application with a backend-authoritative
architecture, where game state and gameplay rules are controlled server-side to
support fair play and reduce cheating risks.

## Features

- Real-time 3D Pong gameplay
- Support for 2–6 players per match
- Tournament creation, joining, brackets, and progression
- User authentication with email/password and Google OAuth
- JWT-based sessions
- Two-factor authentication support
- User profiles with avatars
- Friend system and online/offline status
- Match history and player statistics
- Real-time game and tournament status updates

## Architecture

The project uses a monorepo structure with separate frontend, backend,
infrastructure, and shared packages.

The frontend is built with SvelteKit and Babylon.js for the 3D game experience.
The backend is built with Fastify and tRPC, using SQLite with Drizzle ORM for
persistence.

Real-time communication is handled through tRPC WebSocket subscriptions. Player
actions are sent to the backend, while game state updates are broadcast back to
clients. The backend remains the source of truth for game state, physics, and
match progression.

## Technical Highlights

- Designed backend-authoritative gameplay to keep game state and physics
  controlled server-side.
- Used tRPC for type-safe APIs and WebSocket subscriptions across the full
  stack.
- Implemented authentication with JWT, Argon2 password hashing, and Google
  OAuth.
- Used Zod schemas for input validation and safer API boundaries.
- Structured the project as a monorepo with shared packages for database access,
  tRPC contracts, and TypeScript configuration.
- Built tournament logic with live status updates, bracket progression, and
  match flow management.
- Containerized the application with Docker and used Caddy as a reverse proxy.

## Screenshots

<div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Video</p>
    <img src="/assets/projects/Pong/pong-video.mov" alt="pong-demo" />
  </div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Remote 4 players</p>
    <img src="/assets/projects/Pong/4players.png" alt="Pong 4 players" style="width: 100%; height: auto;" />
  </div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Game lobby</p>
    <img src="/assets/projects/Pong/game-lobby.png" alt="Pong game lobby" style="width: 100%; height: auto;" />
  </div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Tournament</p>
    <img src="/assets/projects/Pong/tournament.png" alt="Pong tournament" style="width: 100%; height: auto;" />
  </div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Profile</p>
    <img src="/assets/projects/Pong/profile.png" alt="Pong Profile" style="width: 100%; height: auto;" />
  </div>
</div>
