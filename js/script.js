window.addEventListener('scroll', function() {
    var header = document.getElementById('Header');
    if (window.scrollY > 200) { // Si le défilement dépasse 1000 pixels
        header.classList.add('scrolled'); // Ajoute la classe "scrolled" au header
    } else {
        header.classList.remove('scrolled'); // Supprime la classe "scrolled" du header
    }
});