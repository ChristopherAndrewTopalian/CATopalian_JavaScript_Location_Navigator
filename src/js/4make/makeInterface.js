// makeInterface.js

function makeInterface()
{
    let theTitle = ce('div');
    theTitle.textContent = 'LOCATION NAVIGATOR';
    theTitle.style.fontWeight = 'bold';
    ba(theTitle);

    //-//

    let locationContainer = ce('div');
    locationContainer.style.display = 'flex';
    locationContainer.style.flexDirection = 'column';
    locationContainer.style.width = '300px';
    locationContainer.style.height = '300px';
    locationContainer.style.padding = '2px 7px';
    locationContainer.style.margin = '4px';
    locationContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    locationContainer.style.borderRadius = '8px';
    locationContainer.style.fontSize = '20px';
    ba(locationContainer);

    //-//

    let locationBtn = ce('button');
    locationBtn.textContent = 'Get Latitude, Longitude and Address';
    locationBtn.style.alignSelf = 'center'; // flex-start
    locationBtn.onmouseover = function()
    {
        hoverSound();
    };
    locationBtn.onclick = function()
    {
        clickSound();

        getMyLocation();
    };
    locationContainer.append(locationBtn);

    //-//

    locationContainer.append(ce('hr'));

    //-//

    let latitudeOutput = ce('div');
    latitudeOutput.textContent = 'Latitude';
    latitudeOutput.id = 'latitudeOutput';    
    latitudeOutput.style.fontWeight = 'bold';
    latitudeOutput.style.color = 'rgb(0, 255, 255)';
    locationContainer.append(latitudeOutput);

    //-//

    let longitudeOutput = ce('div');
    longitudeOutput.textContent = 'Longitude';
    longitudeOutput.id = 'longitudeOutput';
    longitudeOutput.style.fontWeight = 'bold';
    longitudeOutput.style.color = 'rgb(0, 255, 255)';
    locationContainer.append(longitudeOutput);

    //-//

    locationContainer.append(ce('hr'));

    //-//

    let locationOutput = ce('div');
    locationOutput.textContent = 'Address';
    locationOutput.id = 'locationOutput';
    locationOutput.style.fontWeight = 'bold';
    locationContainer.append(locationOutput);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

