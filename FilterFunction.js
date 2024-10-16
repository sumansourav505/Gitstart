document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fruitInput = document.querySelector("#fruit-to-add");
    const fruitsList = document.querySelector(".fruits");
    const filterInput = document.querySelector("#filter");
  
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("placeholder", "Enter fruit description");
  
    const submitButton = form.querySelector("button");
    form.insertBefore(descriptionInput, submitButton);
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const fruitName = fruitInput.value.trim();
      const fruitDescription = descriptionInput.value.trim();
  
      if (fruitName === "") {
        alert("Please enter a fruit name.");
        return;
      }
      if (fruitDescription === "") {
        alert("Please enter a description.");
        return;
      }
  
      const li = document.createElement("li");
      li.classList.add("fruit");
      li.innerHTML = `${fruitName} <button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
      const p = document.createElement("p");
      p.style.fontStyle = "italic"; 
      p.textContent = fruitDescription;
      li.appendChild(p); 
      fruitsList.appendChild(li);
  
      fruitInput.value = "";
      descriptionInput.value = "";
      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
      });
    });
    filterInput.addEventListener("input", (event) => {
      const filterText = event.target.value.toLowerCase();
      const fruits = document.querySelectorAll(".fruit");
  
      fruits.forEach((fruit) => {
        const fruitName = fruit.childNodes[0].textContent.toLowerCase();
        const fruitDescriptionElement = fruit.querySelector("p");
        const fruitDescription = fruitDescriptionElement
          ? fruitDescriptionElement.textContent.toLowerCase()
          : "";
  
        const matchesName = fruitName.includes(filterText);
        const matchesDescription = fruitDescription.includes(filterText);
        if (matchesName || matchesDescription) {
          fruit.style.display = ""; 
        } else {
          fruit.style.display = "none"; 
        }
      });
  
    });
  
  });
  