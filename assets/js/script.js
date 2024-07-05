(function(){
    emailjs.init("JIskyfpIOCfNOvUlN"); // Sostituisci YOUR_PUBLIC_KEY con la tua Public Key
})();


// Aggiungi un margine superiore alla descrizione solo quando la griglia passa da due colonne a una sola colonna con due righe
window.addEventListener('resize', function () {
    const descriptionColumn = document.getElementById('description-column');
    if (window.innerWidth < 576) { // Controlla se la larghezza della finestra è inferiore a 576px
        descriptionColumn.classList.add('mt-4');
    } else {
        descriptionColumn.classList.remove('mt-4');
    }
});


$(document).ready(function() {
    // Array di percorsi relativi delle immagini
    var images = [
        'assets/images/cards/immagine1.png',
        'assets/images/cards/immagine2.png',
        'assets/images/cards/immagine3.png',
        'assets/images/cards/immagine4.png'
    ];

    // Seleziona un'immagine casuale dall'array
    var randomImage = images[Math.floor(Math.random() * images.length)];

    // Imposta l'immagine nella card
    $('#randomImage').attr('src', randomImage);

    // Percorso dell'immagine specifica per la seconda card
    var specificImage = 'assets/images/cards/immagineCV.png';

    // Imposta l'immagine nella seconda card
    $('#specificImage').attr('src', specificImage);

});


$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        var recaptchaResponse = grecaptcha.getResponse();
        if(recaptchaResponse.length == 0) {
            alert('Please complete the reCAPTCHA');
            return;
        }

        var templateParams = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val(),
            'g-recaptcha-response': recaptchaResponse
        };

        emailjs.send('service_t2nmkqs', 'template_ph3rjss', templateParams)
            .then(function(response) {
                alert('Your message has been sent successfully!', response.status, response.text);
                grecaptcha.reset();
            }, function(error) {
                alert('An error occurred. Please try again.', error);
            });
    });
});