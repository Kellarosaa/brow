function redirect() {
    const query = document.getElementById('searchBar').value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term.");
    }
}
