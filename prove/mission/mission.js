
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.className = 'dark'; //changes to dark mode when clicked on
        logo.setAttribute('src', 'byui-logo-dark.png'); //this is the black logo of byu-i
        logo.setAttribute('alt', 'black byu-i logo');
    }
    
    else {
        // code for changes to colors and logo
        document.body.classList.remove('dark'); //remove dark class from body
        logo.setAttribute('src', 'byui-logo_blue.webp'); //should swtich to white logo
        logo.setAttribute('alt', 'white byu-i logo'); 
    }

}           
                    