// Quiz questions data
const quizData = [
  {
    question: "What is Vue.js?",
    options: [
      "A back-end framework",
      "A front-end framework",
      "A database management system",
      "An operating system"
    ],
    correctAnswer: 1
  },
  {
    question: "Which directive is used for two-way data binding in Vue?",
    options: [
      "v-bind",
      "v-model",
      "v-for",
      "v-if"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the Vue instance property used to declare methods?",
    options: [
      "computed",
      "watch",
      "methods",
      "directives"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is NOT a Vue.js directive?",
    options: [
      "v-if",
      "v-else",
      "v-repeat",
      "v-show"
    ],
    correctAnswer: 2
  },
  {
    question: "What does the 'ref' attribute provide in Vue?",
    options: [
      "A way to reference DOM elements",
      "A way to create reactive data",
      "A way to import components",
      "A way to define props"
    ],
    correctAnswer: 0
  },
  {
    question: "Which Vue.js hook is called after the component is mounted to the DOM?",
    options: [
      "created",
      "beforeMount",
      "mounted",
      "updated"
    ],
    correctAnswer: 2
  },
  {
    question: "What is Vuex used for?",
    options: [
      "Routing",
      "State management",
      "Form validation",
      "API requests"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is the correct way to create a computed property in Vue 3 Composition API?",
    options: [
      "const count = ref(0)",
      "const count = computed(() => state.count * 2)",
      "const count = reactive({ value: 0 })",
      "const count = watch(() => state.count)"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of Vue Router?",
    options: [
      "To manage application state",
      "To handle HTTP requests",
      "To manage navigation between pages",
      "To validate form inputs"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is NOT a Vue component communication method?",
    options: [
      "Props",
      "Events",
      "Provide/Inject",
      "Direct DOM manipulation"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the Vue CLI?",
    options: [
      "A command-line interface for creating Vue projects",
      "A component library for Vue",
      "A testing framework for Vue",
      "A browser extension for debugging Vue"
    ],
    correctAnswer: 0
  },
  {
    question: "Which lifecycle hook in Vue is called right before the component is destroyed?",
    options: [
      "beforeDestroy",
      "destroyed",
      "beforeUnmount",
      "unmounted"
    ],
    correctAnswer: 2
  },
  {
    question: "What does the 'key' attribute help Vue with?",
    options: [
      "Authentication",
      "Encryption",
      "Efficient list rendering and tracking DOM state",
      "Storing data in local storage"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is a feature of Vue 3?",
    options: [
      "Class-based components only",
      "Multiple root elements in templates",
      "No support for TypeScript",
      "Removal of the Composition API"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the recommended way to handle form validation in Vue?",
    options: [
      "Using browser's default validation",
      "Using alert() for validation errors",
      "Using a library like Vuelidate or VeeValidate",
      "Vue doesn't support form validation"
    ],
    correctAnswer: 2
  }
];

export default quizData;
