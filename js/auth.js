class AuthInfos {
    
    constructor() {
        this.infos = [];
    }

    addInfos(firstName, lastName, birthDate, user, pwd) {
        this.infos.push({firstName, lastName, birthDate, user, pwd});
      }

    getInfos() {
        return this.infos;
    }
}

var userInfos = new(AuthInfos);


function checkFormData(){
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;

    if(firstName.length < 2 || lastName.length < 2){
        alert("Your first and last name must be at least 2 characters long");
        document.getElementById("firstNameInput").value = "";
        document.getElementById("lastNameInput").value = "";
        return false;
    }


    const day = document.getElementById("dayInput").value;
    const month = document.getElementById("monthInput").value;
    const year = document.getElementById("yearInput").value;
    
    if (month == "February" && parseInt(day) > 28){
        if ((parseInt(year)%4 === 0 && (parseInt(year)%400 === 0 || parseInt(year)%100 > 0)) && parseInt(day) > 29){
            alert("This month has only 29 days");
            document.getElementById("dayInput")
            return false;
        }
        alert("This month has only 28 days");
        document.getElementById("dayInput")
        return false;
    }
    if (["April", "June", "September", "November"].includes(month) && day === "31"){
        alert("This month has only 30 days");
        return false;
    }


    const user = document.getElementById("userNameInput").value;
    const pwd = document.getElementById("passwordInput").value;

    if(user.length < 4 || pwd.length < 8){
        alert("Your username must be at least 4 characters long and your password must be at least 8 characters long");
        document.getElementById("userNameInput").value = "";
        document.getElementById("passwordInput").value = "";
        return false;
    }

    const birthDate = {day, month, year};
    userInfos.addInfos(firstName, lastName, birthDate, user, pwd);
    saveAuthInfos();
    window.location.replace("../html/")
}





// création d'une session navigateur pour stocker les messages
function saveAuthInfos() {
    console.log('Saving authentication informations...');
    console.log(userInfos.getInfos());
    const infosMap = userInfos.getInfos().map(infos => ({ firstName: infos.firstName, lastName: infos.lastName, birthDate: infos.birthDate, user:infos.user, pwd:infos.pwd}));
    if (infosMap.length !== 0){
        sessionStorage.setItem('authInfos', JSON.stringify(infosMap));
        sessionStorage.setItem('authenticated', true);
    }
}

// Fonction pour charger les messages de la session navigateur
function loadAuthInfos() {
    // Récupérer l'historique des messages de la session navigateur
    // const infosMap = JSON.parse(sessionStorage.getItem('authInfos'));
    
    const authenticated = sessionStorage.getItem('authenticated');
    console.log('Loading authentication informations...');
    console.log(authenticated);
    if (authenticated){
        document.getElementById("profileIcon").style.display = 'block';
        document.getElementById("signup-button").style.display = 'none';
        document.getElementById("login-button").style.display = 'none';

    } else {
        document.getElementById("profileIcon").style.display = 'none';
        document.getElementById("signup-button").style.display = 'block';
        document.getElementById("login-button").style.display = 'block';

    }

    // if (infosMap) {

    //     infosMap.forEach(infos => {
            
    //         //things to do with infos.firstName ...
    //             });
    // }
}


// Enregistrement des messages dans la session du navigateur avant de quitter la page

window.addEventListener('beforeunload', saveAuthInfos);