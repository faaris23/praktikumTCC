$(document).ready(function () {
    // Register User
    $("#registerForm").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var password = $("#password").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/register",
            contentType: "application/json",
            data: JSON.stringify({ name: name, password: password }),
            success: function (response) {
                $("#registerMessage").removeClass("hidden").text(response.message);
                window.location.href = "login.html"; // Redirect ke login
            },
            error: function (xhr) {
                $("#registerMessage").removeClass("hidden").text(xhr.responseJSON.error);
            }
        });
    });

    // Login User
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/login",
            contentType: "application/json",
            data: JSON.stringify({ name: username, password: password }),
            success: function (response) {
                alert("Login successful!");
                window.location.href = "mainPage.html"; // Redirect ke main page
            },
            error: function (xhr) {
                $("#errorMessage").removeClass("hidden").text("Invalid username or password");
            }
        });
    });
});
