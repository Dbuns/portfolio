let posts = [
    { title: 'Palette Engine: better colors for scientific plots', image: 'projects/palette-engine/thumb.png', category: 'python', link: 'projects/palette-engine/palette-engine.html', date: 'August 2026' },
    { title: 'Revisiting an old project: KMCS in Python', image: 'projects/kmcs/thumb.png', category: 'python', link: 'projects/kmcs/kmcs.html', date: 'August 2026' },
];

let filteredPosts = [...posts];
let postsLoaded = 0;
const postsPerBatch = 9;
let loading = false;

function loadPosts() {
    const grid = document.getElementById('posts-grid');
    const nextPosts = filteredPosts.slice(postsLoaded, postsLoaded + postsPerBatch);

    nextPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <a href="${post.link}">
                <img src="${post.image}" alt="${post.title}">
                <div class="overlay">
                    <div class="overlay-text">
                        <h2>${post.title}</h2>
                        <p>${post.date}</p>
                    </div>
                </div>
            </a>
        `;
        grid.appendChild(postElement);
    });

    postsLoaded += postsPerBatch;
}

function filterPosts(button) {
    const category = button.getAttribute('data-category');

    // Remove highlight from all buttons
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => {
        btn.classList.remove('active-filter');
        btn.setAttribute('aria-pressed', 'false');
    });

    // Highlight clicked one
    button.classList.add('active-filter');
    button.setAttribute('aria-pressed', 'true');

    // Filter posts
    filteredPosts = category === 'all' ? [...posts] : posts.filter(post => post.category === category);
    document.getElementById('posts-grid').innerHTML = '';
    postsLoaded = 0;
    loadPosts();
}


// Infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        loading = true;
        setTimeout(() => {
            loadPosts();
            loading = false;
        }, 500);
    }
});

loadPosts();
