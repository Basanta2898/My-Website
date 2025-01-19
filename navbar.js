function toggleMenu() {
        const menu = document.getElementById('menu-content');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }

        // Function to show the search popup
        function showSearchPopup() {
        const searchPopup = document.getElementById('search-popup');
        searchPopup.style.display = 'flex';
        }
        
        // Function to close the search popup
        function hideSearchPopup() {
        const searchPopup = document.getElementById('search-popup');
        searchPopup.style.display = 'none';
        }

        // Function to perform the search
        function performSearch() {
            const searchInput = l

            // Redirect if the user enters a query
            if (searchInput.trim()) {
                const searchLink = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
                window.location.href = searchLink;
            } else {
                alert('Please enter a search query.');
            }
        }
        // Close search popup when clicking outside of it
        document.addEventListener('click', (event) => {
        const searchPopup = document.getElementById('search-popup');
        const searchIcon = document.querySelector('.search-icon');
        
        if (
        searchPopup.style.display === 'flex' &&
        !searchPopup.contains(event.target) &&
        !searchIcon.contains(event.target)
        ) {
        searchPopup.style.display = 'none';
        }
        });
        
        // Close menu when clicking outside of it
        document.addEventListener('click', (event) => {
        const menu = document.getElementById('menu-content');
        const menuIcon = document.querySelector('.menu-icon');
        
        if (
        menu.style.display === 'block' &&
        !menu.contains(event.target) &&
        !menuIcon.contains(event.target)
        ) {
        menu.style.display = 'none';
        document.body.classList.remove('menu-open');
        }
        });