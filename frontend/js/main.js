// form effect

$(function() {

    $('#login-form-link').click(function() {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
    });
    $('#register-form-link').click(function() {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
    });


});

// add to carts
function myFunction() {
    alert("Item Added to cart");
}
// form validation

function signup() {

    // var 
    var fName = document.getElementById('fName').value;
    var LName = document.getElementById('LName').value;
    var Username = document.getElementById('UserName').value;
    var password = document.getElementById('password').value;
    var Email = document.getElementById('email').value;
    var rePassword = document.getElementById('confirmPassword').value;





    //form condition
    // first name
    if (fName === "") {
        document.getElementById('f_name_error').innerHTML = "Pleace fill up the first name**";
        return false;
    }
    if (!isNaN(fName)) {
        document.getElementById('f_name_error').innerHTML = "first name must be a character";
        return false;
    }
    if (fName <= 3 || fName >= 15) {
        document.getElementById('f_name_error').innerHTML = "First name contain 3 to 20 characters **"
        return false;
    }

    // last name 

    if (LName === "") {
        document.getElementById('l_name_error').innerHTML = " Pleace fill up the last name";
        return false;
    }
    if (!isNaN(LName)) {

        document.getElementById('l_name_error').innerHTML = "Last name must be character";
        return false;
    }
    if (LName <= 3 || LName >= 20) {
        document.getElementById('l_name_error').innerHTML = " the character must be 3 and less then 20";
        return false;
    }


    // usser name

    if (Username === "") {
        document.getElementById('user_name_error').innerHTML = " pleace fill up the character";
        return false;
    }
    if (Username <= 5 || Username > 11) {
        document.getElementById('user_name_error').innerHTML = "user name  must be 5 or less then 20";
        return false;
    }


    // email 
    if (Email === "") {
        document.getElementById('email_error').innerHTML = " pleace fill up the email";
        return false
    }

    // password
    if (password === "" && password == null) {
        document.getElementById('pws_error').innerHTML = "Password Required";
        return false;
    }
    if (password <= 5) {
        document.getElementById('pws_error').innerHTML = "Password must be longer then 5 character";
        return false;
    }

    if (password != rePassword) {
        document.getElementById('Repws_error').innerHTML = "Password does not matched";
        return false;
    }

    alert("Register complete");

    window.location.href = "home.html";


}



function login() {
    var Username = document.getElementById('UserName').value;
    var password = document.getElementById('password').value;

    if (Username === Username && password === password) {
        window.location.href = "home.html";
    }
}