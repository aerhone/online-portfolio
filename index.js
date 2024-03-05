const loader = document.querySelector("#preloader")
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "visible";
    }, 4400);


})


function initializeTypingEffect() {
    let typingEffect = new Typed(".labelTitle", {
        strings: ["Full Stack Web Developer", "Mechanical Engineer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500
    });
}

setTimeout(initializeTypingEffect, 1500);

let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        tabLinks.forEach(link => link.classList.remove("active-link"));
        link.classList.add("active-link");
        
        tabContents.forEach(content => content.classList.remove("active-tab"));
        tabContents[index].classList.add("active-tab");
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxdSJbTjPzyBgrjRzmJ5GfCDvfV1CHfKxSir2Zlh24FQ-oLC4PoS30c_gXEbbW5tkd6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg")

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    

    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
    submitButton.disabled = true; 
    
    fetch(scriptURL, { 
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    })
    .catch(error => {
        console.error('Error!', error.message);
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    });
});

