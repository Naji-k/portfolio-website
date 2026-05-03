---
title: Webserver
description: A non-blocking HTTP/1.1 server built from scratch in C++.
demoUrl: null
githubUrl: null
---

## Overview

A from-scratch HTTP/1.1 server written in C++, built without any external HTTP
libraries. The server handles concurrent connections using non-blocking I/O with
`epoll` / `kqueue`, making it production-capable for static file serving and
dynamic CGI execution.

## Features

- **Non-blocking I/O** with multiplexed connections — no blocking on a single
  slow client
- **HTTP methods**: GET, POST, and DELETE request handling
- **Static file serving**: serves HTML, CSS, JS, images, and any arbitrary file
  type
- **Dynamic content** via CGI — executes scripts and returns generated responses
- **Custom configuration** via a config file (server root, ports, routes, error
  pages)

## Technical Highlights

- Built in **C++** with full POSIX socket API usage (`socket`, `bind`, `listen`,
  `accept`)
- Event-driven architecture using `epoll` (Linux) / `kqueue` (macOS)
- Parses raw HTTP request headers and bodies from scratch
- CGI integration spawns child processes and pipes I/O bidirectionally
- Handles chunked transfer encoding and persistent connections
