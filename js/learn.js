/* =========================================
   SHAPE BUILDER WORKSHOP
   LEARN PAGE
   SHAPE INSPECTOR
   ========================================= */


/* ---------- GET ELEMENTS ---------- */

const shapeGallery = document.getElementById("shapeGallery");

const shapeModal = document.getElementById("shapeModal");
const modalClose = document.getElementById("modalClose");
const modalDone = document.getElementById("modalDone");

const modalTitle = document.getElementById("modalTitle");
const modalBadge = document.getElementById("modalBadge");

const modalShape = document.getElementById("modalShape");
const featureDetails = document.getElementById("featureDetails");
const modalExplanation = document.getElementById("modalExplanation");


/* =========================================
   EXTRA SHAPE INFORMATION
   ========================================= */

const shapeDetails = {

  "square-prism": {
    base: "2 square bases",
    flatFaces: "6 flat faces",
    curvedSurface: "None",
    edges: "12 edges",
    vertices: "8 vertices",
    clue: "It has two matching square bases and only flat surfaces.",
    why: "It is a prism because the two bases are the same shape and size and are connected by flat faces."
  },

  "rectangular-prism": {
    base: "2 rectangular bases",
    flatFaces: "6 flat faces",
    curvedSurface: "None",
    edges: "12 edges",
    vertices: "8 vertices",
    clue: "It has two matching rectangular bases and only flat surfaces.",
    why: "It is a prism because the two bases are identical rectangles connected by flat faces."
  },

  "triangular-prism": {
    base: "2 triangular bases",
    flatFaces: "5 flat faces",
    curvedSurface: "None",
    edges: "9 edges",
    vertices: "6 vertices",
    clue: "Look for the two matching triangle-shaped bases.",
    why: "It is a prism because it has two matching triangular bases connected by three flat rectangular faces."
  },

  "sphere": {
    base: "No flat base",
    flatFaces: "0 flat faces",
    curvedSurface: "1 curved surface",
    edges: "0 edges",
    vertices: "0 vertices",
    clue: "It is completely curved and has no flat base.",
    why: "It is not a prism because it does not have two matching flat bases."
  },

  "cone": {
    base: "1 circular base",
    flatFaces: "1 flat face",
    curvedSurface: "1 curved surface",
    edges: "1 curved edge",
    vertices: "1 vertex",
    clue: "It has one circular base and one curved surface.",
    why: "It is not a prism because it has only one base and its side surface is curved."
  },

  "cylinder": {
    base: "2 circular bases",
    flatFaces: "2 flat faces",
    curvedSurface: "1 curved surface",
    edges: "2 circular edges",
    vertices: "0 vertices",
    clue: "It has two circular bases, but also has a curved surface.",
    why: "It is not a prism because a prism has only flat surfaces."
  },

  "pyramid": {
    base: "1 square base",
    flatFaces: "5 flat faces",
    curvedSurface: "None",
    edges: "8 edges",
    vertices: "5 vertices",
    clue: "It has one base and triangular faces that meet at one point.",
    why: "It is not a prism because it has only one base."
  }

};


/* =========================================
   CREATE SHAPE CARDS
   ========================================= */

function createShapeCards() {

  shapeGallery.innerHTML = "";

  Object.keys(SHAPES).forEach(function(type) {

    const shape = SHAPES[type];

    const card = document.createElement("button");

    card.type = "button";

    card.className = "shape-card";

    card.setAttribute(
      "data-shape",
      type
    );

    card.setAttribute(
      "aria-label",
      `Inspect ${shape.name}`
    );


    const labelClass =
      shape.prism
        ? "prism-label"
        : "nonprism-label";


    const labelText =
      shape.prism
        ? "PRISM"
        : "NON-PRISM";


    card.innerHTML = `

      <div class="gallery-model">

        ${svgForShape(type)}

      </div>

      <h3>
        ${shape.name}
      </h3>

      <span class="${labelClass}">
        ${labelText}
      </span>

      <p class="inspect-hint">
        Click to inspect →
      </p>

    `;


    card.addEventListener(
      "click",
      function() {
        openShapeModal(type);
      }
    );


    shapeGallery.appendChild(card);

  });

}


/* =========================================
   OPEN MODAL
   ========================================= */

function openShapeModal(type) {

  const shape = SHAPES[type];

  const details = shapeDetails[type];


  /* ---------- TITLE ---------- */

  modalTitle.textContent =
    shape.name;


  /* ---------- BADGE ---------- */

  if (shape.prism) {

    modalBadge.innerHTML = `
      <span class="status-badge prism-badge">
        ✓ PRISM
      </span>
    `;

  } else {

    modalBadge.innerHTML = `
      <span class="status-badge nonprism-badge">
        ✕ NON-PRISM
      </span>
    `;

  }


  /* ---------- LARGE SHAPE ---------- */

  modalShape.innerHTML =
    svgForShape(type);


  /* ---------- FEATURE INFORMATION ---------- */

  featureDetails.innerHTML = `

    <div class="feature-item">
      <span class="feature-icon">
        🔷
      </span>

      <div>
        <strong>Base</strong>
        <p>${details.base}</p>
      </div>
    </div>


    <div class="feature-item">
      <span class="feature-icon">
        ◼️
      </span>

      <div>
        <strong>Flat Faces</strong>
        <p>${details.flatFaces}</p>
      </div>
    </div>


    <div class="feature-item">
      <span class="feature-icon">
        🌀
      </span>

      <div>
        <strong>Curved Surface</strong>
        <p>${details.curvedSurface}</p>
      </div>
    </div>


    <div class="feature-item">
      <span class="feature-icon">
        📏
      </span>

      <div>
        <strong>Edges</strong>
        <p>${details.edges}</p>
      </div>
    </div>


    <div class="feature-item">
      <span class="feature-icon">
        🔵
      </span>

      <div>
        <strong>Vertices</strong>
        <p>${details.vertices}</p>
      </div>
    </div>

  `;


  /* ---------- EXPLANATION ---------- */

  if (shape.prism) {

    modalExplanation.innerHTML = `

      <strong>💡 Why is it a prism?</strong>

      <p>
        ${details.clue}
      </p>

      <p>
        ${details.why}
      </p>

    `;

  } else {

    modalExplanation.innerHTML = `

      <strong>💡 Why is it a non-prism?</strong>

      <p>
        ${details.clue}
      </p>

      <p>
        ${details.why}
      </p>

    `;

  }


  /* ---------- SHOW MODAL ---------- */

  shapeModal.classList.add("show");

  shapeModal.setAttribute(
    "aria-hidden",
    "false"
  );


  /* Prevent page scrolling */

  document.body.classList.add(
    "modal-open"
  );


  modalClose.focus();

}


/* =========================================
   CLOSE MODAL
   ========================================= */

function closeShapeModal() {

  shapeModal.classList.remove("show");

  shapeModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================
   BUTTON EVENTS
   ========================================= */

modalClose.addEventListener(
  "click",
  closeShapeModal
);


modalDone.addEventListener(
  "click",
  closeShapeModal
);


/* ---------- CLICK OUTSIDE ---------- */

shapeModal.addEventListener(
  "click",
  function(event) {

    if (
      event.target === shapeModal
    ) {

      closeShapeModal();

    }

  }
);


/* ---------- ESC KEY ---------- */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape" &&
      shapeModal.classList.contains("show")
    ) {

      closeShapeModal();

    }

  }
);


/* =========================================
   CREATE CARDS
   ========================================= */

createShapeCards();
