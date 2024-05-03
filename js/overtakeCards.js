const tracksInfos = {
    bahrain: {
        turnsCount: 15, 
        locations: [
            ['5%', '81%'],
            ['8%', '73%'],
            ['7%', '63%'],
            ['13.5%', '6%'],
            ['28%', '21%'],
            ['33.5%', '27.5%'],
            ['35%', '38%'],
            ['47%', '55%'],
            ['22%', '54%'],
            ['17%', '61%'],
            ['70%', '54%'],
            ['54%', '35%'],
            ['61%', '12%'],
            ['92.5%', '78%'],
            ['87%', '82%']
        ]
    },
    monaco: {
        turnsCount: 19, 
        locations: [
            ['47.6%', '9.4%'],
            ['60.1%', '56.1%'],
            ['65.6%', '73%'],
            ['77%', '65.4%'],
            ['94.6%', '79.8%'],
            ['86.9%', '90.4%'],
            ['92.4%', '85.1%'],
            ['95.6%', '95.4%'],
            ['69.1%', '91.7%'],
            ['53.7%', '51.1%'],
            ['51.3%', '48.5%'],
            ['46.5%', '17.4%'],
            ['32.6%', '16.2%'],
            ['30.9%', '19.8%'],
            ['20.5%', '25.1%'],
            ['18.7%', '22.2%'],
            ['11.5%', '28%'],
            ['6.5%', '38.9%'],
            ['4.2%', '28.2%']
        ]
    }
};

// ############################ Setup Page ############################

// Retrieve parameter "trackName" from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const trackName = urlParams.get('trackName');

// Get html tags
const circuitContainer = document.querySelector('.circuit-container');
const circuit = document.querySelector('.circuit');

// Set page title
document.title = trackName.toUpperCase();

// Set title next to the track to the right name
circuitContainer.querySelector('.title').innerHTML = trackName.toUpperCase();

// Set sources of the background & the track images.
circuitContainer.querySelector('.img-background').src="../media/Image/Backgrounds/" + trackName + "-background.png";
circuitContainer.querySelector('.img-circuit').src="../media/Image/Tracks/PNGs/" + trackName + "-track.png";

// Create & set positions for each turn of the associated track
tracksInfos[trackName].locations.forEach((point, pointIndex) => {
    circuit.innerHTML += `<div class="overtake-location"></div><!-- T${pointIndex+1} -->`;
    let overtakeLocations = circuitContainer.querySelectorAll('.overtake-location');
    overtakeLocations[pointIndex].style.left = point[0];
    overtakeLocations[pointIndex].style.top = point[1];
});


// ############################ Read CSV ############################
var csvfile = new XMLHttpRequest();

// Set up an event listener for changes in the csvfile object
csvfile.onreadystatechange = function() {

    // Check if the request is done
    if (csvfile.readyState === XMLHttpRequest.DONE) {
        // Check if the request was successful
        if (csvfile.status === 200) {
            // File successfully loaded, process the data

            // Get the response text from the csvfile object
            var data = csvfile.responseText;

            // Split the data into lines based on line breaks
            var lines = data.split(/\r?\n/);
            var overtakesArray = new Array(0);

            // Iterate over each line and split on semicolons
            lines.forEach(function(line) {
                var items = line.split(';');
                overtakesArray.push(items);
            });

            // Find the overtake locations in the Html page
            const overtakeLocations = document.querySelector('.circuit-container').querySelectorAll('.overtake-location');
            
            // Iterate over each overtake data and update the Html page if the location is 'Bahrain'
            overtakesArray.forEach(function(overtake) {
                if (overtake[0].toLowerCase() === trackName){
                    // Check if the overtake-location div already has a hoverCard div, if not, add one
                    if (!overtakeLocations[parseInt(overtake[1])-1].querySelector('.overtake-hoverCard')) {
                        overtakeLocations[parseInt(overtake[1])-1].innerHTML = `<div class="overtake-hoverCard"></div>`
                    }
                    // Append the overtake details to the existing hover card
                    overtakeLocations[parseInt(overtake[1])-1].querySelector('.overtake-hoverCard').innerHTML += `
                    <div class="overtake-row">
                        <div class="overtake-drivers">
                            <img src="../media/Image/Drivers/${overtake[4].toLowerCase()}.png" alt="${overtake[4]}" class="driver-img driverA">
                            <img src="../media/Image/Drivers/${overtake[5].toLowerCase()}.png" alt="${overtake[5]}" class="driver-img driverB">
                            ${overtake[6]? `<img src="../media/Image/Drivers/${overtake[6].toLowerCase()}.png" alt="${overtake[6]}" class="driver-img driverB">`: ''}
                            ${overtake[6]? `<img src="../media/Image/Drivers/${overtake[7].toLowerCase()}.png" alt="${overtake[7]}" class="driver-img driverB">`: ''}
                        </div>
                        <p class="overtake-lap">LAP ${overtake[3]}</p>
                        <p class="overtake-year">${overtake[2]}</p>
                    </div>`;
                }
            });

            // Check if any hover card needs to be widened based on the number of drivers
            document.querySelectorAll('.overtake-hoverCard').forEach((hoverCard) => {
                hoverCard.querySelectorAll('.overtake-drivers').forEach((driverContainer) => {
                    if (driverContainer.children.length === 4) {
                        hoverCard.classList.add('wide');
                    }
                });
            });
            
            document.querySelectorAll('.overtake-location').forEach((location) => {
                
                const hoverCard = location.querySelector('.overtake-hoverCard');
                // Hide the overtake locations that have no overtake data
                if (!hoverCard){
                    location.classList.add('empty');
                // Add overtake count to each other overtake location
                } else {
                    const rowDivs = hoverCard.querySelectorAll('.overtake-row');
                    const rowCount = rowDivs.length;
                    location.insertAdjacentHTML('afterbegin', `${rowCount}`);
                }
            });

        } else {
            // Error handling in case the file loading was not successful
            console.error('Error loading file: ' + csvfile.status);
        }
    }
};

csvfile.open("GET", "../media/Overtakes.csv", true);

csvfile.send();