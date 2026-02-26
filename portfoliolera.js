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
(function(){
  emailjs.init("oayX8Ffl7jzCd6ff7");
})();

const status = document.getElementById("form-status");

//document.getElementById("contact-form").addEventListener("submit", function(e)) {
 // e.preventDefault();

  emailjs.sendForm("service_3zxcbfe","template_h76paub", this)
    .then(() => {
    status.textContent = "Mensaje enviado correctamente.";
    status.style.color = "#22c55e";
    form.reset();
})
.catch((error) => {
    status.textContent = "Error al enviar el mensaje.";
    status.style.color = "#ef4444";
    console.log(error);
});