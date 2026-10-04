const buttons = document.querySelectorAll("#toolboxButtons button");

const model = document.getElementById("inspectModel");
const badge = document.getElementById("inspectBadge");
const title = document.getElementById("inspectTitle");
const description = document.getElementById("inspectDescription");
const facts = document.getElementById("inspectFacts");


buttons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Remove the selected style from all buttons
    buttons.forEach(function(item) {
      item.classList.remove("selected");
    });

    // Highlight the button that was clicked
    button.classList.add("selected");

    // Get the shape name
    const type = button.dataset.shape;

    // Get information about the shape
    const info = SHAPES[type];


    // Show the 3D shape
    model.innerHTML = svgForShape(type);


    // Show PRISM or NON-PRISM
    if (info.prism) {

      badge.textContent = "✓ PRISM";
      badge.className = "status-badge prism-badge";

    } else {

      badge.textContent = "✕ NON-PRISM";
      badge.className = "status-badge nonprism-badge";

    }


    // Show the shape name
    title.textContent = info.name;


    // Show the explanation
    description.textContent = info.description;


    // Show the facts
    facts.innerHTML = "";

    info.facts.forEach(function(fact) {

      const listItem = document.createElement("li");

      listItem.textContent = fact;

      facts.appendChild(listItem);

    });

  });

});
