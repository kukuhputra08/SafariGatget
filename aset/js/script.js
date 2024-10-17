const bcksound = document.getElementById('backsound');
window.onload = function () {
    Audio.volume = 0.2;
}



// Fungsi untuk membuka pop-up
document.querySelectorAll('.open-popup').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const popupId = this.getAttribute('data-popup');
        document.getElementById(popupId).style.display = 'flex';
    });
});

// Fungsi untuk menutup pop-up
document.querySelectorAll('.close-popup').forEach(span => {
    span.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Menutup pop-up jika user mengklik di luar konten pop-up
window.onclick = function (event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
};


// humberge menu\
const navbarNav = document.getElementById('navbar-nav');
const humbergerMenu = document.getElementById('humberger-menu');
document.addEventListener("DOMContentLoaded", function () {
    humbergerMenu.addEventListener('click', function (event) {
        event.preventDefault();
        navbarNav.classList.toggle('active');
    })
});

const removeNav = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!removeNav.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});



document.getElementById('searchButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const faunaItems = document.querySelectorAll('.gambar-fauna'); // Select fauna items
    const floraItems = document.querySelectorAll('.gambar-flora'); // Select flora items
    const searchResults = document.getElementById('searchResults');

    searchResults.innerHTML = ''; // Clear previous results

    // Check if the input has 2 or more characters
    if (searchInput.length >= 2) {
        // Search fauna items
        faunaItems.forEach(item => {
            const faunaName = item.getAttribute('data-name').toLowerCase();
            if (faunaName.includes(searchInput)) {
                const clone = item.cloneNode(true); // Clone matching item
                searchResults.appendChild(clone);   // Add to search results
            }
        });

        // Search flora items
        floraItems.forEach(item => {
            const floraName = item.getAttribute('data-name').toLowerCase();
            if (floraName.includes(searchInput)) {
                const clone = item.cloneNode(true); // Clone matching item
                searchResults.appendChild(clone);   // Add to search results
            }
        });

        // Show message if no results found
        if (searchResults.innerHTML === '') {
            searchResults.innerHTML = '<p>tidak ditemukan</p>';
        }
    } else {
        searchResults.innerHTML = '<p>Masukkan minimal 2 karakter untuk mencari</p>';
    }
});


