// getAddress.js

// look up the address using the
// coordinates found with getMyLocation
function getAddress(lat, lon)
{
    let url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + lon;

    // fetch also uses a callback-style structure with .then()
    fetch(url)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(data)
        {
            let address = data.display_name;
            console.log("Address Found: " + address);

            // update the screen
            updateDisplay(lat, lon, address);
        })
        .catch(function(err)
        {
            console.log("Geocode error: ", err);
        }
    );
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

