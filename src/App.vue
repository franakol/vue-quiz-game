<script setup>
import { ref, computed, onMounted } from 'vue';
import QuizCard from './components/QuizCard.vue';
import ScoreBoard from './components/ScoreBoard.vue';
import quizData from './data/quizData.js';

const questions = ref([]);
const currentQuestionIndex = ref(0);
const correctAnswers = ref(0);
const incorrectAnswers = ref(0);
const quizStarted = ref(false);
const quizCompleted = ref(false);

const currentQuestion = computed(() => {
  return currentQuestionIndex.value + 1;
});

const totalQuestions = computed(() => {
  return questions.value.length;
});

const finalScore = computed(() => {
  return correctAnswers.value * 10;
});

const scorePercentage = computed(() => {
  return Math.round((correctAnswers.value / totalQuestions.value) * 100);
});

function startQuiz() {
  // Shuffle and select questions
  questions.value = [...quizData].sort(() => 0.5 - Math.random()).slice(0, 10);
  currentQuestionIndex.value = 0;
  correctAnswers.value = 0;
  incorrectAnswers.value = 0;
  quizStarted.value = true;
  quizCompleted.value = false;
}

function handleAnswer(isCorrect) {
  if (isCorrect) {
    correctAnswers.value++;
  } else {
    incorrectAnswers.value++;
  }
}

function nextQuestion() {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    quizCompleted.value = true;
  }
}

function restartQuiz() {
  startQuiz();
}

onMounted(() => {
  // Pre-load questions
  questions.value = [...quizData];
});
</script>

<template>
  <div class="quiz-container">
    <header>
      <h1>Vue Quiz Game</h1>
    </header>
    
    <main>
      <div v-if="!quizStarted" class="start-screen">
        <h2>Welcome to the Vue Quiz Game!</h2>
        <p>Test your knowledge with 10 random questions.</p>
        <button class="start-btn" @click="startQuiz">Start Quiz</button>
      </div>
      
      <div v-else-if="quizCompleted" class="result-screen">
        <h2>Quiz Completed!</h2>
        <div class="final-score">
          <p>Your Score: <span>{{ finalScore }}</span></p>
          <p>Percentage: <span>{{ scorePercentage }}%</span></p>
        </div>
        <div class="score-breakdown">
          <div class="score-item">
            <span class="label">Correct Answers:</span>
            <span class="value correct">{{ correctAnswers }}</span>
          </div>
          <div class="score-item">
            <span class="label">Incorrect Answers:</span>
            <span class="value incorrect">{{ incorrectAnswers }}</span>
          </div>
          <div class="score-item">
            <span class="label">Total Questions:</span>
            <span class="value">{{ totalQuestions }}</span>
          </div>
        </div>
        <button class="restart-btn" @click="restartQuiz">Play Again</button>
      </div>
      
      <div v-else class="quiz-content">
        <ScoreBoard 
          :currentQuestion="currentQuestion" 
          :totalQuestions="totalQuestions"
          :correctAnswers="correctAnswers"
          :incorrectAnswers="incorrectAnswers"
        />
        
        <QuizCard 
          v-if="questions.length > 0"
          :question="questions[currentQuestionIndex].question"
          :options="questions[currentQuestionIndex].options"
          :correctAnswer="questions[currentQuestionIndex].correctAnswer"
          :questionIndex="currentQuestionIndex"
          @answer="handleAnswer"
          @next="nextQuestion"
        />
      </div>
    </main>
    
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Vue Quiz Game</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.6;
}

.quiz-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #4CAF50;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

main {
  min-height: 70vh;
}

.start-screen, .result-screen {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #555;
}

.start-btn, .restart-btn {
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  background-color: #4CAF50;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-btn:hover, .restart-btn:hover {
  background-color: #45a049;
}

.final-score {
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.final-score p {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.final-score span {
  font-weight: bold;
  color: #4CAF50;
  font-size: 1.5rem;
}

.score-breakdown {
  margin-bottom: 30px;
}

.score-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  max-width: 300px;
  margin: 0 auto;
}

.score-item .label {
  font-weight: 500;
  color: #555;
}

.score-item .value {
  font-weight: bold;
}

.score-item .value.correct {
  color: #4CAF50;
}

.score-item .value.incorrect {
  color: #F44336;
}

footer {
  text-align: center;
  margin-top: 50px;
  padding: 20px 0;
  color: #777;
  font-size: 0.9rem;
}
</style>
