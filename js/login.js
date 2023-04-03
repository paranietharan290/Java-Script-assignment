function validateLogin() {
    let username = document.getElementById('user_name').value;
    let password = document.getElementById('password').value;

    if (username == "") {
        document.getElementById("username_message").innerHTML = "**Fill the Username please!";
        //return false;
    }

    if (password == "") {
        document.getElementById("message").innerHTML = "**Fill the password please!";
        return false;
    }

    if (password.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    if (password.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }

}