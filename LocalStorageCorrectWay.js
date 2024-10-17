function handleFormSubmit(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const phoneNumber = document.getElementById('phno').value;
    const userDetails = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
    };
    localStorage.setItem("User Details", JSON.stringify(userDetails));
    console.log("User Details stored in localStorage:", userDetails);
}