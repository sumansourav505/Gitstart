document.addEventListener("DOMContentLoaded", function () {
    // Get necessary elements
    const fruitToAddInput = document.getElementById("fruit-to-add");
    const fruitToAddBtn = document.getElementById("fruit-to-add-btn");
    const fruitsList = document.querySelector(".fruits");
  
    // Create a new input element for fruit description and insert before the button
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "fruit-description");
    descriptionInput.setAttribute("placeholder", "Enter fruit description...");
    const form = fruitToAddBtn.parentNode;
    form.insertBefore(descriptionInput, fruitToAddBtn);
  
    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const fruitName = fruitToAddInput.value.trim();
      const fruitDescription = descriptionInput.value.trim();
  
      if (fruitName) {
        const li = document.createElement("li");
        li.classList.add("fruit");
  
        // Add fruit name and delete button
        li.innerHTML = `${fruitName}<button class="delete-btn">x</button>`;
  
        // Create a paragraph for the fruit description
        if (fruitDescription) {
          const descriptionParagraph = document.createElement("p");
          descriptionParagraph.innerHTML = `<em>${fruitDescription}</em>`;
          li.appendChild(descriptionParagraph); // Add description after fruit name
        }
  
        // Append the new fruit to the list
        fruitsList.appendChild(li);
  
        // Clear the input fields
        fruitToAddInput.value = "";
        descriptionInput.value = "";
      }
    });
  
    // Event listener to delete a fruit item
    fruitsList.addEventListener("click", function (e) {
      if (e.target.classList.contains("delete-btn")) {
        const li = e.target.parentElement;
        fruitsList.removeChild(li);
      }
    });
  });
  