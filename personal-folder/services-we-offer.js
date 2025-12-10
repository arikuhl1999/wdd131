const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalDescription = modal.querySelector('.description');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// OPEN MODAL
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;  

    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const desc = img.dataset.desc;

    modalImage.src = src;       
    modalImage.alt = alt;
    modalDescription.textContent = desc;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const services = [
    {
        id: 1,
        title: 'Employee Mopping',
        description: 'We strive to make sure things are clean to your liking',
        imgSrc: 'images/mopping.jpg',
        imgAlt: 'picture of an employee mopping'
    },
    {
        id: 2,
        title: 'Powerwashing',
        description: 'We can help powerwash your sidewalks and house if you would like this service we do offer an estimate. Please contact us on the contact us page or feel free to call me if you have any questions.',
        imgSrc: 'images/powerwashing.jpg',
        imgAlt: 'picture of powerwashing'
    },
    {
        id: 3,
        title: "Carpet Cleaning",
        description: 'We can do carpet cleaning. Please contact us on the contact us page or feel free to call me if you have any questions.',
        imgSrc: "images/carpet-cleaning.jpg",
        imgAlt: "picture of a carpet cleaning machine"
    },
    {
        id: 4,
        title: 'Lawn Work',
        description: 'We can also help do lawn mowing, edge the lawn, trim up bushes, then we will clean up the mess.',
        imgSrc: 'images/lawn.jpg',
        imgAlt: 'picture of a lawnmower, shovel, and push broom'
    },
    {
        id: 5,
        title: 'Wax and Strip floors',
        description: 'We can strip and wax your floors if you are doing a construction, please contact us on the contact us page or feel free to call me if you have any questions.',
        imgSrc: "images/carpet-cleaning.jpg",
        imgAlt: 'picture of employees stripping and waxing floors'
    }
];

services.forEach(service => {
    gallery.innerHTML += `
        <article class="service">
            <h2>${service.title}</h2>
            <img src="${service.imgSrc}" 
                 alt="${service.imgAlt}" 
                 data-desc="${service.description}">
        </article>`;
});
