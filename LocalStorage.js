function handleFormSubmit(event){
    event.preventDefault();
    //get values from inputs(by document object)
    // const username=document.getElementById('name').value;
    // const email=document.getElementById('mail').value;
    // const phone=document.getElementById('phno').value;
    //get values from inputs(by event object)
    const username=event.target.name.value;
    const email=event.target.mail.value;
    const phone=event.target.phno.value;
    //get values from inputs(by form object(parent))
    // const form=event.target;
    // const username=form.name.value;
    // const email=form.mail.value;
    // const phone=form.phno.value;

    //store values from the form input
    localStorage.setItem('Username',username);
    localStorage.setItem('Email',email);
    localStorage.setItem('Phone',phone);
    //reset form after submit
    document.getElementById('form').reset();
    console.log('User details saved:', { username, email, phone });
}

