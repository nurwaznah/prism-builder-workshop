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

  sphere: {
    name: "Sphere",
    prism: false,
    description: "A round solid with one continuous curved surface.",
    facts: [
      "No flat base",
      "Curved surface",
      "Not a prism"
    ]
  },

  cone: {
    name: "Cone",
    prism: false,
    description: "A solid with one circular base and a curved surface.",
    facts: [
      "1 circular base",
      "Curved surface",
      "Not a prism"
    ]
  },

  cylinder: {
    name: "Cylinder",
    prism: false,
    description: "A solid with two matching circular bases and a curved surface.",
    facts: [
      "2 matching circular bases",
      "Curved surface",
      "Not a prism"
    ]
  },

  pyramid: {
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


function isPrism(type) {
  return !!SHAPES[type]?.prism;
}


function svgForShape(type) {

  const common =
    `viewBox="0 0 220 180"
     role="img"
     aria-label="${SHAPES[type]?.name || "3D shape"}"`;


  // SQUARE PRISM
  if (type === "square-prism") {

    return `
      <svg class="shape-svg" ${common}>

        <polygon
          points="55,55 135,38 178,62 98,80"
          class="top-face"/>

        <polygon
          points="55,55 98,80 98,145 55,120"
          class="left-face"/>

        <polygon
          points="98,80 178,62 178,126 98,145"
          class="right-face"/>

        <polyline
          points="55,55 135,38 178,62 178,126 98,145 55,120 55,55"
          class="edge"/>

        <line
          x1="98"
          y1="80"
          x2="98"
          y2="145"
          class="edge"/>

      </svg>
    `;
  }


  // RECTANGULAR PRISM
  if (type === "rectangular-prism") {

    return `
      <svg class="shape-svg" ${common}>

        <polygon
          points="42,62 137,42 180,65 85,87"
          class="top-face"/>

        <polygon
          points="42,62 85,87 85,143 42,118"
          class="left-face"/>

        <polygon
          points="85,87 180,65 180,121 85,143"
          class="right-face"/>

        <polyline
          points="42,62 137,42 180,65 180,121 85,143 42,118 42,62"
          class="edge"/>

        <line
          x1="85"
          y1="87"
          x2="85"
          y2="143"
          class="edge"/>

      </svg>
    `;
  }


  // TRIANGULAR PRISM
  if (type === "triangular-prism") {

    return `
      <svg class="shape-svg" ${common}>

        <polygon
          points="50,55 105,35 105,88"
          class="top-face"/>

        <polygon
          points="50,55 105,88 50,108"
          class="left-face"/>

        <polygon
          points="105,35 168,58 168,111 105,88"
          class="right-face"/>

        <polygon
          points="50,55 105,35 168,58 168,111 105,88 50,108 50,55"
          fill="none"
          class="edge"/>

        <line
          x1="50"
          y1="108"
          x2="168"
          y2="111"
          class="edge"/>

      </svg>
    `;
  }


  // SPHERE
  if (type === "sphere") {

    return `
      <svg class="shape-svg" ${common}>

        <defs>
          <radialGradient id="sphereGradient"
            cx="32%"
            cy="28%">

            <stop
              offset="0%"
              stop-color="#ffffff"/>

            <stop
              offset="40%"
              stop-color="#8fc7ff"/>

            <stop
              offset="100%"
              stop-color="#3274c5"/>

          </radialGradient>
        </defs>

        <circle
          cx="110"
          cy="90"
          r="58"
          fill="url(#sphereGradient)"
          stroke="#1e4775"
          stroke-width="3"/>

        <ellipse
          cx="88"
          cy="70"
          rx="25"
          ry="18"
          fill="#ffffff"
          opacity="0.35"/>

      </svg>
    `;
  }


  // CYLINDER
  if (type === "cylinder") {

    return `
      <svg class="shape-svg" ${common}>

        <path
          d="M52 48
             V125
             Q110 145 168 125
             V48
             Q110 67 52 48Z"
          class="side-face"/>

        <ellipse
          cx="110"
          cy="48"
          rx="58"
          ry="19"
          class="top-face"/>

        <ellipse
          cx="110"
          cy="125"
          rx="58"
          ry="19"
          class="bottom-face"/>

        <path
          d="M52 48 V125
             M168 48 V125"
          class="edge"/>

      </svg>
    `;
  }


  // CONE
  if (type === "cone") {

    return `
      <svg class="shape-svg" ${common}>

        <path
          d="M110 30
             L57 120
             Q110 143 163 120
             Z"
          class="side-face"/>

        <ellipse
          cx="110"
          cy="120"
          rx="53"
          ry="18"
          class="top-face"/>

        <path
          d="M110 30 L57 120
             M110 30 L163 120"
          class="edge"/>

      </svg>
    `;
  }


  // PYRAMID
  if (type === "pyramid") {

    return `
      <svg class="shape-svg" ${common}>

        <polygon
          points="52,122 110,45 168,122 110,143"
          class="front-face"/>

        <polygon
          points="110,45 168,122 110,103"
          class="right-face"/>

        <polygon
          points="52,122 110,45 110,103"
          class="left-face"/>

        <polygon
          points="52,122 110,103 168,122 110,143"
          class="base-face"/>

        <polyline
          points="52,122 110,45 168,122 110,143 52,122"
          class="edge"/>

        <line
          x1="110"
          y1="45"
          x2="110"
          y2="103"
          class="edge"/>

      </svg>
    `;
  }

  return "";
}
