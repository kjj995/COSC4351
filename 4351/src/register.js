const registerForm = document.getElementById("registration-form");

registerForm.addEventListener("submit", register);


function register(event) {
    event.preventDefault();

    const name = event.target[0].value;
    const password = event.target[1].value;
    const mailingAddress = event.target[2].value;
    const billingAddress = event.target[3].value;
    const dinerNumber = event.target[4].value;
    const payment = event.target[5].checked ?
        "cash" : event.target[6].checked ?
            "credit" : event.target[7].checked ?
                "check" : null;

    addUser(
        {
            name,
            password,
            mailingAddress,
            billingAddress,
            dinerNumber,
            payment
        }
    );

    window.location.href = "login.html";
}

