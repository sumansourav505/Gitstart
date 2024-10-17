function handleFormSubmit(event) {
    event.preventDefault();
    // get data
    const userDetails = {
      username: event.target.name.value,
      email: event.target.mail.value,
      phone: event.target.phno.value,
    };
    //set to localstorage
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    displayUserOnScreen(userDetails);
  }
  // display function
  function displayUserOnScreen(userDetails) {
    // create list 
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
    //create delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.style.marginRight="10px"
    userItem.appendChild(deleteBtn);
    // create deit btn
    const editBtn=document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  //delete functionality
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
    });
    //edit functionality
    editBtn.addEventListener("click",function(event){
      userList.removeChild(userItem);
      localStorage.removeItem(userDetails.email);
      // edit values
      document.getElementById('name').value = userDetails.username;
      document.getElementById('mail').value = userDetails.email;
      document.getElementById('phno').value = userDetails.phone
    })
  }
  
//   module.exports = handleFormSubmit;
    
  