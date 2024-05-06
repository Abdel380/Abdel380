// ############################ Setup Page ############################

// Retrieve parameter "trackName" from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const trackName = urlParams.get('trackName');

// Get html tags
const circuitContainer = document.querySelector('.circuit-container');
const circuit = document.querySelector('.circuit');

// Refactor track Name for page and track title
const trackSplit = trackName.split("_");
for (let i = 0; i < trackSplit.length; i++) {
    trackSplit[i] = trackSplit[i][0].toUpperCase() + trackSplit[i].slice(1);
}
const trackTitleName = trackSplit.join(" ");

// Set page title
document.title = trackTitleName + ' - F1 Overtakes';

// Set title next to the track to the right name
circuitContainer.querySelector('.title').innerHTML = trackTitleName;

// Set sources of the background & the track images.

circuitContainer.querySelector('.img-background').src="../media/Image/Backgrounds/" + trackName + "-background.png";

let imgCircuit = circuitContainer.querySelector('.img-circuit');
imgCircuit.src="../media/Image/Tracks/PNGs/" + trackName + "-track.png";

// Create & set positions for each turn of the associated track
tracksInfos[trackName].locations.forEach((point, pointIndex) => {
    circuit.innerHTML += `<div class="overtake-location"></div><!-- T${pointIndex+1} -->`;
    let overtakeLocations = circuitContainer.querySelectorAll('.overtake-location');
    overtakeLocations[pointIndex].style.left = point[0];
    overtakeLocations[pointIndex].style.top = point[1];
});

// Get the height of the viewport
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// Set the height of the circuit container and adjust the fade height
function updateCircuitContainerHeight() {
    let imgBackground = circuitContainer.querySelector('.img-background');
    let fade = circuitContainer.querySelector('.fade');
    imgCircuit = circuitContainer.querySelector('.img-circuit');

    // Calculate the height of the images
    const imgBackground_Height = imgBackground.naturalHeight * imgBackground.clientWidth / imgBackground.naturalWidth;
    const imgCircuit_Height = imgCircuit.naturalHeight * imgCircuit.clientWidth / imgCircuit.naturalWidth;

    // Set the height of the circuit container
    circuitContainer.style.height = `calc(45px + (20vh) + ${imgCircuit_Height}px + 50px)`;

    // Set the height of the fade
    if (imgBackground_Height < (45 + 20*vh/100 + imgCircuit_Height + 50)) {
        fade.style.height = `${imgBackground_Height+2}px`;
    } else {
        fade.style.height = "100%";
    }
}

