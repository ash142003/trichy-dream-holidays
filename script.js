<<<<<<< HEAD
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const packagesContainer = document.getElementById('packages-container');
    const modal = document.getElementById('tripModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalBackground = document.getElementById('modalBackground');
    const closeModalButton = document.getElementById('closeModalButton');

    // Group trips by category
    const tripsByCategory = tripData.reduce((acc, trip) => {
        if (!acc[trip.category]) {
            acc[trip.category] = [];
        }
        acc[trip.category].push(trip);
        return acc;
    }, {});

    // --- Function to dynamically create and display trip cards ---
    function displayPackages() {
        for (const category in tripsByCategory) {
            // Create a title for the category
            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category;
            packagesContainer.appendChild(categoryTitle);

            // Create a grid for the packages in this category
            const grid = document.createElement('div');
            grid.className = 'packages-grid';
            
            tripsByCategory[category].forEach(trip => {
                const card = document.createElement('div');
                card.className = 'package-card';
                // Set the background image directly on the element
                card.style.backgroundImage = `url('${trip.image}')`;
                
                // Store the trip data on the element for easy access
                card.dataset.title = trip.title;
                card.dataset.description = trip.description;
                card.dataset.image = trip.image;

                const cardTitle = document.createElement('h3');
                cardTitle.textContent = trip.title;
                card.appendChild(cardTitle);
                
                grid.appendChild(card);
            });

            packagesContainer.appendChild(grid);
        }
    }

    // --- Function to open the modal with trip details ---
    function openModal(trip) {
        modalTitle.textContent = trip.title;
        modalDescription.textContent = trip.description;
        modalBackground.style.backgroundImage = `url('${trip.image}')`;
        modal.style.display = 'flex'; // Use flex for centering
    }

    // --- Function to close the modal ---
    function closeModal() {
        modal.style.display = 'none';
    }

    // --- Event Listeners ---

    // Use event delegation for package card clicks
    packagesContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.package-card');
        if (card) {
            // Retrieve data from the clicked card's dataset
            const tripDetails = {
                title: card.dataset.title,
                description: card.dataset.description,
                image: card.dataset.image
            };
            openModal(tripDetails);
        }
    });

    // Close modal events
    closeModalButton.addEventListener('click', closeModal);

    // Close modal if user clicks outside the content area
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with the Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // --- Initialize the page ---
    displayPackages();
=======
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const packagesContainer = document.getElementById('packages-container');
    const modal = document.getElementById('tripModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalBackground = document.getElementById('modalBackground');
    const closeModalButton = document.getElementById('closeModalButton');

    // Group trips by category
    const tripsByCategory = tripData.reduce((acc, trip) => {
        if (!acc[trip.category]) {
            acc[trip.category] = [];
        }
        acc[trip.category].push(trip);
        return acc;
    }, {});

    // --- Function to dynamically create and display trip cards ---
    function displayPackages() {
        for (const category in tripsByCategory) {
            // Create a title for the category
            const categoryTitle = document.createElement('h2');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category;
            packagesContainer.appendChild(categoryTitle);

            // Create a grid for the packages in this category
            const grid = document.createElement('div');
            grid.className = 'packages-grid';
            
            tripsByCategory[category].forEach(trip => {
                const card = document.createElement('div');
                card.className = 'package-card';
                // Set the background image directly on the element
                card.style.backgroundImage = `url('${trip.image}')`;
                
                // Store the trip data on the element for easy access
                card.dataset.title = trip.title;
                card.dataset.description = trip.description;
                card.dataset.image = trip.image;

                const cardTitle = document.createElement('h3');
                cardTitle.textContent = trip.title;
                card.appendChild(cardTitle);
                
                grid.appendChild(card);
            });

            packagesContainer.appendChild(grid);
        }
    }

    // --- Function to open the modal with trip details ---
    function openModal(trip) {
        modalTitle.textContent = trip.title;
        modalDescription.textContent = trip.description;
        modalBackground.style.backgroundImage = `url('${trip.image}')`;
        modal.style.display = 'flex'; // Use flex for centering
    }

    // --- Function to close the modal ---
    function closeModal() {
        modal.style.display = 'none';
    }

    // --- Event Listeners ---

    // Use event delegation for package card clicks
    packagesContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.package-card');
        if (card) {
            // Retrieve data from the clicked card's dataset
            const tripDetails = {
                title: card.dataset.title,
                description: card.dataset.description,
                image: card.dataset.image
            };
            openModal(tripDetails);
        }
    });

    // Close modal events
    closeModalButton.addEventListener('click', closeModal);

    // Close modal if user clicks outside the content area
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with the Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // --- Initialize the page ---
    displayPackages();
>>>>>>> def3b55a66178a10d754599a3dd739a944051ed8
});