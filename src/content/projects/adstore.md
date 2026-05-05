---
title: ADStore
description:
  A secondhand marketplace iOS app with real-time chat and listing
  functionality.
githubUrl: https://www.github.com/naji-
---

## Overview

ADStore is a full-featured secondhand marketplace for iOS, designed to let users
buy and sell items with ease. Built natively in Swift, the app integrates
Firebase for real-time data sync and GCP for scalable backend infrastructure.

## Features

- **Real-time chat** between buyers and sellers using Firebase Realtime
  Database(NoSQL)
- **Listing management**: create, edit, and browse listings with photos
- **Favorites**: save items to a personal watchlist
- **Push notifications** for new messages and listing updates
- **User authentication** via Firebase Auth

## Technical Highlights

- Architected with **UIKit** following the **MVC** pattern for clean separation
  of concerns
- Integrated **Firebase Firestore** for listings data and **Firebase Storage**
  for image uploads
- Implemented real-time chat with **Firebase Realtime Database**
- Deployed backend services on **GCP**, including Cloud Functions for
  notification triggers
- Used **CocoaPods** for dependency management

<div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Video</p>
    <img src="/assets/projects/ADStore/movie.gif" alt="ADStore-demo" style="width: 50%; height: auto;" />
  </div>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 24px 0;">
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Chat & Gap Analysis</p>
    <img src="/assets/projects/ADStore/Chat.png" alt="ADStore chat" style="width: 100%; height: auto;" />
  </div>
  <div style="text-align: center;">
    <p style="font-weight: bold; margin-bottom: 12px;">Home screen</p>
    <img src="/assets/projects/ADStore/Home.png" alt="ADStore home" style="width: 100%; height: auto;" />
  </div>
</div>
