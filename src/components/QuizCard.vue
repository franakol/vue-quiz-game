<template>
  <div class="quiz-card" :class="{ flipped: isFlipped }">
    <div class="card-inner">
      <div class="card-front">
        <h3>{{ question }}</h3>
        <div class="options">
          <button 
            v-for="(option, index) in options" 
            :key="index"
            class="option-btn"
            :class="{ selected: selectedOption === index }"
            @click="selectOption(index)"
            :disabled="answered"
          >
            {{ option }}
          </button>
        </div>
        <button class="submit-btn" @click="checkAnswer" :disabled="selectedOption === null || answered">Submit Answer</button>
      </div>
      <div class="card-back">
        <div class="result" :class="isCorrect ? 'correct' : 'incorrect'">
          <h3>{{ isCorrect ? 'Correct!' : 'Incorrect!' }}</h3>
          <p>The correct answer is: {{ options[correctAnswer] }}</p>
        </div>
        <button class="next-btn" @click="nextQuestion">Next Question</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    correctAnswer: {
      type: Number,
      required: true
    },
    questionIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selectedOption: null,
      answered: false,
      isCorrect: false,
      isFlipped: false
    };
  },
  methods: {
    selectOption(index) {
      if (!this.answered) {
        this.selectedOption = index;
      }
    },
    checkAnswer() {
      this.answered = true;
      this.isCorrect = this.selectedOption === this.correctAnswer;
      this.isFlipped = true;
      this.$emit('answer', this.isCorrect);
    },
    nextQuestion() {
      this.isFlipped = false;
      this.selectedOption = null;
      this.answered = false;
      this.$emit('next');
    }
  }
};
</script>

<style scoped>
.quiz-card {
  width: 100%;
  max-width: 600px;
  perspective: 1000px;
  margin: 0 auto;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}

.card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5rem;
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

.option-btn {
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: white;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.option-btn:hover:not(:disabled) {
  border-color: #4CAF50;
  background-color: #f9f9f9;
}

.option-btn.selected {
  border-color: #2196F3;
  background-color: #e3f2fd;
}

.submit-btn, .next-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

.submit-btn:hover:not(:disabled), .next-btn:hover {
  background-color: #45a049;
}

.submit-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.result {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
}

.result.correct {
  background-color: #dff0d8;
  border: 1px solid #d6e9c6;
  color: #3c763d;
}

.result.incorrect {
  background-color: #f2dede;
  border: 1px solid #ebccd1;
  color: #a94442;
}
</style>
