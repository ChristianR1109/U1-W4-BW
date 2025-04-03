const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let countdown = 60;
let countdownTimer;

function startCountdown() {
  const countNumber = document.getElementById("timer");
  const borderC = document.getElementById("outer");
  const value = Math.floor((countdown / 60) * 360);
  let value2 = 360 - value;
  borderC.style.background = `conic-gradient(  #8b6394 0deg ${value2}deg, cyan 0deg 360deg)`;

  if (countdown >= 0) {
    countNumber.innerText = countdown;
    countdown--;
    countdownTimer = setTimeout(startCountdown, 1000);
  } else {
    clearTimeout(countdownTimer);
    if (c < questions.length - 1) {
      c++;
      startQuiz(c); // Avvia la prossima domanda
      resetCountdown();
    }
  }
}
function resetCountdown() {
  clearTimeout(countdownTimer);
  countdown = 60;
  startCountdown();
}

let c = 0;
const max = questions.length;
function startQuiz(c) {
  resetCountdown();
  const buttonsDiv = document.querySelector(".buttons");
  if (buttonsDiv) {
    buttonsDiv.innerText = ""; // .innerText="" sovrascrive il contenuto del contenitore buttonsDiv con una stringa vuota, eliminando i buttons precedentemente esistenti
  }

  const title = document.getElementById("questionTitle");
  title.innerHTML = "";
  const n = questions.length; //footer
  let xn = "/ " + n; //footer
  const currentQuestion = questions[c];
  const newH1 = document.createElement("h1");
  newH1.innerText = currentQuestion.question;
  title.appendChild(newH1);
  if (currentQuestion.type === "multiple") {
    const firstN = Math.floor(Math.random() * 4);
    let secondN = 0;
    do {
      temp = Math.floor(Math.random() * 4);
    } while (temp === firstN);
    secondN = temp;

    let thirdN = 0;
    do {
      temp = Math.floor(Math.random() * 4);
    } while (temp === firstN || temp === secondN);
    thirdN = temp;

    let fourthN = 0;
    do {
      temp = Math.floor(Math.random() * 4);
    } while (temp === firstN || temp === secondN || temp === thirdN);
    fourthN = temp;

    for (let i = 0; i < 4; i++) {
      const buttonsDiv = document.querySelector(".buttons");

      const newButton = document.createElement("button");
      const newSpan = document.createElement("span");
      newSpan.classList.add("answer");
      newButton.appendChild(newSpan);
      buttonsDiv.appendChild(newButton);
    }

    const answersLoc = document.querySelectorAll(".answer");
    const firstAns = answersLoc[firstN];
    firstAns.innerText = currentQuestion.correct_answer;
    const secondAns = answersLoc[secondN];
    secondAns.innerText = currentQuestion.incorrect_answers[1];
    const thirdAns = answersLoc[thirdN];
    thirdAns.innerText = currentQuestion.incorrect_answers[2];
    const fourthAns = answersLoc[fourthN];
    fourthAns.innerText = currentQuestion.incorrect_answers[0];
  } else {
    let secondN = 0;
    const firstN = Math.floor(Math.random() * 2);
    if (firstN == 0) {
      secondN = 1;
    } else {
      secondN = 0;
    }
    for (let i = 0; i < 2; i++) {
      const buttonsDiv = document.querySelector(".buttons");

      const newButton = document.createElement("button");
      const newSpan = document.createElement("span");
      newSpan.classList.add("answer");
      newButton.appendChild(newSpan);
      buttonsDiv.appendChild(newButton);
    }
    const answerLoc = document.querySelectorAll(".answer");
    const firstAns = answerLoc[firstN];
    firstAns.innerText = currentQuestion.correct_answer;
    const secondAns = answerLoc[secondN];
    secondAns.innerText = currentQuestion.incorrect_answers[0];
  }

  const questionNLoc = document.getElementById("questionN");
  questionNLoc.innerHTML = `QUESTION ${c + 1} <span style='color: #d20094;'>${xn}</span>`;

  answerClick();
}
startQuiz(c);
const answersRecorded = [];
let result = 0;
function answerClick() {
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button) => {
    button.onclick = () => {
      answersRecorded.push(button.innerText);
      if (button.innerText === questions[c].correct_answer) {
        result++; //
      }

      if (c < questions.length - 1) {
        c++;
        startQuiz(c);
      } else {
        console.log(max);
        console.log(result);
        alert("Quiz completato, premi OK per continuare.");
        fine(max, result);
      }
    };
  });
}

function fine(a, b) {
  // Definisci i valori dinamici da passare
  const nome = "Christian";
  const eta = 30;

  // Crea l'URL dinamico
  const url = `result.html?a=${a}&b=${b}`;

  // Redireziona direttamente alla nuova pagina con i valori dinamici
  window.location.href = url;
}
