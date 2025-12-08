const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);
    const img = e.target;
    
    const src = img.getAttribute('src');
    const alt = img.getAttribute("alt"); 
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;
    
    modal.showModal();

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const services = [
	{
		id: 1,
		title: 'Employee Mopping',
		description:
			'We strive to make sure things are clean to your liking',
		imgSrc: 'images/mopping.jpg',
		imgAlt: 'picture of an employee mopping'
	},
	{
		id: 2,
		title: 'Powerwashing',
		description:
			'We can help powerwash your sidewalks and house if you would like this service we do offer an estimate. Please contact us on the contact us page or feel free to call me if you have any questions.',
		imgSrc:
			'images/powerwashing.jpg',
		imgAlt: 'picture of powerwashing',
	},
	{
		id: 3,
		title: "Carpet Cleaning",
		description:
		'We can do carpet cleaning. Please contact us on the contact us page or feel free to call me if you have any questions.',
		imgSrc:
		"images/carpet-cleaning.jpg",
		imgAlt: "picture of a carpet cleaning machine",
	},
    {
        id: 4,
        title: 'Lawn Work',
        description: 
        'We can also help do lawn mowing, edge the lawn, trim up bushes, then we will clean up the mess.',
        imgSrc:
        'images/lawn.jpg',
        imgAlt:'picture of a lawnmower, shovel, and push broom',
    },
    {
        id: 5,
		title: 'Wax and Strip floors',
		description:
		'We can strip and wax your floors if you are doing a construction, please contact us on the contact us page or feel free to call me if you have any questions.',
		imgSrc:
		"images/carpet-cleaning.jpg",
		imgAlt: 'picture of a employees stripping and waxing the floors',
    },
];

let servicesList = document.querySelector('#gallery');

    servicesList.forEach(service => {

        // Code for going through each movie and creating content for that movie
        let html = `<article class="details">
        	</article>
			<article class="service">
			<h2>${service.title}</h2>
      		<img src="${service.imgSrc}" alt="${service.imgAlt}">
      		<p id='desc'>${service.description}</p>
    		</article>`;

        serviceList.innerHTML += html;
    
    });
