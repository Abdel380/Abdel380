function addheaderscrollclass() {
    
    var headerbar = document.getElementById('headerbar');
    if (!(window.location.href.includes('usersignup.html'))) {
        if (window.scrollY > 200) { // Si le défilement dépasse 1000 pixels
            headerbar.classList.add('scrolled'); // Ajoute la classe "scrolled" au header
        } else {
            headerbar.classList.remove('scrolled'); // Supprime la classe "scrolled" du header
        }
    }
}

function hideNavMenu() {
    if (mainNavDropdown.classList.contains('active')){
        toggleNavMenu();
    }
   
}

window.addEventListener('scroll', function() {
    addheaderscrollclass();
    hideNavMenu();
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
        document.getElementsByClassName("hamburger")[0].style.display = 'none';
        document.getElementById("signup-button").style.display = 'none';
        document.getElementById("login-button").style.display = 'none';
        document.getElementById("main-nav-dropdown").innerHTML = `
        <i><a href="../html/#bookmark-home">Accueil</a></i>
        <i><a href="../html/#bookmark-circuit">Circuits</a></i>
        <i><a href="../html/userProfile.html">Profil</a></i>
        <i><a id="logoutLink" href="../html/">Deconnexion</a></i>`;
        setTimeout(() => {
            const logoutLink = document.getElementById("logoutLink");
            logoutLink.addEventListener('click', function(event){
                sessionStorage.removeItem('authenticated');
                sessionStorage.removeItem('authInfos');
            });
        }, 10);

    } else {
        document.getElementById("profileIcon").style.display = 'none';
        document.getElementById("main-nav-dropdown").innerHTML = `
        <i><a href="../html/">Accueil</a></i>
        <i><a href="../html/#bookmark-circuit">Circuits</a></i>
        <i><a href="usersignup.html">S'inscrire</a></i>
        <i><a href="userlogin.html">Connexion</a></i>`;
    }

    // if (infosMap) {

    //     infosMap.forEach(infos => {
            
    //         //things to do with infos.firstName ...
    //             });
    // }
}

window.addEventListener('load', loadAuthInfos);




// NAVIGATION MENU
headerbar = document.getElementById("headerbar");
mainNavToggle = document.getElementById("main-nav-toggle-burger");
mainNavDropdown = document.getElementById("main-nav-dropdown");
profileIconNav = document.getElementById("profileIcon");




var screenWidth = window.innerWidth;

window.addEventListener('click', function(event){		
    if (event.target != mainNavDropdown){
        hideNavMenu();
}});

mainNavToggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggleNavMenu();
});



var newHandle = function(event) { 
    event.preventDefault();
    toggleNavMenu(); 
};

profileIconNav.addEventListener('click', newHandle, false);



function addEventListenerToProfileButton(){
    if (window.innerWidth < 1000){
        console.log('adding event listener to profile button');
        profileIconNav.addEventListener('click', newHandle, false);
        
    } else {
        console.log('removing event listener to profile button');
        profileIconNav.removeEventListener('click', newHandle, false);
        if (mainNavDropdown.classList.contains('active')){
            toggleNavMenu();
        }
    }
}

// addEventListenerToProfileButton();

// window.addEventListener('resize', addEventListenerToProfileButton);




function toggleNavMenu(){
    if (mainNavToggle.classList.contains('active-menu')) {
        console.log('closing nav menu');
        mainNavToggle.classList.remove('active-menu'); // Change cross icon to hamburger icon
        addheaderscrollclass(); // Update header background color
        window.addEventListener('scroll', addheaderscrollclass); // Change header color on scroll
        mainNavDropdown.classList.remove('active'); // Hide nav menu
        mainNavDropdown.querySelectorAll("i").forEach(element => {
            element.classList.remove('active')
        });
        setTimeout(() => { // Wait for nav menu to be hidden
            if (!(mainNavToggle.classList.contains('active-menu'))){ // Check if the menu is still closed (not re-opened)
                mainNavDropdown.style.display = 'none'; // Change nav menu display to none
            }
        }, 550);

    } else {
        mainNavDropdown.style.display = 'grid';
        mainNavToggle.classList.add('active-menu'); // Change hamburger icon to cross icon
        setTimeout(() => { // Wait for nav menu to be grid displayed
            headerbar.classList.add('scrolled'); // Change header background color
            window.removeEventListener('scroll', addheaderscrollclass); // Stop header color change on scroll
            mainNavDropdown.classList.add('active'); // Display nav menu
            
            mainNavDropdown.querySelectorAll("i").forEach(element => {
                element.classList.add('active')
            });
            
        }, 10);
        
    }
}

