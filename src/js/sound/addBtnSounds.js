// addBtnSounds.js

function addBtnSounds()
{
    let buttons = document.querySelectorAll('button');

    for (let x = 0; x < buttons.length; x++)
    {
        buttons[x].addEventListener('mouseover', function()
        {
            hoverSound();
        });

        buttons[x].addEventListener('click', function()
        {
            clickSound();
        });
    }
}

/*
This is a useful function if we want to 
add the sounds to our buttons without
having to code each element.

This function adds the sound event listener 
to each button that it finds for click and hover sounds.

If we want to use this function, we would type it in the whenLoaded function as addBtnSounds();

This gives all buttons that it finds a hover sound and a click sound for click and mouseover events
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

