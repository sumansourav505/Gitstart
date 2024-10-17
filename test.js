function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.name.value,
      email: event.target.mail.value,
      phone: event.target.phno.value,
    };
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    displayUserOnScreen(userDetails);
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
    });
  }
  
//   module.exports = handleFormSubmit;