/* =========================================
   SHAPE BUILDER WORKSHOP
   CHALLENGE JAVASCRIPT
   ========================================= */

const challengeShapes = [
  "square-prism",
  "rectangular-prism",
  "triangular-prism",
  "sphere",
  "cone",
  "cylinder",
  "pyramid"
];

let currentQuestion = 0;
let score = 0;
let answered = false;


/* ---------- GET ELEMENTS ---------- */

const questionCounter = document.getElementById("questionCounter");
const scoreText = document.getElementById("scoreText");

const challengeModel = document.getElementById("challengeModel");
const questionText = document.getElementById("questionText");

const prismBtn = document.getElementById("prismBtn");
const nonPrismBtn = document.getElementById("nonPrismBtn");

const challengeFeedback = document.getElementById("challengeFeedback");
const nextBtn = document.getElementById("nextBtn");

const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultMessage = document.getElementById("resultMessage");

const studentName = document.getElementById("studentName");
const certificateBtn = document.getElementById("certificateBtn");
const certificateArea = document.getElementById("certificateArea");


/* ---------- START CHALLENGE ---------- */

function startChallenge() {

  currentQuestion = 0;
  score = 0;
  answered = false;

  resultPanel.style.display = "none";
  certificateArea.style.display = "none";

  prismBtn.style.display = "inline-block";
  nonPrismBtn.style.display = "inline-block";

  nextBtn.style.display = "none";

  renderQuestion();
}


/* ---------- SHOW QUESTION ---------- */

function renderQuestion() {

  answered = false;

  const shapeType = challengeShapes[currentQuestion];
  const shape = SHAPES[shapeType];

  questionCounter.textContent =
    `Question ${currentQuestion + 1} of ${challengeShapes.length}`;

  scoreText.textContent =
    `Score: ${score}`;

  challengeModel.innerHTML =
    svgForShape(shapeType);

  questionText.textContent =
    `Is ${shape.name} a prism or a non-prism?`;

  challengeFeedback.style.display = "none";
  challengeFeedback.className = "feedback";
  challengeFeedback.innerHTML = "";

  prismBtn.disabled = false;
  nonPrismBtn.disabled = false;

  prismBtn.style.display = "inline-block";
  nonPrismBtn.style.display = "inline-block";

  nextBtn.style.display = "none";
}


/* ---------- CHECK ANSWER ---------- */

function checkAnswer(userAnswer) {

  if (answered) {
    return;
  }

  answered = true;

  const shapeType = challengeShapes[currentQuestion];
  const shape = SHAPES[shapeType];

  const correctAnswer =
    shape.prism ? "prism" : "non-prism";

  const isCorrect =
    userAnswer === correctAnswer;


  /* Disable answer buttons */

  prismBtn.disabled = true;
  nonPrismBtn.disabled = true;


  /* Update score */

  if (isCorrect) {

    score++;

    challengeFeedback.className =
      "feedback correct";

    challengeFeedback.innerHTML =
      `<strong>✓ Correct!</strong><br>
       ${shape.name} is a ${correctAnswer}.`;

  } else {

    challengeFeedback.className =
      "feedback wrong";

    challengeFeedback.innerHTML =
      `<strong>✗ Not quite!</strong><br>
       ${shape.name} is a ${correctAnswer}.`;

  }


  challengeFeedback.style.display = "block";

  scoreText.textContent =
    `Score: ${score}`;


  /* Show next button */

  nextBtn.style.display = "block";

  if (currentQuestion === challengeShapes.length - 1) {

    nextBtn.textContent =
      "See My Result 🏆";

  } else {

    nextBtn.textContent =
      "Next Shape →";

  }
}


/* ---------- NEXT QUESTION ---------- */

function nextQuestion() {

  if (!answered) {
    return;
  }

  currentQuestion++;

  if (currentQuestion >= challengeShapes.length) {

    showResult();

  } else {

    renderQuestion();

  }
}


/* ---------- SHOW RESULT ---------- */

function showResult() {

  document.getElementById("challengePanel").style.display =
    "none";

  resultPanel.style.display =
    "block";

  resultScore.textContent =
    `Score: ${score} / ${challengeShapes.length}`;


  if (score === 7) {

    resultTitle.textContent =
      "Shape Master! 🏆";

    resultMessage.textContent =
      "Amazing! You can identify all seven 3D shapes.";

  } else if (score >= 5) {

    resultTitle.textContent =
      "Shape Builder! ⭐";

    resultMessage.textContent =
      "Great work! You understand most of the shapes.";

  } else if (score >= 3) {

    resultTitle.textContent =
      "Junior Builder! 🔨";

    resultMessage.textContent =
      "Good effort! Keep practising the clues for identifying prisms.";

  } else {

    resultTitle.textContent =
      "Shape Explorer! 🧰";

    resultMessage.textContent =
      "Keep exploring! Go back to Learn and try the challenge again.";

  }
}


/* ---------- CERTIFICATE ---------- */

function generateCertificate() {

  const name = studentName.value.trim();

  if (name === "") {

    studentName.focus();

    alert("Please enter your name first.");

    return;
  }


  let level = "";

  if (score === 7) {

    level = "SHAPE MASTER";

  } else if (score >= 5) {

    level = "SHAPE BUILDER";

  } else if (score >= 3) {

    level = "JUNIOR BUILDER";

  } else {

    level = "SHAPE EXPLORER";

  }


  const today = new Date();

  const dateText =
    today.toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );


  certificateArea.innerHTML = `

    <div class="certificate">

      <div class="cert-tools">
        🔧 📐 🔨
      </div>

      <p class="cert-small">
        SHAPE BUILDER WORKSHOP
      </p>

      <h2>
        Certificate of Achievement
      </h2>

      <p>
        This certificate is proudly presented to
      </p>

      <div class="cert-name">
        ${escapeHTML(name)}
      </div>

      <p>
        for successfully completing the
        Shape Builder Challenge.
      </p>

      <div class="cert-score">
        Score: ${score} / 7
      </div>

      <div class="cert-level">
        ${level}
      </div>

      <p class="cert-date">
        ${dateText}
      </p>

    </div>

    <button
      class="btn secondary download-cert"
      id="downloadCertificateBtn"
      type="button">
      Download Certificate
    </button>
  `;


  certificateArea.style.display =
    "block";


  /* Download button */

  const downloadButton =
    document.getElementById(
      "downloadCertificateBtn"
    );

  downloadButton.addEventListener(
    "click",
    downloadCertificate
  );


  certificateArea.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* ---------- DOWNLOAD CERTIFICATE ---------- */

function downloadCertificate() {

  const name =
    studentName.value.trim();

  const canvas =
    document.createElement("canvas");

  canvas.width = 1200;
  canvas.height = 800;

  const ctx =
    canvas.getContext("2d");


  /* Background */

  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  /* Border */

  ctx.strokeStyle = "#1e4775";
  ctx.lineWidth = 18;

  ctx.strokeRect(
    35,
    35,
    1130,
    730
  );


  /* Inner border */

  ctx.strokeStyle = "#d59b2b";
  ctx.lineWidth = 4;

  ctx.strokeRect(
    60,
    60,
    1080,
    680
  );


  /* Title */

  ctx.fillStyle = "#1e4775";

  ctx.textAlign = "center";

  ctx.font =
    "bold 28px Trebuchet MS";

  ctx.fillText(
    "SHAPE BUILDER WORKSHOP",
    600,
    130
  );


  ctx.font =
    "bold 48px Trebuchet MS";

  ctx.fillText(
    "Certificate of Achievement",
    600,
    210
  );


  /* Name text */

  ctx.font =
    "24px Trebuchet MS";

  ctx.fillStyle = "#444";

  ctx.fillText(
    "This certificate is proudly presented to",
    600,
    280
  );


  /* Student name */

  ctx.font =
    "bold 48px Trebuchet MS";

  ctx.fillStyle = "#1e4775";

  ctx.fillText(
    name,
    600,
    360
  );


  /* Line */

  ctx.strokeStyle = "#d59b2b";
  ctx.lineWidth = 3;

  ctx.beginPath();

  ctx.moveTo(300, 380);
  ctx.lineTo(900, 380);

  ctx.stroke();


  /* Score */

  ctx.font =
    "bold 30px Trebuchet MS";

  ctx.fillStyle = "#b47613";

  ctx.fillText(
    `Score: ${score} / 7`,
    600,
    450
  );


  /* Achievement */

  let level = "";

  if (score === 7) {
    level = "SHAPE MASTER";
  } else if (score >= 5) {
    level = "SHAPE BUILDER";
  } else if (score >= 3) {
    level = "JUNIOR BUILDER";
  } else {
    level = "SHAPE EXPLORER";
  }


  ctx.font =
    "bold 36px Trebuchet MS";

  ctx.fillStyle = "#2d79bd";

  ctx.fillText(
    level,
    600,
    520
  );


  /* Date */

  const dateText =
    new Date().toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );


  ctx.font =
    "20px Trebuchet MS";

  ctx.fillStyle = "#666";

  ctx.fillText(
    dateText,
    600,
    600
  );


  /* Download */

  const link =
    document.createElement("a");

  link.download =
    "Shape-Builder-Certificate.png";

  link.href =
    canvas.toDataURL("image/png");

  link.click();
}


/* ---------- ESCAPE HTML ---------- */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* ---------- EVENT LISTENERS ---------- */

prismBtn.addEventListener(
  "click",
  function () {
    checkAnswer("prism");
  }
);


nonPrismBtn.addEventListener(
  "click",
  function () {
    checkAnswer("non-prism");
  }
);


nextBtn.addEventListener(
  "click",
  nextQuestion
);


certificateBtn.addEventListener(
  "click",
  generateCertificate
);


/* ---------- START ---------- */

startChallenge();
