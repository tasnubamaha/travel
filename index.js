document.querySelector('.btn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    const searchQuery = encodeURIComponent(searchInput); // Encode the search query
    window.location.href = `package.html?query=${searchQuery}`;
});

