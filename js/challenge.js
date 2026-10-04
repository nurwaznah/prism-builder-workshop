const shapes = [
  {
    name: "Square Prism",
    cls: "square-prism",
    type: "prism",
    why: "It has two matching square bases and only flat surfaces."
  },
  {
    name: "Rectangular Prism",
    cls: "rectangular-prism",
    type: "prism",
    why: "It has two matching rectangular bases and only flat surfaces."
  },
  {
    name: "Triangular Prism",
    cls: "triangular-prism",
    type: "prism",
    why: "It has two matching triangular bases and only flat surfaces."
  },
  {
    name: "Sphere",
    cls: "sphere",
    type: "non-prism",
    why: "It has a curved surface and no flat bases."
  },
  {
    name: "Cone",
    cls: "cone",
    type: "non-prism",
    why: "It has one circular base and a curved surface."
  },
  {
    name: "Cylinder",
    cls: "cylinder",
    type: "non-prism",
    why: "It has two circular bases, but its curved surface means it is not a prism."
  },
  {
    name: "Pyramid",
    cls: "pyramid",
    type: "non-prism",
    why: "It has only one base. Its triangular faces meet at a point."
  }
];

let index = 0;
let score = 0;
let answered = false;

const shapeEl = document.getElementById("challengeShape");
const nameEl = document.getElementById("challengeName");

const questionEl = document.getElementById("questionNo");
const scoreEl = document.getElementById("score");

const feedbackEl = document.getElementById("challengeFeedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const shape = shapes[index];

  answered = false;

  shapeEl.className = `big-shape ${shape.cls}`;
  nameEl.textContent = shape.name;

  questionEl.textContent = index + 1;
  scoreEl.textContent = score;

  feedbackEl.className = "feedback";
  feedbackEl.textContent = "";

  nextBtn.classList.add("hidden");

  document
    .querySelectorAll(".challenge-card .answer-btn")
    .forEach(button => {
      button.disabled = false;
    });
}

document
  .querySelectorAll(".challenge-card .answer-btn")
  .forEach(button => {

    button.addEventListener("click", () => {

      if (answered) return;

      answered = true;

      const shape = shapes[index];

      const correct =
        button.dataset.answer === shape.type;

      if (correct) {
        score++;
      }

      feedbackEl.className =
        `feedback ${correct ? "correct" : "wrong"}`;

      feedbackEl.textContent =
        (correct ? "🎉 Correct! " : "🔧 Almost! ")
        + shape.why;

      document
        .querySelectorAll(".challenge-card .answer-btn")
        .forEach(btn => {
          btn.disabled = true;
        });

      nextBtn.textContent =
        index === shapes.length - 1
          ? "🏆 SEE MY SCORE"
          : "NEXT SHAPE ➜";

      nextBtn.classList.remove("hidden");

      scoreEl.textContent = score;
    });
  });

nextBtn.addEventListener("click", () => {

  if (index < shapes.length - 1) {

    index++;

    loadQuestion();

  } else {

    document
      .querySelector(".challenge-card")
      .classList.add("hidden");

    document
      .querySelector(".score-board")
      .classList.add("hidden");

    document
      .getElementById("result")
      .classList.remove("hidden");

    document
      .getElementById("finalScore")
      .textContent = score;

    let message;

    if (score === 7) {
      message =
        "Perfect builder! You mastered the prism clues!";
    } else if (score >= 5) {
      message =
        "Excellent work! Your shape-building skills are strong.";
    } else {
      message =
        "Good effort! Visit Learn and Build & Compare, then try again.";
    }

    document
      .getElementById("resultMessage")
      .textContent = message;
  }
});

loadQuestion();
