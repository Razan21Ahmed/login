const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

function registerAuth() {
    const username = document.querySelector(".register input[type='text']").value;
    const email = document.querySelector(".register input[type='email']").value;
    const password = document.querySelector(".register input[type='password']").value;
    
    if (username && email && password) {
        const user = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful! You can now log in.");
    } else {
        alert("Please fill in all fields.");
    }
    cleanForm()
}

function loginAuth() {
    const username = document.querySelector(".login input[type='text']").value;
    const password = document.querySelector(".login input[type='password']").value;
    
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser && username === storedUser.username && password === storedUser.password) {
        alert("Login successful! Welcome " + storedUser.username + "!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
    cleanForm()
}

document.querySelector(".register form").addEventListener("submit", (e) => {
    e.preventDefault();
    registerAuth();
});

document.querySelector(".login form").addEventListener("submit", (e) => {
    e.preventDefault();
    loginAuth();
});

function cleanForm(){
    document.querySelector(".register input[type='text']").value = "";
    document.querySelector(".register input[type='email']").value = "";
    document.querySelector(".register input[type='password']").value = "";
    document.querySelector(".login input[type='text']").value = "";
    document.querySelector(".login input[type='password']").value = "";
}