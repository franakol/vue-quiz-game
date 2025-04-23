<template>
  <div class="score-board">
    <div class="progress-container">
      <div class="progress-text">Question {{ currentQuestion }} of {{ totalQuestions }}</div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>
    <div class="score-container">
      <div class="score-item">
        <div class="score-label">Score</div>
        <div class="score-value">{{ score }}</div>
      </div>
      <div class="score-item">
        <div class="score-label">Correct</div>
        <div class="score-value correct">{{ correctAnswers }}</div>
      </div>
      <div class="score-item">
        <div class="score-label">Incorrect</div>
        <div class="score-value incorrect">{{ incorrectAnswers }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: {
      type: Number,
      required: true
    },
    totalQuestions: {
      type: Number,
      required: true
    },
    correctAnswers: {
      type: Number,
      required: true
    },
    incorrectAnswers: {
      type: Number,
      required: true
    }
  },
  computed: {
    score() {
      return this.correctAnswers * 10;
    },
    progressPercentage() {
      return (this.currentQuestion / this.totalQuestions) * 100;
    }
  }
};
</script>

<style scoped>
.score-board {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px;
}

.progress-container {
  margin-bottom: 15px;
}

.progress-text {
  margin-bottom: 5px;
  font-weight: 500;
  color: #555;
}

.progress-bar {
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.3s ease;
}

.score-container {
  display: flex;
  justify-content: space-between;
}

.score-item {
  text-align: center;
  flex: 1;
}

.score-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.score-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.score-value.correct {
  color: #4CAF50;
}

.score-value.incorrect {
  color: #F44336;
}
</style>
