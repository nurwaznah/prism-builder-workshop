/* =========================================
   SHAPE BUILDER WORKSHOP
   SHAPE DATA + 3D SVG MODELS
   ========================================= */

const SHAPES = {

  "square-prism": {
    name: "Square Prism",
    prism: true,
    description: "A prism with two matching square bases.",
    facts: [
      "2 matching square bases",
      "6 flat faces",
      "12 edges",
      "8 vertices",
      "No curved surface"
    ]
  },

  "rectangular-prism": {
    name: "Rectangular Prism",
    prism: true,
    description: "A prism with two matching rectangular bases.",
    facts: [
      "2 matching rectangular bases",
      "6 flat faces",
      "12 edges",
      "8 vertices",
      "No curved surface"
    ]
  },

  "triangular-prism": {
    name: "Triangular Prism",
    prism: true,
    description: "A prism with two matching triangular bases.",
    facts: [
      "2 matching triangular bases",
      "5 flat faces",
      "9 edges",
      "6 vertices",
      "No curved surface"
    ]
  },

  "sphere": {
    name: "Sphere",
    prism: false,
    description: "A round solid with a curved surface.",
    facts: [
      "No flat base",
      "1 curved surface",
      "0 edges",
      "0 vertices",
      "Not a prism"
    ]
  },

  "cone": {
    name: "Cone",
    prism: false,
    description: "A solid with one circular base and one curved surface.",
    facts: [
      "1 circular flat base",
      "1 curved surface",
      "1 curved edge",
      "1 vertex",
      "Not a prism"
    ]
  },

  "cylinder": {
    name: "Cylinder",
    prism: false,
    description: "A solid with two circular bases and a curved surface.",
    facts: [
      "2 circular flat bases",
      "1 curved surface",
      "2 circular edges",
      "0 vertices",
      "Not a prism"
    ]
  },

  "pyramid": {
    name: "Pyramid",
    prism: false,
    description: "A solid with one base and triangular faces that meet at one vertex.",
    facts: [
      "1 flat base",
      "Triangular side faces",
      "5 vertices",
      "8 edges",
      "Not a prism"
    ]
  }

};


/* =========================================
   CHECK PRISM
   ========================================= */

function isPrism(type) {
  return SHAPES[type].prism;
}


/* =========================================
   CREATE 3D SVG
   ========================================= */

function svgForShape(type) {

  /* ---------- SQUARE PRISM ---------- */

  if (type === "square-prism") {

    return `
      <svg
        class="shape-svg"
        viewBox="0 0 300 240"
        aria-label="Square prism">

        <polygon
          class="top-face"
          points="70,65 165,40 235,75 140,100">
        </polygon>

        <polygon
          class="left-face"
          points="70,65 140,100 140,190 70,150">
        </polygon>

        <polygon
          class="right-face"
          points="140,100 235,75 235,165 140,190">
        </polygon>

        <line
          class="edge"
          x1="70"
          y1="150"
          x2="140"
          y2="190">
        </line>

        <line
          class="edge"
          x1="235"
          y1="165"
          x2="140"
          y2="190">
        </line>

      </svg>
    `;
  }


  /* ---------- RECTANGULAR PRISM ---------- */

  if (type === "rectangular-prism") {

    return `
      <svg
        class="shape-svg"
        viewBox="0 0 320 240"
        aria-label="Rectangular prism">

        <polygon
          class="top-face"
          points="55,65 180,35 260,75 135,105">
        </polygon>

        <polygon
          class="left-face"
          points="55,65 135,105 135,185 55,145">
        </polygon>

        <polygon
          class="right-face"
          points="135,105 260,75 260,155 135,185">
        </polygon>

        <line
          class="edge"
          x1="55"
          y1="145"
          x2="135"
          y2="185">
        </line>

        <line
          class="edge"
          x1="260"
          y1="155"
          x2="135"
          y2="185">
        </line>

      </svg>
    `;
  }


  /* =========================================
     TRIANGULAR PRISM
     ========================================= */

  if (type === "triangular-prism") {

    return `
      <svg
        class="shape-svg triangular-prism-svg"
        viewBox="0 0 360 260"
        aria-label="Triangular prism">

        <!-- LEFT TRIANGULAR BASE -->

        <polygon
          class="base-face"
          points="55,175 55,75 55,75 55,175"
          style="display:none;">
        </polygon>

        <polygon
          class="left-face"
          points="55,175 55,75 125,125">
        </polygon>


        <!-- RIGHT TRIANGULAR BASE -->

        <polygon
          class="right-face"
          points="245,175 245,75 315,125">
        </polygon>


        <!-- TOP RECTANGULAR FACE -->

        <polygon
          class="top-face"
          points="55,75 245,75 315,125 125,125">
        </polygon>


        <!-- BOTTOM RECTANGULAR FACE -->

        <polygon
          class="front-face"
          points="125,125 315,125 315,175 125,175">
        </polygon>


        <!-- LEFT BOTTOM FACE -->

        <polygon
          class="left-face"
          points="55,175 125,125 125,175">
        </polygon>


        <!-- TRIANGLE OUTLINES -->

        <line
          class="edge"
          x1="55"
          y1="75"
          x2="125"
          y2="125">
        </line>

        <line
          class="edge"
          x1="125"
          y1="125"
          x2="55"
          y2="175">
        </line>

        <line
          class="edge"
          x1="55"
          y1="175"
          x2="55"
          y2="75">
        </line>


        <line
          class="edge"
          x1="245"
          y1="75"
          x2="315"
          y2="125">
        </line>

        <line
          class="edge"
          x1="315"
          y1="125"
          x2="245"
          y2="175">
        </line>

        <line
          class="edge"
          x1="245"
          y1="175"
          x2="245"
          y2="75">
        </line>

      </svg>
    `;
  }


  /* ---------- SPHERE ---------- */

  if (type === "sphere") {

    return `
      <svg
        class="shape-svg"
        viewBox="0 0 300 240"
        aria-label="Sphere">

        <defs>
          <radialGradient
            id="sphereGradient"
            cx="30%"
            cy="25%">

            <stop
              offset="0%"
              stop-color="#ffffff">
            </stop>

            <stop
              offset="35%"
              stop-color="#78b8ec">
            </stop>

            <stop
              offset="100%"
              stop-color="#3979b8">
            </stop>

          </radialGradient>
        </defs>

        <circle
          cx="150"
          cy="120"
          r="75"
          fill="url(#sphereGradient)"
          stroke="#1e4775"
          stroke-width="4">
        </circle>

      </svg>
    `;
  }


  /* ---------- CONE ---------- */

  if (type === "cone") {

    return `
      <svg
        class="shape-svg"
        viewBox="0 0 300 250"
        aria-label="Cone">

        <ellipse
          class="base-face"
          cx="150"
          cy="190"
          rx="75"
          ry="25">
        </ellipse>

        <path
          class="side-face"
          d="
            M75 190
            L150 55
            L225 190
            Q150 215 75 190
            Z">
        </path>

        <ellipse
          class="base-face"
          cx="150"
          cy="190"
          rx="75"
          ry="25">
        </ellipse>

        <line
          class="edge"
          x1="75"
          y1="190"
          x2="150"
          y2="55">
        </line>

        <line
          class="edge"
          x1="150"
          y1="55"
          x2="225"
          y2="190">
        </line>

      </svg>
    `;
  }


  /* ---------- CYLINDER ---------- */

  if (type === "cylinder") {

    return `
      <svg
        class="shape-svg"
        viewBox="0 0 300 250"
        aria-label="Cylinder">

        <path
          class="side-face"
          d="
            M75 70
            C75 50 225 50 225 70
            L225 180
            C225 200 75 200 75 180
            Z">
        </path>

        <ellipse
          class="top-face"
          cx="150"
          cy="70"
          rx="75"
          ry="25">
        </ellipse>

        <ellipse
          class="bottom-face"
          cx="150"
          cy="180"
          rx="75"
          ry="25">
        </ellipse>

        <path
          class="edge"
          d="M75 70 C75 50 225 50 225 70">
        </path>

        <path
          class="edge"
          d="M75 180 C75 200 225 200 225 180">
        </path>

      </svg>
    `;
  }


  /* ---------- PYRAMID ---------- */

  if (type === "pyramid") {

    return `
      <svg
        class="shape-svg"
        viewBox="0 0 300 250"
        aria-label="Pyramid">

        <polygon
          class="base-face"
          points="75,185 150,215 225,185 150,155">
        </polygon>

        <polygon
          class="left-face"
          points="150,55 75,185 150,155">
        </polygon>

        <polygon
          class="right-face"
          points="150,55 150,155 225,185">
        </polygon>

        <polygon
          class="top-face"
          points="150,55 75,185 150,215">
        </polygon>

        <line
          class="edge"
          x1="150"
          y1="55"
          x2="225"
          y2="185">
        </line>

        <line
          class="edge"
          x1="150"
          y1="55"
          x2="75"
          y2="185">
        </line>

      </svg>
    `;
  }


  return "";
}
