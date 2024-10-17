// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('phno').value;
  
    // Create user object
    const user = {
      username: username,
      email: email,
      phone: phone
    };
  
    // Get existing users from local storage or initialize as empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Add new user to the array
    users.push(user);
  
    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('phno').value = '';
  
    // Update the displayed user list
    displayUsers();
  }
  
  // Function to display users in the unordered list
  function displayUsers() {
    // Get users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Get the unordered list element
    const userList = document.getElementById('user-list');
  
    // Clear the list before adding new items
    userList.innerHTML = '';
  
    // Loop through users and create list items
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.username} - ${user.email} - ${user.phone}`;
      userList.appendChild(li);
    });
  }
  
  // Display users when the page loads
  window.onload = displayUsers;
  