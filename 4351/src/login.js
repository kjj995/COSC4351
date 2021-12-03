const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", login);

function login(event) {
    event.preventDefault();

    const users = JSON.parse(window.localStorage.getItem("users"));

    const userName = event.target[0].value;
    const password = event.target[1].value;
    const userExist = users ? users.some(user => user.name === userName && user.password === password) : false;
    
    if (userExist) {
        window.location.href = "reservation.html";
    } else {
        document.getElementById("error-msg").innerHTML = "Can't find userName or Password."
    }
}



