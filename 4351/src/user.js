function addUser(newUser) {
    let existingUsers = window.localStorage.getItem("users");
    existingUsers = existingUsers ? JSON.parse(existingUsers) : [];
    existingUsers.push(newUser);

    window.localStorage.setItem("users", JSON.stringify(existingUsers));
}
