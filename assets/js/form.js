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
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Object to be posted on blog
    const blogPost = {
        username: userName.value,
        title: blogTitle.value,
        content: blogContent.value
    }
    console.log(blogPost);
    // If all fields are non-empty, add post to array and store the array
    if (blogPost.username && blogPost.title && blogPost.content) {
        tempArray.push(blogPost);
        localStorage.setItem('storage', JSON.stringify(tempArray));
        // move to blog posts page
        window.location.href = './blog.html'
    } else {
        window.alert('Please complete all fields of form');
    }
})