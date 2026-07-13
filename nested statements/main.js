
let username = "victor";
let password = "1234ms";
let isActive = true;


let correctUsername = "victor";
let correctPassword = "1234ms";

if (username === correctUsername) {
    console.log("Username is correct");

    if (password === correctPassword) {
        console.log("Password is correct");

        if (isActive === true) {
            console.log("User is active");
            console.log("Login Successful");
        } else {
            console.log("User is not active");
        }

    } else {
        console.log("Incorrect password");
    }

} else {
    console.log("Incorrect username");
}