window.addEventListener('scroll', function() {
    var header = document.getElementById('headerbar');
    if (window.scrollY > 200) { // Si le défilement dépasse 1000 pixels
        header.classList.add('scrolled'); // Ajoute la classe "scrolled" au header
    } else {
        header.classList.remove('scrolled'); // Supprime la classe "scrolled" du header
    }
});


// LOAD AUTHENTICATION INFORMATIONS
function loadAuthInfos() {
    // Récupérer l'historique des messages de la session navigateur
    // const infosMap = JSON.parse(sessionStorage.getItem('authInfos'));
    
    const authenticated = sessionStorage.getItem('authenticated');
    console.log('Loading authentication informations...');
    console.log(authenticated);
    if (authenticated == 'true'){
        document.getElementById("profileIcon").style.display = 'inline-block';
        document.getElementById("signup-button").style.display = 'none';
        document.getElementById("login-button").style.display = 'none';

    } else {
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



// NAVIGATION MENU
mainNavToggle = document.getElementById("main-nav-toggle-burger");
mainNavDropdown = document.getElementById("main-nav-dropdown");
profileIconNav = document.getElementById("profileIcon");

const screenWidth = window.innerWidth;

mainNavToggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggleNavMenu();
});

function addEventListenerToProfileButton(){
    if (screenWidth < 1000){
        profileIconNav.addEventListener('click', (event) => {
            event.preventDefault();
            toggleNavMenu();
        });
    } else {
        profileIconNav.removeEventListener('click', toggleNavMenu);
    }
}

addEventListenerToProfileButton();

window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
    addEventListenerToProfileButton();
});


function toggleNavMenu(){
    if (mainNavToggle.classList.contains('active-menu') ) {
        mainNavToggle.classList.remove('active-menu');
        mainNavDropdown.classList.remove('active');
        mainNavDropdown.querySelectorAll("i").forEach(element => {
        element.classList.remove('active')
        });

    } else {
        mainNavToggle.classList.add('active-menu');
        mainNavDropdown.classList.add('active');
        mainNavDropdown.querySelectorAll("i").forEach(element => {
        element.classList.add('active')
        });
    }
}



