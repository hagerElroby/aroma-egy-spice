// Function to handle the active class toggle
function toggleClassActive() {
    const links = document.querySelectorAll('.menu-main-menu a');
    // Function to remove active class from all links
    function removeActiveClasses() {
        links.forEach(link => link.classList.remove('active'));
    }

    // Add event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            removeActiveClasses(); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });
    
}

toggleClassActive();

// Function to open and close the menu
function openMenu() {
    const menuIcon = document.querySelector('.top-bar-right');
    const side = document.getElementById('side');
    const closeWrapper = document.getElementById('close-wrapper');
    
    menuIcon.addEventListener('click', function(event) {
        event.preventDefault();
        side.style.right = "0"; // Open the menu
    });

    closeWrapper.addEventListener('click', function(event) {
        event.preventDefault();
        side.style.right = "-250px"; // Close the menu
    });

    // Close the menu when a link is clicked
    const menuLinks = document.querySelectorAll('.menu-main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            side.style.right = "-250px"; // Close the menu
        });
    });
}

openMenu();

// Function to set the current date
const myDate = new Date();
const dateSpan = document.getElementById("date");
dateSpan.innerHTML = myDate.getFullYear();
