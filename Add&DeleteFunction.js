document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const fruitInput = document.querySelector("#fruit-to-add");
  const fruitsList = document.querySelector(".fruits");

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
  
});