// Scroll animacion
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));


// EmailJS 
emailjs.init("oayX8Ffl7jzCd6ff7");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_3zxcbfe",
        "template_h76paub",
        this
    ).then(function() {
        alert("Mensaje enviado correctamente");
        form.reset();
    }, function(error) {
        alert("Error al enviar el mensaje");
        console.log(error);
    });
});

