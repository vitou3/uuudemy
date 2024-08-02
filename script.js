document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const searchQuery = document.getElementById('searchInput').value;
    const predefinedSearches = ['html', 'css', 'javascript', 'guitar', 'drum', 'video editing'];
    let searchURL;
    let message;

    if (predefinedSearches.includes(searchQuery.toLowerCase())) {
        message = "Are you ready! We will take you to the lesson.";
        searchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    } else {
        message = "We currently don't have this course yet. Instead, you can browse it on YouTube and find the one that suits you.";
        searchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
    }

    if (confirm(message)) {
        window.location.href = searchURL;
    }
});
