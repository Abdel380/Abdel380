var csvfile = new XMLHttpRequest();

var currentFileName = window.location.pathname.split('/').pop();

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
                if (overtake[0].toLowerCase() === currentFileName.replace('.html', '')){
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