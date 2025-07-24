// --- Admin Credentials (CHANGE THESE!) ---
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'trichy123';

// --- Initial Default Trip Data ---
// This is a backup, used only if localStorage is empty.
// 🔥 IMPORTANT: This list MUST be identical to the one in your main `script.js`
const defaultTripData = [
    { category: "Tamil Nadu Destinations", title: "Kanyakumari", image: "images/kanyakumari.jpg", description: "..." },
    { category: "Tamil Nadu Destinations", title: "Chennai", image: "images/Chennai.jpg", description: "..." },
    // ... PASTE YOUR FULL LIST OF TRIP OBJECTS HERE ...
    { category: "North India Adventures", title: "Jammu - Vaishno Devi", image: "images/JAMMU.jpg", description: "..." }
];

document.addEventListener('DOMContentLoaded', () => {
    let tripData;

    // --- DOM Element Selection ---
    const loginSection = document.getElementById('login-section');
    const adminPanelContent = document.getElementById('admin-panel-content');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const loginError = document.getElementById('login-error');
    const addTripButton = document.getElementById('add-trip-button');
    const deletableTripsList = document.getElementById('deletable-trips-list');

    // --- Login/Logout UI Functions ---
    function showAdminPanel() {
        loginSection.style.display = 'none';
        adminPanelContent.style.display = 'block';
    }
    function showLoginForm() {
        loginSection.style.display = 'block';
        adminPanelContent.style.display = 'none';
        document.getElementById('password').value = '';
    }
    function checkLoginStatus() {
        if (sessionStorage.getItem('isAdminLoggedIn') === 'true') {
            showAdminPanel();
        } else {
            showLoginForm();
        }
    }

    // --- Core Data Functions ---
    function loadTrips() {
        const savedTrips = localStorage.getItem('myTripData');
        tripData = savedTrips ? JSON.parse(savedTrips) : defaultTripData;
    }
    function saveAndRedraw() {
        localStorage.setItem('myTripData', JSON.stringify(tripData));
        populateDeleteList(); // Just redraw the delete list
    }
    function populateDeleteList() {
        deletableTripsList.innerHTML = '';
        tripData.forEach((trip, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${trip.title} (${trip.category})`;
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';
            deleteButton.dataset.index = index;
            listItem.appendChild(deleteButton);
            deletableTripsList.appendChild(listItem);
        });
    }

    // --- Event Listeners ---
    loginButton.addEventListener('click', () => {
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        if (user === ADMIN_USER && pass === ADMIN_PASS) {
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            showAdminPanel();
            loginError.style.display = 'none';
        } else {
            loginError.style.display = 'block';
        }
    });

    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('isAdminLoggedIn');
        showLoginForm();
    });

    addTripButton.addEventListener('click', () => {
        const title = document.getElementById('new-title').value.trim();
        const image = document.getElementById('new-image').value.trim();
        const category = document.getElementById('new-category').value.trim();
        const description = document.getElementById('new-description').value.trim();
        if (title && image && category && description) {
            tripData.push({ title, image, category, description });
            saveAndRedraw();
            document.getElementById('new-title').value = '';
            document.getElementById('new-image').value = '';
            document.getElementById('new-category').value = '';
            document.getElementById('new-description').value = '';
            alert(`'${title}' was added!`);
        } else {
            alert('Please fill out all fields.');
        }
    });

    deletableTripsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const indexToDelete = parseInt(event.target.dataset.index, 10);
            const tripTitle = tripData[indexToDelete].title;
            if (confirm(`Are you sure you want to delete '${tripTitle}'?`)) {
                tripData.splice(indexToDelete, 1);
                saveAndRedraw();
            }
        }
    });

    // --- Initialize the Admin Page ---
    loadTrips();
    populateDeleteList();
    checkLoginStatus();
});