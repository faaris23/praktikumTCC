/* script.js */
$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();
        
        if (username === "admin" && password === "1234") {
            alert("Login successful!");
        } else {
            $("#errorMessage").removeClass("hidden");
        }
    });
});