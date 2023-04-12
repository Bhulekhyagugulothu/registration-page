function toggleFormFields() {
    var method = document.getElementById("method").value;
    var otpField = document.getElementById("otp-field");
    var passwordField = document.getElementById("password-field");

    if (method === "email-otp" || method === "sms-otp") {
        otpField.style.display = "block";
        passwordField.style.display = "none";
    } else if (method === "email-password") {
        otpField.style.display = "none";
        passwordField.style.display = "block";
    } else {
        otpField
