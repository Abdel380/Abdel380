const tracksInfos = {
    australia: {
        turnsCount: 14,
        locations: [['38.1%', '84.8%'],
                    ['35.7%', '77.9%'],
                    ['8.4%', '71%'],
                    ['11.3%', '61%'],
                    ['4.4%', '48.7%'],
                    ['8.9%', '16.3%'],
                    ['13.9%', '14%'],
                    ['22.4%', '7.6%'],
                    ['59.8%', '49.6%'],
                    ['63.2%', '42.2%'],
                    ['92.9%', '55.4%'],
                    ['86.6%', '73.7%'],
                    ['76.3%', '70.7%'],
                    ['75.5%', '82.3%']]
    },
    austria: {
        turnsCount: 10, 
        locations: [['54.7%', '82.1%'],
                    ['27.8%', '46.9%'],
                    ['14.1%', '35.5%'],
                    ['53.8%', '12.2%'],
                    ['51%', '27%'],
                    ['35.6%', '40.8%'],
                    ['46.4%', '57.2%'],
                    ['51.8%', '43.1%'],
                    ['77.5%', '21.7%'],
                    ['85.3%', '35.7%']]
    },
    bahrain: {
        turnsCount: 15, 
        locations: [['5%', '81%'],
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
                    ['87%', '82%']]
    },
    azerbaijan: {
        turnsCount: 20, 
        locations: [['85.4%', '93.1%'],
                    ['92.2%', '72.8%'],
                    ['62.9%', '42.6%'],
                    ['58.0%', '55.6%'],
                    ['46.4%', '46.2%'],
                    ['44.9%', '49.5%'],
                    ['29.9%', '41.7%'],
                    ['33.7%', '31.7%'],
                    ['33.9%', '29.6%'],
                    ['33.9%', '27.1%'],
                    ['32.4%', '24.4%'],
                    ['33.7%', '20.1%'],
                    ['20.2%', '7.5%'],
                    ['12.6%', '12.5%'],
                    ['5.1%', '22.5%'],
                    ['7.7%', '46.9%'],
                    ['15.4%', '44.6%'],
                    ['24.5%', '47.5%'],
                    ['30.1%', '44.5%'],
                    ['46.3%', '52.9%']]
    },
    spain: {
        turnsCount: 14, 
        locations: [['16.4%', '71.6%'],
                    ['14.8%', '60.8%'],
                    ['3.1%', '42.1%'],
                    ['34.7%', '27.4%'],
                    ['13.8%', '45.6%'],
                    ['25.8%', '61.7%'],
                    ['38.4%', '61.7%'],
                    ['39.3%', '53.0%'],
                    ['51.0%', '26.9%'],
                    ['86.3%', '58.8%'],
                    ['85.2%', '45.0%'],
                    ['78.2%', '32.2%'],
                    ['94.9%', '36.9%'],
                    ['94.5%', '69.2%']]
    },
    canada: {
        turnsCount: 14, 
        locations: [['91.8%', '49.3%'],
                    ['96.1%', '47.6%'],
                    ['83.0%', '66.5%'],
                    ['80.2%', '63.5%'],
                    ['69.8%', '69.5%'],
                    ['59.7%', '63.1%'],
                    ['56.7%', '69.9%'],
                    ['29.1%', '45.5%'],
                    ['29.4%', '40.2%'],
                    ['4.2%', '14.2%'],
                    ['10.1%', '15.1%'],
                    ['27.3%', '16.4%'],
                    ['60.2%', '29.1%'],
                    ['62.2%', '32.9%']]
    },
    hungary: {
        turnsCount: 14, 
        locations: [['24.2%', '6.1%'],
                    ['34.7%', '46.8%'],
                    ['41.9%', '34.2%'],
                    ['74.9%', '26.9%'],
                    ['87.3%', '12.0%'],
                    ['88.9%', '37.8%'],
                    ['85.1%', '39.8%'],
                    ['78.5%', '52.3%'],
                    ['82%', '63.1%'],
                    ['70%', '74.3%'],
                    ['64.7%', '88.8%'],
                    ['36%', '86.9%'],
                    ['34.3%', '65.0%'],
                    ['27.1%', '85.9%']]
    },
    emilia_romagna: {
        turnsCount: 19, 
        locations: [['60%', '17.4%'],
                    ['27%', '19.4%'],
                    ['26.1%', '24.4%'],
                    ['20.3%', '31.1%'],
                    ['12.6%', '68.4%'],
                    ['13.4%', '75.7%'],
                    ['3.7%', '95.1%'],
                    ['23%', '92.1%'],
                    ['34.4%', '94.0%'],
                    ['37.9%', '78.7%'],
                    ['35.5%', '59.7%'],
                    ['38.7%', '50.6%'],
                    ['41.7%', '52.1%'],
                    ['63.3%', '50.6%'],
                    ['65.4%', '53.2%'],
                    ['88.3%', '23.2%'],
                    ['96.1%', '15.6%'],
                    ['93.1%', '5.6%'],
                    ['76.6%', '16.5%']]
    },
    miami: {
        turnsCount: 19, 
        locations: [['62.1%', '51.9%'],
                    ['58.2%', '59.5%'],
                    ['57.6%', '68.6%'],
                    ['26.8%', '58.4%'],
                    ['18.5%', '63.9%'],
                    ['11.5%', '56.7%'],
                    ['3.2%', '66.9%'],
                    ['5.2%', '71.3%'],
                    ['39.9%', '74.9%'],
                    ['55.1%', '81.8%'],
                    ['91.5%', '57.8%'],
                    ['87.2%', '47.7%'],
                    ['93.7%', '43.8%'],
                    ['96.5%', '37.9%'],
                    ['95.3%', '34.4%'],
                    ['96.1%', '25.9%'],
                    ['14.3%', '21.3%'],
                    ['21.5%', '29.6%'],
                    ['32.2%', '23.6%']]
    },
    monaco: {
        turnsCount: 19, 
        locations: [['47.6%', '9.4%'],
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
                    ['4.2%', '28.2%']]
    },
    italy: {
        turnsCount: 11, 
        locations: [['40.8%', '77.7%'],
                    ['39.2%', '75.4%'],
                    ['23.6%', '74.7%'],
                    ['16.1%', '35.4%'],
                    ['14.3%', '31.9%'],
                    ['10.7%', '12.1%'],
                    ['21.5%', '6.9%'],
                    ['46.8%', '57.0%'],
                    ['50.3%', '56.7%'],
                    ['53.1%', '60.3%'],
                    ['89.7%', '63.8%']]
    },
    saudi_arabia: {
        turnsCount: 27, 
        locations: [['61.7%', '46.0%'],
                    ['61.6%', '50.9%'],
                    ['57.8%', '51.6%'],
                    ['47.7%', '61.4%'],
                    ['45.7%', '69.2%'],
                    ['41.0%', '69.4%'],
                    ['37.7%', '73.1%'],
                    ['36.5%', '78.0%'],
                    ['31.6%', '80.5%'],
                    ['28.6%', '76.7%'],
                    ['25.4%', '77.5%'],
                    ['22.2%', '77.8%'],
                    ['6.3%', '93.6%'],
                    ['16.3%', '85.2%'],
                    ['23.2%', '84.4%'],
                    ['26.9%', '83.1%'],
                    ['29.8%', '87.0%'],
                    ['34.1%', '85.4%'],
                    ['41.0%', '75.1%'],
                    ['48.8%', '68.2%'],
                    ['54.2%', '58.1%'],
                    ['63.5%', '51.9%'],
                    ['64.8%', '46.8%'],
                    ['69.0%', '42.5%'],
                    ['78.7%', '43.0%'],
                    ['90.3%', '25.8%'],
                    ['93.1%', '5.7%']]
    },
    belgium: {
        turnsCount: 19, 
        locations: [['15.6%', '92.0%'],
                    ['28.9%', '53.7%'],
                    ['30.8%', '47.7%'],
                    ['35.9%', '43.4%'],
                    ['74.0%', '7.4%'],
                    ['77.2%', '10.9%'],
                    ['82.6%', '8.2%'],
                    ['91.3%', '29.4%'],
                    ['84.3%', '21.1%'],
                    ['65.3%', '34.6%'],
                    ['65.9%', '48.8%'],
                    ['82.4%', '60.3%'],
                    ['82.2%', '70.7%'],
                    ['91.3%', '80.7%'],
                    ['86.9%', '93.9%'],
                    ['66.8%', '67.2%'],
                    ['54.6%', '59.4%'],
                    ['35.2%', '72.4%'],
                    ['33.2%', '68.7%']]
    },
    netherlands: {
        turnsCount: 14, 
        locations: [['64.1%', '94.8%'],
                    ['67.5%', '61.8%'],
                    ['76.4%', '52.3%'],
                    ['59.7%', '54.4%'],
                    ['42.9%', '52.2%'],
                    ['30.4%', '59.9%'],
                    ['8.3%', '50.7%'],
                    ['19.7%', '21.5%'],
                    ['36.1%', '30.6%'],
                    ['19.3%', '44.3%'],
                    ['65%', '37.6%'],
                    ['70.5%', '41.8%'],
                    ['69.8%', '6.4%'],
                    ['90.5%', '14.8%']]
    },
    japan: {
        turnsCount: 18, 
        locations: [['94.9%', '83.4%'],
                    ['92.4%', '92.7%'],
                    ['84.5%', '79.2%'],
                    ['79.0%', '76.3%'],
                    ['76.0%', '65.9%'],
                    ['68.7%', '61.3%'],
                    ['68.7%', '45.7%'],
                    ['49.7%', '56.6%'],
                    ['42.4%', '57.1%'],
                    ['39.5%', '34.3%'],
                    ['41.1%', '24.0%'],
                    ['23.9%', '37.3%'],
                    ['12.1%', '14.5%'],
                    ['5.1%', '19.1%'],
                    ['44.3%', '51.4%'],
                    ['58.6%', '35.5%'],
                    ['62.1%', '36.6%'],
                    ['67.9%', '33.6%']]
    },
};

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
                        overtakeLocations[parseInt(overtake[1])-1].innerHTML = `<div class="overtake-hoverCard" onclick="window.location = '${overtake[8]}'"></div>`
                    }
                    // Append the overtake details to the existing hover card
                    overtakeLocations[parseInt(overtake[1])-1].querySelector('.overtake-hoverCard').innerHTML += `
                    <div class="overtake-row">
                        <div class="overtake-drivers">
                            <img src="../media/Image/Drivers/${overtake[4].toLowerCase()}.png" alt="${overtake[4]}" title="${overtake[4]}" class="driver-img driverA">
                            <img src="../media/Image/Drivers/${overtake[5].toLowerCase()}.png" alt="${overtake[5]}" title="${overtake[5]}" class="driver-img driverB">
                            ${overtake[6]? `<img src="../media/Image/Drivers/${overtake[6].toLowerCase()}.png" alt="${overtake[6]}" title="${overtake[6]}" class="driver-img driverB">`: ''}
                            ${overtake[6]? `<img src="../media/Image/Drivers/${overtake[7].toLowerCase()}.png" alt="${overtake[7]}" title="${overtake[7]}" class="driver-img driverB">`: ''}
                        </div>
                        ${overtake[3]? `<p class="overtake-lap">LAP ${overtake[3]}</p>`: ''}
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


window.onload = function() {
    updateCircuitContainerHeight();
    csvfile.open("GET", "../media/csv/Overtakes.csv", true);
    csvfile.send();
};

window.onresize = function() {
    updateCircuitContainerHeight();
}