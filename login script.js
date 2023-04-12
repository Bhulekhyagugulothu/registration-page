function toggleFormFields() {
    var loginMethod = document.getElementById("login-method").value;
    var otpField = document.getElementById("otp-field");
    var passwordField = document.getElementById("password-field");

    if (loginMethod === "otp") {
        otpField.style.display = "block";
        passwordField.style.display = "none";
    } else if (loginMethod === "email-password") {
        otpField.style.display = "none";
        passwordField.style.display = "block";
    } else {
        otpField.style.display = "none";
        passwordField.style.display = "none";
    }
}

function validateForm() {
    // Add form validation logic here
    // Return false to


