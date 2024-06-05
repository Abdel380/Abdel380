window.addEventListener('scroll', function() {
    var header = document.getElementById('HeaderBar');
    if (window.scrollY > 200) { // Si le défilement dépasse 1000 pixels
        header.classList.add('scrolled'); // Ajoute la classe "scrolled" au header
    } else {
        header.classList.remove('scrolled'); // Supprime la classe "scrolled" du header
    }
});

function loadAuthInfos() {
    // Récupérer l'historique des messages de la session navigateur
    // const infosMap = JSON.parse(sessionStorage.getItem('authInfos'));
    const authenticated = sessionStorage.getItem('authenticated');
    console.log('Loading authentication informations...');
    console.log(authenticated);
    if (authenticated){
        document.getElementById("profileIcon").style.display = 'inline-block';
        document.getElementById("signup-button").style.display = 'none';
        document.getElementById("login-button").style.display = 'none';

    } else{
        document.getElementById("profileIcon").style.display = 'none';
        document.getElementById("signup-button").style.display = 'inline-block';
        document.getElementById("login-button").style.display = 'inline-block';

    }

    // if (infosMap) {

    //     infosMap.forEach(infos => {
            
    //         //things to do with infos.firstName ...
    //             });
    // }
}

window.addEventListener('load', loadAuthInfos);




// Scroll header
document.getElementById("scrollButton").addEventListener("click", function() {
    // Faites défiler la page vers le bas de 500 pixels
    window.scrollTo({
        top: document.querySelector('.title').getBoundingClientRect().top, // Position verticale de "CIRCUIT"
        left: 0,  // Nombre de pixels à faire défiler horizontalement
        behavior: 'smooth' // Défiler de manière fluide
    });
});