const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
      deactiveAnswer();
      question.classList.remove("active");
    } else {
      for (let i = 0; i < questions.length; i++) {
        questions[i].classList.remove("active");
        question.classList.add("active");
      }
      activeAnswer();
    }
  });
});

function activeAnswer() {
  const activeAnswer = document.querySelector(".active + .answer");
  for (let y = 0; y < answers.length; y++) {
    answers[y].classList.remove("active-answer");
  }
  activeAnswer.classList.add("active-answer");
}

function deactiveAnswer() {
  const deactiveAnswer = document.querySelector(".active + .answer");
  deactiveAnswer.classList.remove("active-answer");
}
