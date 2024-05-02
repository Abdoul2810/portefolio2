document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const adresseInput = document.getElementById('adresse');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Vérification des champs
        if (nomInput.value.trim() === '') {
            alert('Veuillez entrer votre nom');
            return;
        }
        if (prenomInput.value.trim() === '') {
            alert('Veuillez entrer votre prénom');
            return;
        }
        if (adresseInput.value.trim() === '') {
            alert('Veuillez entrer votre adresse');
            return;
        }
        if (emailInput.value.trim() === '') {
            alert('Veuillez entrer votre email');
            return;
        }
        if (messageInput.value.trim() === '') {
            alert('Veuillez entrer un message');
            return;
        }

        // Si tous les champs sont remplis, le formulaire peut être soumis
        // Tu peux ajouter ici d'autres actions à effectuer avant de soumettre le formulaire, comme l'envoi des données via AJAX
        alert('Formulaire soumis avec succès !');
        form.reset(); // Réinitialise le formulaire
    });
});
