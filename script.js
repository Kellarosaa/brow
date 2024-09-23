function redirectToSearch() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search query.");
    }
}

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    if (value) {
        const suggestionList = ['example1', 'example2', 'example3']; // Sample suggestions
        suggestionList.forEach(item => {
            if (item.includes(value)) {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = item;
                suggestionItem.onclick = () => {
                    document.getElementById('searchQuery').value = item;
                    suggestions.innerHTML = '';
                };
                suggestions.appendChild(suggestionItem);
            }
        });
        suggestions.style.display = suggestions.innerHTML ? 'block' : 'none';
    } else {
        suggestions.style.display = 'none';
    }
}
