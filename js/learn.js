/* =========================================
   SHAPE BUILDER WORKSHOP
   LEARN PAGE
   SHAPE INSPECTOR
   ========================================= */

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
   SHAPE INFORMATION
   ========================================= */

const shapeDetails = {

  "square-prism": {
    base: "2 square bases",
    flatFaces: "6 flat faces",
    curvedSurface: "None",
    edges: "12 edges",
    vertices: "8 vertices",

    clue:
      "Look for two matching square bases.",

    why:
      "It is a prism because the two square bases are the same shape and size and are connected by flat faces."
  },


  "rectangular-prism": {
    base: "2 rectangular bases",
    flatFaces: "6 flat faces",
    curvedSurface: "None",
    edges: "12 edges",
    vertices: "8 vertices",

    clue:
      "Look for two matching rectangular bases.",

    why:
      "It is a prism because the two rectangular bases are the same shape and size and are connected by flat faces."
  },


  "triangular-prism": {
    base: "2 triangular bases",
    flatFaces: "5 flat faces",
    curvedSurface: "None",
    edges: "9 edges",
    vertices: "6 vertices",

    clue:
      "Look for the two matching triangle-shaped bases.",

    why:
      "It is a prism because it has two matching triangular bases connected by flat rectangular faces."
  },


  "sphere": {
    base: "No flat base",
    flatFaces: "0 flat faces",
    curvedSurface: "1 curved surface",
    edges: "0 edges",
    vertices: "0 vertices",

    clue:
      "The whole surface is curved.",

    why:
      "It is not a prism because it does not have two matching flat bases."
  },


  "cone": {
    base: "1 circular base",
    flatFaces: "1 flat face",
    curvedSurface: "1 curved surface",
    edges: "1 curved edge",
    vertices: "1 vertex",

    clue:
      "It has one circular base and a curved surface.",

    why:
      "It is not a prism because it has only one base and its side surface is curved."
  },


  "cylinder": {
    base: "2 circular bases",
    flatFaces: "2 flat faces",
    curvedSurface: "1 curved surface",
    edges: "2 circular edges",
    vertices: "0 vertices",

    clue:
      "It has two circular bases, but it also has a curved surface.",

    why:
      "It is not a prism because a prism has only flat surfaces."
  },


  "pyramid": {
    base: "1 square base",
    flatFaces: "5 flat faces",
    curvedSurface: "None",
    edges: "8 edges",
    vertices: "5 vertices",

    clue:
      "It has one base and triangular faces that meet at one point.",

    why:
      "It is not a prism because it has only one base."
  }

};


/* =========================================
   FEATURE LABELS
   ========================================= */

const featureLabels = {

  base: {
    icon: "🔷",
    title: "Base",
    description: "The base is the flat surface used as the shape's starting face."
  },

  flatFaces: {
    icon: "◼️",
    title: "Flat Face",
    description: "A flat face is a flat surface of the 3D shape."
  },

  curvedSurface: {
    icon: "🌀",
    title: "Curved Surface",
    description: "A curved surface bends around the shape."
  },

  edges: {
    icon: "📏",
    title: "Edge",
    description: "An edge is where two faces meet."
  },

  vertices: {
    icon: "🔵",
    title: "Vertex",
    description: "A vertex is a corner or point where edges meet."
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


  /* =========================================
     FEATURE BUTTONS
     ========================================= */

  featureDetails.innerHTML = "";


  const featureKeys = [
    "base",
    "flatFaces",
    "curvedSurface",
    "edges",
    "vertices"
  ];


  featureKeys.forEach(function(key) {

    const item =
      document.createElement("button");

    item.type = "button";

    item.className =
      "feature-item";


    item.innerHTML = `

      <span class="feature-icon">
        ${featureLabels[key].icon}
      </span>

      <span class="feature-text">

        <strong>
          ${featureLabels[key].title}
        </strong>

        <small>
          ${details[key]}
        </small>

      </span>

    `;


    item.addEventListener(
      "click",
      function() {

        highlightFeature(
          key,
          details[key]
        );

      }
    );


    featureDetails.appendChild(item);

  });


  /* ---------- DEFAULT EXPLANATION ---------- */

  modalExplanation.innerHTML = `

    <strong>
      💡 Think like a Shape Builder!
    </strong>

    <p>
      Click one of the features above to learn
      more about this part of the shape.
    </p>

  `;


  /* ---------- SHOW MODAL ---------- */

  shapeModal.classList.add("show");

  shapeModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );


  modalClose.focus();

}


/* =========================================
   HIGHLIGHT FEATURE
   ========================================= */

function highlightFeature(
  feature,
  value
) {

  const info =
    featureLabels[feature];


  /* Remove previous selection */

  document
    .querySelectorAll(".feature-item")
    .forEach(function(item) {

      item.classList.remove(
        "feature-selected"
      );

    });


  /* Find selected item */

  const buttons =
    document.querySelectorAll(
      ".feature-item"
    );


  buttons.forEach(function(button) {

    const title =
      button.querySelector("strong");

    if (
      title &&
      title.textContent === info.title
    ) {

      button.classList.add(
        "feature-selected"
      );

    }

  });


  /* ---------- SHOW EXPLANATION ---------- */

  modalExplanation.innerHTML = `

    <div class="highlight-title">

      ${info.icon}

      <strong>
        ${info.title}
      </strong>

    </div>

    <p>
      <strong>
        ${value}
      </strong>
    </p>

    <p>
      ${info.description}
    </p>

  `;

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
   START
   ========================================= */

createShapeCards();
