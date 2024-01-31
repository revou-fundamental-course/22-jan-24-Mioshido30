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

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const links = document.querySelectorAll('.menu > span > a');

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.add('hide');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].classList.remove('hide');

    }, 2000);


    links.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
