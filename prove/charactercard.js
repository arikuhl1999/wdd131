let attackbutton = document.querySelector('#attack');
attackbutton.addEventListener('click', adjustHealth);
function adjustHealth() {
    let health = parseInt(document.querySelector('#health').textContent)
    if (health == 0) { 
        alert("You're character passed away, sorry")
    }
    // console.log(document.querySelector('#health').value);
    health -= 20;
    // console.log(health) 
    document.querySelector('#health').textContent = health;
}

// level up 
let levelbutton = document.querySelector('#level');
levelbutton.addEventListener('click', increaseLevel);
function increaseLevel() {
    let level = parseInt(document.querySelector('#lev').textContent);
    level += 1;
    document.querySelector('#lev').textContent = level;
}
