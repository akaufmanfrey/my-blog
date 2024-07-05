// Grab important content from form
const submitButton = document.querySelector('#submit');
const userName = document.querySelector('#username');
const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');

// Array of all blog posts
let tempArray = [];
// If there are previous blogposts, add them to tempArray
const posts = localStorage.getItem('storage');
if (posts) {
    tempArray = JSON.parse(posts);
}

// Store blog post when submit button is pushed and all fields have content
submitButton.addEventListener('click', function() {
    // Object to be posted on blog
    const blogPost = {
        username: userName.value,
        title: blogTitle.value,
        content: blogContent.value
    }
    // If all fields are non-empty, add post to array and store the array
    if (blogPost.username && blogPost.title && blogPost.content) {
        tempArray.push(blogPost);
        localStorage.setItem('storage', JSON.stringify(tempArray));
    } else {
        window.alert('Please complete all fields of form');
    }
})