const SHAPES = {
  "square-prism": {
    name: "Square Prism",
    prism: true,
    description: "A prism with two matching square bases.",
    facts: [
      "2 matching square bases",
      "Flat surfaces",
      "No curved surface"
    ]
  },

  "rectangular-prism": {
    name: "Rectangular Prism",
    prism: true,
    description: "A prism with two matching rectangular bases.",
    facts: [
      "2 matching rectangular bases",
      "Flat surfaces",
      "No curved surface"
    ]
  },

  "triangular-prism": {
    name: "Triangular Prism",
    prism: true,
    description: "A prism with two matching triangular bases.",
    facts: [
      "2 matching triangular bases",
      "Flat surfaces",
      "No curved surface"
    ]
  },

  "sphere": {
    name: "Sphere",
    prism: false,
    description: "A round solid with a curved surface.",
    facts: [
      "No flat base",
      "Curved surface",
      "Not a prism"
    ]
  },

  "cone": {
    name: "Cone",
    prism: false,
    description: "A solid with one circular base and a curved surface.",
    facts: [
      "1 circular base",
      "Curved surface",
      "Not a prism"
    ]
  },

  "cylinder": {
    name: "Cylinder",
    prism: false,
    description: "A solid with two matching circular bases and a curved surface.",
    facts: [
      "2 matching circular bases",
      "Curved surface",
      "Not a prism"
    ]
  },

  "pyramid": {
    name: "Pyramid",
    prism: false,
    description: "A solid with one base and triangular faces meeting at a point.",
    facts: [
      "1 base",
      "Flat surfaces",
      "Not a prism"
    ]
  }
};


// Check whether a shape is a prism
function isPrism(type) {
  return SHAPES[type].prism;
}


// Create a 3D-looking SVG for each shape
function svgForShape(type) {

  // -------------------------
  // SQUARE PRISM
  // -------------------------

  if (type === "square-prism") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Square Prism">

        <polygon
          points="55,55 135,38 178,62 98,80"
          class="top-face">
        </polygon>

        <polygon
          points="55,55 98,80 98,145 55,120"
          class="left-face">
        </polygon>

        <polygon
          points="98,80 178,62 178,126 98,145"
          class="right-face">
        </polygon>

        <polyline
          points="55,55 135,38 178,62 178,126 98,145 55,120 55,55"
          class="edge">
        </polyline>

        <line
          x1="98"
          y1="80"
          x2="98"
          y2="145"
          class="edge">
        </line>

      </svg>
    `;
  }


  // -------------------------
  // RECTANGULAR PRISM
  // -------------------------

  if (type === "rectangular-prism") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Rectangular Prism">

        <polygon
          points="42,62 137,42 180,65 85,87"
          class="top-face">
        </polygon>

        <polygon
          points="42,62 85,87 85,143 42,118"
          class="left-face">
        </polygon>

        <polygon
          points="85,87 180,65 180,121 85,143"
          class="right-face">
        </polygon>

        <polyline
          points="42,62 137,42 180,65 180,121 85,143 42,118 42,62"
          class="edge">
        </polyline>

        <line
          x1="85"
          y1="87"
          x2="85"
          y2="143"
          class="edge">
        </line>

      </svg>
    `;
  }


  // -------------------------
  // TRIANGULAR PRISM
  // -------------------------

  if (type === "triangular-prism") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Triangular Prism">

        <polygon
          points="50,55 105,35 105,88"
          class="top-face">
        </polygon>

        <polygon
          points="50,55 105,88 50,108"
          class="left-face">
        </polygon>

        <polygon
          points="105,35 168,58 168,111 105,88"
          class="right-face">
        </polygon>

        <polyline
          points="50,55 105,35 168,58 168,111 105,88 50,108 50,55"
          class="edge">
        </polyline>

        <line
          x1="50"
          y1="108"
          x2="168"
          y2="111"
          class="edge">
        </line>

      </svg>
    `;
  }


  // -------------------------
  // SPHERE
  // -------------------------

  if (type === "sphere") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Sphere">

        <defs>

          <radialGradient
            id="sphereGradient"
            cx="32%"
            cy="28%">

            <stop
              offset="0%"
              stop-color="#ffffff">
            </stop>

            <stop
              offset="40%"
              stop-color="#8fc7ff">
            </stop>

            <stop
              offset="100%"
              stop-color="#3274c5">
            </stop>

          </radialGradient>

        </defs>

        <circle
          cx="110"
          cy="90"
          r="58"
          fill="url(#sphereGradient)"
          stroke="#1e4775"
          stroke-width="3">
        </circle>

        <ellipse
          cx="88"
          cy="70"
          rx="25"
          ry="18"
          fill="#ffffff"
          opacity="0.35">
        </ellipse>

      </svg>
    `;
  }


  // -------------------------
  // CYLINDER
  // -------------------------

  if (type === "cylinder") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Cylinder">

        <path
          d="M52 48
             V125
             Q110 145 168 125
             V48
             Q110 67 52 48Z"
          class="side-face">
        </path>

        <ellipse
          cx="110"
          cy="48"
          rx="58"
          ry="19"
          class="top-face">
        </ellipse>

        <ellipse
          cx="110"
          cy="125"
          rx="58"
          ry="19"
          class="bottom-face">
        </ellipse>

        <path
          d="M52 48 V125
             M168 48 V125"
          class="edge">
        </path>

      </svg>
    `;
  }


  // -------------------------
  // CONE
  // -------------------------

  if (type === "cone") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Cone">

        <path
          d="M110 30
             L57 120
             Q110 143 163 120
             Z"
          class="side-face">
        </path>

        <ellipse
          cx="110"
          cy="120"
          rx="53"
          ry="18"
          class="top-face">
        </ellipse>

        <path
          d="M110 30 L57 120
             M110 30 L163 120"
          class="edge">
        </path>

      </svg>
    `;
  }


  // -------------------------
  // PYRAMID
  // -------------------------

  if (type === "pyramid") {

    return `
      <svg class="shape-svg"
           viewBox="0 0 220 180"
           role="img"
           aria-label="Pyramid">

        <polygon
          points="52,122 110,45 168,122 110,143"
          class="front-face">
        </polygon>

        <polygon
          points="110,45 168,122 110,103"
          class="right-face">
        </polygon>

        <polygon
          points="52,122 110,45 110,103"
          class="left-face">
        </polygon>

        <polygon
          points="52,122 110,103 168,122 110,143"
          class="base-face">
        </polygon>

        <polyline
          points="52,122 110,45 168,122 110,143 52,122"
          class="edge">
        </polyline>

        <line
          x1="110"
          y1="45"
          x2="110"
          y2="103"
          class="edge">
        </line>

      </svg>
    `;
  }


  // If the shape doesn't exist
  return "";
}
