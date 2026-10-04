const missions = [
  ["square-prism", "pyramid"],
  ["rectangular-prism", "pyramid"],
  ["triangular-prism", "pyramid"],
  ["rectangular-prism", "cylinder"],
  ["square-prism", "cylinder"],
  ["cylinder", "sphere"]
];


const missionSelect = document.getElementById("missionSelect");

const stageA = document.getElementById("stageA");
const stageB = document.getElementById("stageB");

const nameA = document.getElementById("nameA");
const nameB = document.getElementById("nameB");

const feedback = document.getElementById("buildFeedback");

let builtA = false;
let builtB = false;


// -----------------------------------
// SET UP THE CURRENT MISSION
// -----------------------------------

function setupMission() {

  const missionNumber = Number(missionSelect.value);

  const shapeA = missions[missionNumber][0];
  const shapeB = missions[missionNumber][1];


  // Change the names above each station
  nameA.textContent = SHAPES[shapeA].name;
  nameB.textContent = SHAPES[shapeB].name;


  // Reset the building areas
  stageA.innerHTML = "<p>Click BUILD to construct it.</p>";
  stageB.innerHTML = "<p>Click BUILD to construct it.</p>";


  // Reset the build status
  builtA = false;
  builtB = false;


  // Reset feedback
  feedback.className = "feedback";
  feedback.textContent =
    "Build both shapes first, then choose your answer.";
}


// -----------------------------------
// BUILD A SHAPE
// -----------------------------------

function buildShape(stage, type) {

  // Put the 3D shape inside the station
  stage.innerHTML = svgForShape(type);


  // Remove the animation class
  stage.classList.remove("built");


  // Force the browser to restart the animation
  void stage.offsetWidth;


  // Start the building animation
  stage.classList.add("built");
}


// -----------------------------------
// BUILD BUTTON A
// -----------------------------------

document.getElementById("buildA").addEventListener("click", function() {

  const missionNumber = Number(missionSelect.value);

  const shapeA = missions[missionNumber][0];

  builtA = true;

  buildShape(stageA, shapeA);

});


// -----------------------------------
// BUILD BUTTON B
// -----------------------------------

document.getElementById("buildB").addEventListener("click", function() {

  const missionNumber = Number(missionSelect.value);

  const shapeB = missions[missionNumber][1];

  builtB = true;

  buildShape(stageB, shapeB);

});


// -----------------------------------
// CHANGE MISSION
// -----------------------------------

missionSelect.addEventListener("change", function() {

  setupMission();

});


// -----------------------------------
// CHECK THE ANSWER
// -----------------------------------

function checkAnswer(choice) {

  // Make sure both shapes have been built
  if (!builtA || !builtB) {

    feedback.className = "feedback wrong";

    feedback.textContent =
      "🔨 Build both shapes first!";

    return;
  }


  const missionNumber = Number(missionSelect.value);

  const shapeA = missions[missionNumber][0];
  const shapeB = missions[missionNumber][1];


  let correct = false;


  // Station A is the prism
  if (choice === "A") {

    correct =
      isPrism(shapeA) &&
      !isPrism(shapeB);

  }


  // Station B is the prism
  else if (choice === "B") {

    correct =
      isPrism(shapeB) &&
      !isPrism(shapeA);

  }


  // Both are prisms
  else if (choice === "both") {

    correct =
      isPrism(shapeA) &&
      isPrism(shapeB);

  }


  // Neither is a prism
  else if (choice === "neither") {

    correct =
      !isPrism(shapeA) &&
      !isPrism(shapeB);

  }


  // -----------------------------------
  // SHOW FEEDBACK
  // -----------------------------------

  if (correct) {

    feedback.className = "feedback correct";

    feedback.textContent =
      "🎉 Correct! You used the prism clues successfully.";

  } else {

    feedback.className = "feedback wrong";

    feedback.textContent =
      "💡 Not quite. Check the two matching bases and look for curved surfaces.";

  }

}


// -----------------------------------
// ANSWER BUTTONS
// -----------------------------------

document.getElementById("answerA").addEventListener("click", function() {

  checkAnswer("A");

});


document.getElementById("answerB").addEventListener("click", function() {

  checkAnswer("B");

});


document.getElementById("answerBoth").addEventListener("click", function() {

  checkAnswer("both");

});


document.getElementById("answerNeither").addEventListener("click", function() {

  checkAnswer("neither");

});


// -----------------------------------
// START THE PAGE
// -----------------------------------

setupMission();
