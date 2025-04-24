# Vue Quiz Game

A simple, interactive quiz game built with Vue.js and Vite. This application demonstrates Vue.js components, reactivity, and state management through an engaging quiz interface.

## Features

- Interactive quiz with multiple-choice questions
- Score tracking and progress indication
- Results summary with performance statistics
- Responsive design for all device sizes
- Randomized questions for varied gameplay

## This is the Folder Structure for the game

```
vue-quiz-game/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── vue.svg
│   ├── components/
│   │   ├── QuizCard.vue
│   │   └── ScoreBoard.vue
│   ├── data/
│   │   └── quizData.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Prerequisites

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)

## Running the Application

### For macOS/Linux Users

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/vue-quiz-game.git
   cd vue-quiz-game
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### For Windows Users

1. Clone the repository
   ```cmd
   git clone https://github.com/yourusername/vue-quiz-game.git
   cd vue-quiz-game
   ```

2. Install dependencies
   ```cmd
   npm install
   ```

3. Start the development server
   ```cmd
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Creating This Project From Scratch

Follow these steps to create the Vue Quiz Game from scratch:

### 1. Set Up a New Vue Project

#### For macOS/Linux:

```bash
# Create a new directory for your project
mkdir vue-quiz-game
cd vue-quiz-game

# Initialize a new Vue project with Vite
npm create vite@latest . -- --template vue

# Install dependencies
npm install
```

#### For Windows:

```cmd
# Create a new directory for your project
mkdir vue-quiz-game
cd vue-quiz-game

# Initialize a new Vue project with Vite
npm create vite@latest . -- --template vue

# Install dependencies
npm install
```

### 2. Create the Component Structure

1. Create the components directory structure:
   ```bash
   mkdir -p src/components src/data
   ```

2. Create the ScoreBoard component (`src/components/ScoreBoard.vue`)
3. Create the QuizCard component (`src/components/QuizCard.vue`)
4. Create the quiz data file (`src/data/quizData.js`)
5. Update the main App.vue file

### 3. Run the Development Server

```bash
npm run dev
```

## Customizing the Quiz

To add your own questions, edit the `src/data/quizData.js` file. Each question object should have the following structure:

```javascript
{
  question: "Your question text here",
  options: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ],
  correctAnswer: 0  // Index of the correct option (0-based)
}
```

## License

MIT

## Acknowledgements

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)
