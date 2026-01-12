// getMyLocation.js

// get the GPS coordinates
function getMyLocation()
{
    if (navigator.geolocation)
    {
        let options =
        {
            enableHighAccuracy: true, timeout: 5000
        };

        navigator.geolocation.getCurrentPosition(function(position)
        {
            let lat = position.coords.latitude;

            let lon = position.coords.longitude;

            console.log("GPS Found: " + lat + ", " + lon);

            // now that we have the lat/lon, 
            // we manually call the next function.
            getAddress(lat, lon);
        },
        function(error)
        {
            ge("status").innerHTML = "GPS Error: " + error.message;
        }, options);
    }
    else
    {
        alert("GPS not supported on this device.");
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

