function renderHeader() {
    const target = document.querySelector(".header");
    if (!target) return;

    target.innerHTML = `
        <a id="logo_link" href="home.html">
            <img class="logo" src="logo.png" alt=" logo of a cart with Kuhlmann Cleaning Service">
        </a>
        <nav class="desktop-nav">
            <a href="about-the-company.html">About The Company Owner</a>
            <a href="home.html">Home</a>
            <a href="services-we-offer.html">Services We Offer</a>
        </nav>
        <button class="menu-btn">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </button>
        <nav class="mobile-nav hide">
            <a href="home.html">Home</a>
            <a href="services-we-offer.html">Services We offers</a>
            <a href="about-the-company.html">About the Company</a>
        </nav>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();

    const btn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.mobile-nav');  

    btn.addEventListener('click', () => {
        menu.classList.toggle('hide');                  
        btn.classList.toggle('change');
    });
});

