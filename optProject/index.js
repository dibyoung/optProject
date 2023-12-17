var btn = document.querySelector('.Logbtn');
btn.addEventListener('click', function() {
    var userInp = document.querySelector('#usernameInp').value;
    var passInp = document.querySelector('#passInp').value;
    const username = 'justin';
    const password = '0131';
     // Converted password to a string

    if (userInp === "|| passInp === ") {
        alert('Input username and password');
    } else if (username === userInp && password === passInp) {
        window.location.href = 'profile.html'; 
        // Redirect to numberCon.html on successful login
    } 
    else if(userInp != username)
    {
        alert('incorrect username');
    }
    else if(passInp != password) {
        alert('incorrect password');
    }
});