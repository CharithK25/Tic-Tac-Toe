# 🎮 Tic Tac Toe

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

A performant and modular **Tic Tac Toe** game built using **React (Vite)**, showcasing best practices in component-driven architecture, state management, and unidirectional data flow.

---

## 🚀 Overview

This project demonstrates how to build an interactive game using **React functional components**, **state lifting**, and **prop drilling** to maintain a single source of truth.  
It emphasizes **reusability, controlled components, and declarative rendering** for predictable UI behavior.

---

## ⚙️ Core Technical Concepts

### 🧩 Component-Based Architecture
- Encapsulated UI logic into modular components:
  - `GameBoard` – Renders and manages the 3×3 grid dynamically.  
  - `Player` – Handles player name inputs with two-way binding.  
  - `Logs` – Displays turn history using mapped lists.  
  - `App` – Centralized parent component managing shared state.

### 🔄 Data & State Management
- **Lifting state up**: Shared the `turns` state from `App` down to children for consistent state flow.  
- **Shared state across components**: Multiple child components (like `Logs` and `GameBoard`) render from the same lifted state, ensuring data synchronization.  
- **Two-way binding**: Used controlled inputs for player names, allowing instant reflection in the UI.  
- **Forwarding props**: Passed event handlers and state values as props to wrapped elements for reusable behavior.  

### 🧮 Rendering Logic
- **Dynamic component rendering** using JavaScript’s array methods to render a **multi-dimensional game board** (`3x3 matrix`).  
- **Conditional rendering** for winner announcement and draw detection.  
- **WINNING_COMBINATIONS** file used to calculate the game result efficiently using array destructuring.

### ⚡ Performance & React Best Practices
- Employed **unidirectional data flow** to ensure predictable updates.  
- Used **functional state updates** to handle multiple state changes efficiently.  
- Split logic across small, self-contained components for maintainability and scalability.  
- Minimal DOM re-renders by deriving computed values (winner, active player) rather than storing redundant state.

---

## 🧠 Key Concepts Demonstrated

| Concept | Description |
|----------|--------------|
| 🧱 **Props** | Passed data and functions between parent and child components. |
| 🎛 **Dynamic Rendering** | Rendered multi-dimensional lists using `map()` loops. |
| 🔁 **Two-Way Binding** | Used controlled inputs for player names. |
| 🪜 **Lifting State Up** | Centralized game logic in `App.jsx` and shared it across components. |
| 🌐 **State Sharing** | Synchronized UI updates across GameBoard, Logs, and Player. |
| ⚙️ **Forwarding Props** | Passed handlers and data to wrapped components for modularity. |
| 💡 **Declarative UI** | UI derived directly from state — no manual DOM manipulation. |

---

## ✨ Features

- 🎮 Two-player gameplay (X & O)
- 🧠 Detects winners & highlights winning combinations
- 🔁 Restart button to play again
- ⚡ Built with React + Vite for ultra-fast development
- 💅 Clean, responsive UI design

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ React | Component-based UI |
| 🟨 JavaScript (ES6+) | Logic & functionality |
| 🎨 CSS3 | Styling and layout |
| ⚡ Vite | Build & dev server |

---

## 📁 Project Structure

```bash
TIC-TAC-TOE/
├── public/
│   ├── bg-pattern-dark.png
│   ├── bg-pattern.png
│   └── game-logo.png
├── src/
│   ├── components/
│   │   ├── Gameboard.jsx
│   │   ├── Logs.jsx
│   │   └── Player.jsx
│   ├── winning-combinations.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md