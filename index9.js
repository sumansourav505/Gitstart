function handleFormSubmit(event){
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const userDetails = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
    };
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));
    console.log("User Details stored in localStorage:", userDetails);
}
window.handleFormSubmit = handleFormSubmit;