function validate(e){
    e.preventDefault();
    var yourname = document.getElementsByName("yourname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var interest = document.getElementsByName("interest")[0].value;
    
    if(yourname == ""){
        alert("Please enter your name");
        return false;
    }

    if(email == ""){
        alert("Please enter your email");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Please enter a valid email");
        return false;
    }

    if(interest == "Select Option"){
        alert("Please select your interest");
        return false;
    }

    alert("Thank you for your interest. We will get back to you soon.");

}