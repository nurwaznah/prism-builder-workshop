// ==========================================
// SHAPES USED IN THE CHALLENGE
// ==========================================

const challengeShapes = [
  "square-prism",
  "rectangular-prism",
  "triangular-prism",
  "sphere",
  "cone",
  "cylinder",
  "pyramid"
];


// ==========================================
// GAME VARIABLES
// ==========================================

let currentQuestion = 0;
let score = 0;
let answered = false;


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const model =
  document.getElementById("challengeModel");

const counter =
  document.getElementById("questionCounter");

const scoreText =
  document.getElementById("scoreText");

const question =
  document.getElementById("questionText");

const feedback =
  document.getElementById("challengeFeedback");

const nextButton =
  document.getElementById("nextBtn");

const prismButton =
  document.getElementById("prismBtn");

const nonPrismButton =
  document.getElementById("nonPrismBtn");

const resultPanel =
  document.getElementById("resultPanel");


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

  answered = false;


  const shapeType =
    challengeShapes[currentQuestion];

  const shapeInfo =
    SHAPES[shapeType];


  // Show 3D shape
  model.innerHTML =
    svgForShape(shapeType);


  // Show question number
  counter.textContent =
    "Question " +
    (currentQuestion + 1) +
    " of " +
    challengeShapes.length;


  // Show current score
  scoreText.textContent =
    "Score: " + score;


  // Show question
  question.textContent =
    "Is " +
    shapeInfo.name +
    " a prism or a non-prism?";


  // Clear previous feedback
  feedback.className = "feedback";
  feedback.textContent = "";


  // Hide next button
  nextButton.hidden = true;


  // Enable answer buttons
  prismButton.disabled = false;
  nonPrismButton.disabled = false;
}


// ==========================================
// CHECK ANSWER
// ==========================================

function checkChallengeAnswer(answer) {

  // Prevent answering twice
  if (answered) {
    return;
  }

  answered = true;


  const shapeType =
    challengeShapes[currentQuestion];


  const correctAnswer =
    isPrism(shapeType);


  const userAnswer =
    answer === "prism";


  // ========================================
  // CORRECT ANSWER
  // ========================================

  if (userAnswer === correctAnswer) {

    score++;


    feedback.className =
      "feedback correct";

    feedback.textContent =
      "🎉 Correct! Great shape detective work.";

  }


  // ========================================
  // WRONG ANSWER
  // ========================================

  else {

    feedback.className =
      "feedback wrong";

    feedback.textContent =
      "💡 Not quite. " +
      SHAPES[shapeType].name +
      " is a " +
      (correctAnswer
        ? "prism."
        : "non-prism.");

  }


  // Update score
  scoreText.textContent =
    "Score: " + score;


  // Disable answer buttons
  prismButton.disabled = true;
  nonPrismButton.disabled = true;


  // Show next button
  nextButton.hidden = false;


  // Change the button text on the last question
  if (
    currentQuestion ===
    challengeShapes.length - 1
  ) {

    nextButton.textContent =
      "See My Result 🏆";

  } else {

    nextButton.textContent =
      "Next Shape →";

  }
}


// ==========================================
// PRISM BUTTON
// ==========================================

prismButton.addEventListener(
  "click",
  function() {

    checkChallengeAnswer("prism");

  }
);


// ==========================================
// NON-PRISM BUTTON
// ==========================================

nonPrismButton.addEventListener(
  "click",
  function() {

    checkChallengeAnswer("non-prism");

  }
);


// ==========================================
// NEXT BUTTON
// ==========================================

nextButton.addEventListener(
  "click",
  function() {

    if (
      currentQuestion <
      challengeShapes.length - 1
    ) {

      currentQuestion++;

      showQuestion();

    } else {

      finishChallenge();

    }

  }
);


// ==========================================
// FINISH CHALLENGE
// ==========================================

function finishChallenge() {

  // Hide the question section
  document.querySelector(
    ".challenge-panel"
  ).hidden = true;


  // Show result section
  resultPanel.hidden = false;


  let achievementTitle;
  let message;


  // ========================================
  // 7 / 7
  // ========================================

  if (score === 7) {

    achievementTitle =
      "Shape Master 🏆";

    message =
      "Amazing! You identified every shape correctly!";

  }


  // ========================================
  // 5 - 6 / 7
  // ========================================

  else if (score >= 5) {

    achievementTitle =
      "Shape Builder ⭐";

    message =
      "Great work! You have a strong understanding of prisms.";

  }


  // ========================================
  // 3 - 4 / 7
  // ========================================

  else if (score >= 3) {

    achievementTitle =
      "Junior Builder 🔨";

    message =
      "Well done! Keep practising the prism clues.";

  }


  // ========================================
  // 0 - 2 / 7
  // ========================================

  else {

    achievementTitle =
      "Shape Explorer 🧰";

    message =
      "Good effort! Review the Learn section and try again.";

  }


  // Show result
  document.getElementById(
    "resultTitle"
  ).textContent = achievementTitle;


  document.getElementById(
    "resultScore"
  ).textContent =
    "You scored " +
    score +
    " / 7";


  document.getElementById(
    "resultMessage"
  ).textContent = message;
}


// ==========================================
// CERTIFICATE BUTTON
// ==========================================

document.getElementById(
  "certificateBtn"
).addEventListener(
  "click",
  function() {

    generateCertificate();

  }
);


// ==========================================
// GENERATE CERTIFICATE
// ==========================================

function generateCertificate() {

  const nameInput =
    document.getElementById(
      "studentName"
    );


  const name =
    nameInput.value.trim();


  // Check if name is empty
  if (name === "") {

    alert(
      "Please enter your name first."
    );

    return;
  }


  // ========================================
  // DETERMINE ACHIEVEMENT
  // ========================================

  let level;


  if (score === 7) {

    level = "SHAPE MASTER";

  }

  else if (score >= 5) {

    level = "SHAPE BUILDER";

  }

  else if (score >= 3) {

    level = "JUNIOR BUILDER";

  }

  else {

    level = "SHAPE EXPLORER";

  }


  // ========================================
  // CREATE CERTIFICATE PREVIEW
  // ========================================

  const certificateArea =
    document.getElementById(
      "certificateArea"
    );


  certificateArea.hidden = false;


  certificateArea.innerHTML = `

    <div
      class="certificate"
      id="certificate"
    >

      <div class="cert-tools">
        🧰 ⭐ 📐
      </div>

      <p class="cert-small">
        SHAPE BUILDER WORKSHOP
      </p>

      <h2>
        CERTIFICATE OF ACHIEVEMENT
      </h2>

      <p>
        This certificate is proudly presented to
      </p>

      <div class="cert-name">
        ${escapeHTML(name)}
      </div>

      <p>
        for completing the
      </p>

      <strong>
        3D Shapes:
        Prisms & Non-Prisms Challenge
      </strong>

      <div class="cert-score">
        Score: ${score} / 7
      </div>

      <div class="cert-level">
        ${level}
      </div>

      <p class="cert-date">
        ${new Date().toLocaleDateString()}
      </p>

    </div>


    <button
      type="button"
      class="btn primary download-cert"
      id="downloadCert"
    >
      ⬇ Download Certificate
    </button>

  `;


  // ========================================
  // DOWNLOAD BUTTON
  // ========================================

  document.getElementById(
    "downloadCert"
  ).addEventListener(
    "click",
    function() {

      downloadCertificate(
        name,
        level
      );

    }
  );


  // Scroll to certificate
  certificateArea.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


// ==========================================
// PROTECT CERTIFICATE FROM HTML CHARACTERS
// ==========================================

function escapeHTML(text) {

  return text.replace(
    /[&<>"']/g,
    function(character) {

      const characters = {

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

      };

      return characters[character];

    }
  );
}


// ==========================================
// DOWNLOAD CERTIFICATE AS PNG
// ==========================================

function downloadCertificate(
  name,
  level
) {

  // Create canvas
  const canvas =
    document.createElement("canvas");


  // Certificate size
  canvas.width = 1600;
  canvas.height = 1100;


  const ctx =
    canvas.getContext("2d");


  // ========================================
  // BACKGROUND
  // ========================================

  ctx.fillStyle = "#fffaf0";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  // ========================================
  // OUTER BORDER
  // ========================================

  ctx.strokeStyle =
    "#1e4775";

  ctx.lineWidth = 22;

  ctx.strokeRect(
    35,
    35,
    1530,
    1030
  );


  // ========================================
  // INNER BORDER
  // ========================================

  ctx.strokeStyle =
    "#d59b2b";

  ctx.lineWidth = 7;

  ctx.strokeRect(
    65,
    65,
    1470,
    970
  );


  // ========================================
  // TEXT SETTINGS
  // ========================================

  ctx.textAlign =
    "center";


  // Workshop title
  ctx.fillStyle =
    "#163e68";

  ctx.font =
    "bold 36px Arial";

  ctx.fillText(
    "SHAPE BUILDER WORKSHOP",
    800,
    160
  );


  // Certificate title
  ctx.font =
    "bold 58px Arial";

  ctx.fillText(
    "CERTIFICATE OF ACHIEVEMENT",
    800,
    245
  );


  // Presented to
  ctx.fillStyle =
    "#555";

  ctx.font =
    "30px Arial";

  ctx.fillText(
    "This certificate is proudly presented to",
    800,
    340
  );


  // Student name
  ctx.fillStyle =
    "#163e68";

  ctx.font =
    "bold 70px Arial";

  ctx.fillText(
    name,
    800,
    455
  );


  // Completion text
  ctx.fillStyle =
    "#555";

  ctx.font =
    "30px Arial";

  ctx.fillText(
    "for completing the",
    800,
    525
  );


  // Challenge name
  ctx.fillStyle =
    "#163e68";

  ctx.font =
    "bold 38px Arial";

  ctx.fillText(
    "3D Shapes: Prisms & Non-Prisms Challenge",
    800,
    595
  );


  // Score
  ctx.fillStyle =
    "#d59b2b";

  ctx.font =
    "bold 48px Arial";

  ctx.fillText(
    "Score: " + score + " / 7",
    800,
    690
  );


  // Achievement
  ctx.fillStyle =
    "#163e68";

  ctx.font =
    "bold 46px Arial";

  ctx.fillText(
    level,
    800,
    775
  );


  // Date
  ctx.fillStyle =
    "#666";

  ctx.font =
    "26px Arial";

  ctx.fillText(
    new Date().toLocaleDateString(),
    800,
    900
  );


  // Decoration
  ctx.fillStyle =
    "#d59b2b";

  ctx.font =
    "48px Arial";

  ctx.fillText(
    "★  SHAPE BUILDER  ★",
    800,
    965
  );


  // ========================================
  // DOWNLOAD
  // ========================================

  const downloadLink =
    document.createElement("a");


  downloadLink.download =
    "Shape-Builder-Certificate.png";


  downloadLink.href =
    canvas.toDataURL("image/png");


  downloadLink.click();
}


// ==========================================
// START THE CHALLENGE
// ==========================================

showQuestion();
