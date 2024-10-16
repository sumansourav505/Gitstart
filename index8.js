function handleFormSubmit(event){
    event.preventDefault();
    const username=document.getElementById('uname').value;
    const email=documet.getElementById('mail').value;
    const phone=document.getElementById('mob').value;
    document.setItem('Username',username);
    document.setItem('Email',email);
    document.setItem('Phone',phone);
    document.getElementById('userForm').reset();
}
document.getElementById('userForm').addEventListener('submit', handleFormSubmit);
console.log('User details saved:', { username, email, phone });
