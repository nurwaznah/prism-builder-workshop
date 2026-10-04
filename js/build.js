const missions = [
  {
    a: "Square Prism",
    b: "Pyramid",
    aClass: "square-prism",
    bClass: "pyramid",
    answer: "A",
    desc: "Both can start with a square base. Watch what happens as they are built upward.",
    why: "A square prism has two matching square bases. A pyramid has only one base; its other faces meet at a point."
  },
  {
    a: "Rectangular Prism",
    b: "Pyramid",
    aClass: "rectangular-prism",
    bClass: "pyramid",
    answer: "A",
    desc: "Both can start with a rectangular base. Compare the way the solid is built.",
    why: "The rectangular prism has two matching rectangular bases. The pyramid has one rectangular base and triangular faces that meet at a point."
  },
  {
    a: "Triangular Prism",
    b: "Pyramid",
    aClass: "triangular-prism",
    bClass: "pyramid",
    answer: "A",
    desc: "Both can have triangular-looking parts. Look carefully at the bases.",
    why: "A triangular prism has two matching triangular bases. A triangular pyramid has only one triangular base."
  },
  {
    a: "Rectangular Prism",
    b: "Cylinder",
    aClass: "rectangular-prism",
    bClass: "cylinder",
    answer: "A",
    desc: "This is a useful comparison: both can have a top and bottom, but their surfaces are different.",
    why: "The rectangular prism has only flat surfaces. The cylinder has a curved surface, so it is not a prism."
  },
  {
    a: "Square Prism",
    b: "Cylinder",
    aClass: "square-prism",
    bClass: "cylinder",
    answer: "A",
    desc: "Both have two bases. Does that automatically make a solid a prism?",
    why: "No. A prism has two matching bases AND no curved surfaces. The cylinder has a curved surface."
  },
  {
    a: "Cylinder",
    b: "Sphere",
    aClass: "cylinder",
    bClass: "sphere",
    answer: "",
    desc: "Compare the curved surfaces and bases of these two solids.",
    why: "Neither is a prism. The cylinder has a curved surface, while the sphere has a completely curved surface and no flat base."
  }
];

const select = document.getElementById("missionSelect");
const desc = document.getElementById("missionDescription");

const nameA = document.getElementById("nameA");
const nameB = document.getElementById("nameB");

const shapeA = document.getElementById("shapeA");
const shapeB = document.getElementById("shapeB");

const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");

const feedback = document.getElementById("feedback");
const trivia = document.getElementById("trivia");

let builtA = false;
let builtB = false;

missions.forEach((mission, index) => {
  const option = document.createElement("option");

  option.value = index;
  option.textContent =
    `Mission ${index + 1}: ${mission.a} vs ${mission.b}`;

  select.appendChild(option);
});

function loadMission() {
  const mission = missions[Number(select.value)];

  builtA = false;
  builtB = false;

  nameA.textContent = mission.a;
  nameB.textContent = mission.b;

  desc.textContent = mission.desc;

  shapeA.className = `big-shape ${mission.aClass}`;
  shapeB.className = `big-shape ${mission.bClass}`;

  answerA.textContent = mission.a;
  answerB.textContent = mission.b;

  feedback.className = "feedback";
  feedback.textContent = "";

  trivia.className = "trivia hidden";
  trivia.innerHTML = "";
}

function buildShape(side) {
  const shape = side === "A" ? shapeA : shapeB;

  shape.classList.remove("built");

  void shape.offsetWidth;

  shape.classList.add("built");

  if (side === "A") {
    builtA = true;
  } else {
    builtB = true;
  }
}

document.querySelectorAll(".build-btn").forEach(button => {
  button.addEventListener("click", () => {
    buildShape(button.dataset.side);
  });
});

function chooseAnswer(side) {
  const mission = missions[Number(select.value)];

  if (!builtA || !builtB) {
    feedback.className = "feedback wrong";

    feedback.textContent =
      "🔨 Build both shapes first! Then make your builder decision.";

    return;
  }

  if (!mission.answer) {
    feedback.className = "feedback wrong";

    feedback.textContent =
      "🧰 This mission is a comparison challenge: neither shape is a prism.";

    showTrivia(mission, false);

    return;
  }

  const correct = side === mission.answer;

  feedback.className =
    `feedback ${correct ? "correct" : "wrong"}`;

  feedback.textContent = correct
    ? "🎉 Great building! You found the prism."
    : "🔧 Not quite! Look again at the bases and curved surfaces.";

  showTrivia(mission, correct);
}

function showTrivia(mission, correct) {
  trivia.className = "trivia";

  trivia.innerHTML = `
    <h3>💡 Builder's Fact</h3>
    <p>${mission.why}</p>
    ${
      correct
        ? "<p>⭐ You used the prism clues correctly!</p>"
        : ""
    }
  `;
}

answerA.addEventListener("click", () => {
  chooseAnswer("A");
});

answerB.addEventListener("click", () => {
  chooseAnswer("B");
});

select.addEventListener("change", loadMission);

loadMission();
