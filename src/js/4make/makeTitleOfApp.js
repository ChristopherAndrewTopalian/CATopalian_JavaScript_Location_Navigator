// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 7 + 'px';
    mainDiv.style.top = 0 + 'px';
    // mainDiv.style.padding = '5px 10px';
    ba(mainDiv);

    //-//

    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Location_Navigator';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Location Navigator';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(140, 140, 140)';
    mainDiv.append(titleAndLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

