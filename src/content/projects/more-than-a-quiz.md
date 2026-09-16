---
title: More Than a Quiz
description:
  A live quiz built for one camping trip — four teams answering from their
  phones, a shared screen as the scoreboard, and a host panel I ran the whole
  thing from.
demoUrl: null
githubUrl: null
---

## Why I built it

We were going camping for four days, 34 people split into four teams, and I
wanted to run a quiz. There were plenty of platforms I could have used, but I
didn't want a standard quiz — I wanted teams to attack each other, prepare their
own defense in advance, steal points, and earn advantages through physical
challenges around the camp. Existing platforms are built around more generic
quiz formats, and bending those rules into one would have meant designing the
game around the tool. A normal quiz also has a dead spot built in: one team
answers while everyone else waits. That wasn't going to hold up across four
nights. So I built the platform around the game instead.

## What I built

Each team answered from one phone, playing as one of four competing empires: Romans, Vikings, Egyptians, and Samurai. I also designed a shared map and physical cards around them, so the game had an identity outside the screens.

A shared screen showed the question, timer, and scores, while I ran everything from a host panel on my laptop. Questions ran in two formats so four nights wouldn't turn into the same fifteen minutes on repeat: one gave a single team first crack, with a steal phase opening if they missed; the other put all four teams on the clock at once, ranked by speed.

Each team could also prepare its own defense questions through a separate authenticated page, so I could quickly pull their set when another team attacked them.

Because teams were writing their own questions, I needed a quick way to check them before they entered the game. I built a **review agent** that used Wikipedia as the shared reference source and returned a structured result for each submission: whether the question and answer held up, what was unclear, and a suggested correction when needed. I still made the final call before a question went live.

Between rounds, physical mini-games around the camp earned advantages like 50/50, extra time, or the right to switch a question. Teams weren't just trying to know more answers, they were deciding which advantages to earn, which questions to save, and when a card was actually worth spending.

## Running it live

Running this in front of a group is a different problem than running it alone.
So the system ran on one rule: **the server owns the truth.** Phase, scores, the
timer, who's allowed to answer all of it lives on the server, and every screen just renders the same state

Reconnection was built in from the start: if a phone lost connection or
refreshed, it could rejoin using a token stored on the device. If a team
switched phones entirely, its code reclaimed the same seat and score. Phones
lock and batteries die; that shouldn't stop a live game. No accounts, no
database — software for a camping trip, not a bank.

## How it played out

It ran across all four nights and became one of the things people talked about
most during the trip. By the second night they weren't just answering questions
— they were saving them, planning who to attack, and competing for cards because
they already knew where they'd spend them. I had designed those mechanics before
the trip. Seeing people actually plan around them was the part I enjoyed most.

Nobody had asked me to build any of this. I just thought the camping trip needed
a better game.

## Tech stack

React, TypeScript, Node.js, Express, Socket.IO, and Tailwind, sharing one set of
types between client and server so a mismatched field failed to compile instead
of failing live. State lived in memory with a snapshot on disk, so a crash
wouldn't wipe four nights of scores.

## Screenshots

<div>
    <div style="text-align: center; margin: 24px 0;font-weight: bold;">
      <p style="margin: 12px 0;">Map</p>
      <img src="/assets/projects/MoreThanAQuiz/map.jpg" alt="Map" />
      <p style="margin: 12px 0;">Game Board</p>
      <img src="/assets/projects/MoreThanAQuiz/game_board.png" alt="Game Board" style="width: 100%; height: auto;" />
      <!-- <p style="margin: 12px 0;">Preview</p>
      <img src="/assets/projects/MoreThanAQuiz/preview.png" alt="Preview" style="width: 100%; height: auto;" /> -->
      </p>
      <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: start;">
      <div>
        <p style="margin: 12px 0;">Game on Phone</p>
        <img src="/assets/projects/MoreThanAQuiz/game_phone.jpg" alt="Game on Phone" style="width: 100%; height: auto;" />
      </div>
      <div>
        <p style="margin: 12px 0;">Add Question</p>
        <img src="/assets/projects/MoreThanAQuiz/add_question.png" alt="Add Question" style="width: 100%; height: auto;" />
      </div>
      <div>
        <!-- <p style="margin: 12px 0;">Cards</p> -->
        <img src="/assets/projects/MoreThanAQuiz/cards.png" alt="Cards" style="width: 100%; height: auto;" />
      </div>
      <div>
        <!-- <p style="margin: 12px 0;">Cards</p> -->
        <img src="/assets/projects/MoreThanAQuiz/cards-2.png" alt="Cards" style="width: 100%; height: auto;" />
      </div>
      <div>
        <!-- <p style="margin: 12px 0;">Cards</p> -->
        <img src="/assets/projects/MoreThanAQuiz/cards-3.png" alt="Cards" style="width: 100%; height: auto;" />
      </div>
      <div>
        <!-- <p style="margin: 12px 0;">Cards</p> -->
        <img src="/assets/projects/MoreThanAQuiz/cards-4.png" alt="Cards" style="width: 100%; height: auto;" />
      </div>
    </div>
</div>
