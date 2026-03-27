---
title: 'Chess Analysis'
description: 'A chess game analysis platform that classifies moves, detects openings, and generates detailed accuracy reports using engine evaluation.'
image: '/project/chess-analysis.jpeg'
technologies:
  [
    'TypeScript',
    'Node.js',
    'Express',
    'Chess.js',
    'PGN Parser',
    'Stockfish',
    'HTML',
    'CSS',
    'Docker',
    'Vercel',
  ]
github: 'https://github.com/mr-anvesh/chess-analysis'
live: 'https://chess-analysis.anvesh.dev'
timeline: '1 month'
role: 'Full Stack'
team: 'Solo'
status: 'completed'
featured: true
challenges:
  - 'Accurate move classification across edge cases'
  - 'Brilliant move detection with sacrifice validation'
  - 'Engine line evaluation and cutoff scoring'
  - 'Opening book integration with PGN parsing'
  - 'Real-time board rendering and eval bar sync'
learnings:
  - 'Chess engine integration and evaluation scoring'
  - 'Move classification logic with centipawn thresholds'
  - 'PGN parsing and virtual board simulation'
  - 'Full-stack TypeScript project architecture'
  - 'Visual report design for game analysis'
isPublished: true
---

# Chess Analysis

## Overview
A chess game analysis platform that parses PGN game data, simulates positions with a virtual board, evaluates moves via a chess engine, and generates detailed per-move reports — classifying each move and computing accuracy scores for both players.

## What Users Can Do
- **Analyse Games**: Paste a PGN to trigger move-by-move engine analysis with classification and evaluation.
- **Review the Report**: Navigate through an interactive board replay with an eval bar, eval graph, and engine suggestions.
- **Understand Accuracy**: See overall accuracy scores and a full breakdown of move classifications (Brilliant, Great, Best, Excellent, Good, Inaccuracy, Mistake, Blunder).

## Why I Built This
I built this to deeply understand how chess engines evaluate positions and how platforms like Chess.com generate their game reports:
- Existing tools are black-box — I wanted to build the classification logic from scratch.
- It was an opportunity to explore engine integration, position analysis, and interactive frontend design.

## Tech Stack
TypeScript
Node.js
Express
Chess.js
PGN Parser
Stockfish (engine evaluation)
HTML / CSS
Docker
Vercel

## Move Classification System
Each move is classified based on evaluation loss relative to the engine's top line:

| Classification | Description |
|---|---|
| **Brilliant** | Sacrifice of a non-pawn piece that is tactically sound |
| **Great** | Only move to recover from a blunder |
| **Best** | Matches the engine's top move |
| **Excellent** | Minimal evaluation loss |
| **Good** | Small evaluation loss |
| **Inaccuracy** | Moderate evaluation loss |
| **Mistake** | Significant evaluation loss |
| **Blunder** | Large evaluation loss or missed mate |
| **Book** | Named opening theory move |
| **Forced** | Only legal move in the position |

## After Launch and Impact
- Built a full move classification pipeline from PGN parsing through engine evaluation to report generation.
- Implemented brilliant move detection with sacrifice and pin validation logic.
- Delivered an interactive frontend with board replay, eval bar, eval graph, and engine line suggestions.
- Deepened understanding of chess engine scoring, positional analysis, and TypeScript full-stack architecture.

## Future Plans
- Project Completed
