// Détecter le défilement de la page
window.addEventListener('scroll', function() {
    // Récupérer la hauteur de défilement de la page
    var scrollHeight = window.scrollY;

    // Sélectionner la barre de navigation
    var navbar = document.querySelector('.navbar');

    // Ajouter ou supprimer la classe 'scrolled' en fonction de la position de défilement
    if (scrollHeight > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
