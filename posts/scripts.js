// Sample posts
let posts = [
//    { title: 'Color Pallete', image: 'projects/post_01/thumbnail.png', category: 'python', link: 'projects/post_01/project_01.html', date: 'June 2025' },
//    { title: 'Post 2', image: 'projects/post_2/thumbnail.png', category: 'category2', link: 'projects/post_2/main.html', date: 'March 2025' },
//   { title: 'Post 3', image: 'projects/post_3/thumbnail.png', category: 'category1', link: 'projects/post_3/main.html', date: 'February 2025' },
//    { title: 'Post 4', image: 'projects/post_4/thumbnail.png', category: 'category2', link: 'projects/post_4/main.html', date: 'January 2025' },
//   { title: 'Post 5', image: 'projects/post_5/thumbnail.png', category: 'category1', link: 'projects/post_5/main.html', date: 'December 2024' },
//    { title: 'Post 6', image: 'projects/post_6/thumbnail.png', category: 'category2', link: 'projects/post_6/main.html', date: 'November 2024' },
//    { title: 'Post 7', image: 'projects/post_7/thumbnail.png', category: 'category1', link: 'projects/post_7/main.html', date: 'October 2024' },
//    { title: 'Post 8', image: 'projects/post_8/thumbnail.png', category: 'category2', link: 'projects/post_8/main.html', date: 'September 2024' },
//    { title: 'Post 9', image: 'projects/post_9/thumbnail.png', category: 'category1', link: 'projects/post_9/main.html', date: 'August 2024' },
//    { title: 'Post 10', image: 'projects/post_10/thumbnail.png', category: 'category2', link: 'projects/post_10/main.html', date: 'July 2024' },
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
    buttons.forEach(btn => btn.classList.remove('active-filter'));

    // Highlight clicked one
    button.classList.add('active-filter');

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
