$(document).ready(function() {
    console.log("javascript i s hooked up")
    $("#signIn").on("click", function() {

        alert('sin works')
        var user = {
            password: $('#password').val(),
            username: $('#email').val()
        }
        $.post('/signin', user, (data)=> {
            console.log(data)
        })
    });
});